// ========== AI-ASSISTANT.JS (DÜZELTİLMİŞ) ==========
// Düzeltmeler:
//  - escapeHtml artık burada TANIMLANMIYOR (index.html'deki kullanılıyor — çakışma önlendi)
//  - currentLanguage global scope'tan okunuyor (window üzerinden güvenli erişim)
//  - appData erişimi güvenli
//  - Offline mod dil geçişinde doğru dilde cevap veriyor
 
const healthTips = {
  tr: [
    "💧 Günde en az 2 litre su içmeyi unutmayın.",
    "😴 Her gece 7-8 saat uyumaya çalışın.",
    "🏃 Haftada 150 dakika egzersiz yapın.",
    "🥗 Omega-3 için balık tüketin.",
    "🧘 Meditasyon stresinizi azaltır.",
    "☀️ Sabah güneş ışığı alın.",
    "📱 Uyumadan önce ekranlardan uzak durun.",
    "🍎 Günde 5 porsiyon sebze-meyve tüketin.",
    "🩺 Düzenli sağlık kontrolü yaptırın.",
    "🚶 Her saat başı kısa yürüyüş yapın."
  ],
  ar: [
    "💧 اشرب 2 لتر ماء يومياً.",
    "😴 نم 7-8 ساعات كل ليلة.",
    "🏃 مارس 150 دقيقة من الرياضة أسبوعياً.",
    "🥗 تناول الأسماك الدهنية.",
    "🧘 جرّب التأمل لتقليل التوتر.",
    "☀️ تعرّض لضوء الشمس صباحاً.",
    "📱 ابتعد عن الشاشات قبل النوم.",
    "🍎 تناول 5 حصص من الخضار والفواكه.",
    "🩺 أجرِ فحوصات دورية.",
    "🚶 تحرك كل ساعة."
  ],
  en: [
    "💧 Drink at least 2 liters of water daily.",
    "😴 Aim for 7–8 hours of sleep.",
    "🏃 Exercise 150 minutes weekly.",
    "🥗 Add fatty fish to your diet.",
    "🧘 Try meditation to reduce stress.",
    "☀️ Get morning sunlight.",
    "📱 Avoid screens before bed.",
    "🍎 Eat 5 servings of fruits/vegetables.",
    "🩺 Schedule regular health check-ups.",
    "🚶 Take a short walk every hour."
  ],
  ru: [
    "💧 Пейте 2 литра воды ежедневно.",
    "😴 Спите 7–8 часов.",
    "🏃 Упражняйтесь 150 минут в неделю.",
    "🥗 Ешьте жирную рыбу.",
    "🧘 Попробуйте медитацию.",
    "☀️ Получайте утренний солнечный свет.",
    "📱 Избегайте экранов перед сном.",
    "🍎 Ешьте 5 порций овощей и фруктов.",
    "🩺 Регулярно проходите медосмотр.",
    "🚶 Делайте короткие прогулки каждый час."
  ]
};
 
function getRandomTip() {
  // currentLanguage global scope'tan — güvenli okuma
  const lang = (typeof currentLanguage !== 'undefined' && healthTips[currentLanguage])
    ? currentLanguage
    : 'en';
  const tips = healthTips[lang];
  return tips[Math.floor(Math.random() * tips.length)];
}
 
async function sendAiQuestion() {
  const input   = document.getElementById("aiQuestion");
  const msgBox  = document.getElementById("aiMessages");
  const sendBtn = document.getElementById("ai-send-btn");
 
  if (!input || !msgBox) return;
 
  const question = input.value.trim();
  if (!question) {
    if (typeof toast === 'function') toast(t("enter_name"));
    return;
  }
 
  // escapeHtml — index.html'de tanımlı, burada kullanıyoruz
  const safeQuestion = (typeof escapeHtml === 'function') ? escapeHtml(question) : question;
 
  // Kullanıcı mesajı
  msgBox.innerHTML += `<div class="ai-chat-message"><strong>🧑:</strong> ${safeQuestion}</div>`;
  msgBox.scrollTop = msgBox.scrollHeight;
  input.value = "";
 
  // Butonu devre dışı bırak (çift gönderimi önle)
  if (sendBtn) { sendBtn.disabled = true; sendBtn.textContent = "⏳"; }
 
  const apiKey = (typeof appData !== 'undefined') ? appData.apiKey : '';
 
  // ── OFFLINE MOD ─────────────────────────────────────────────
  if (!apiKey) {
    const tip = getRandomTip();
    msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖 (Offline):</strong> ${tip}</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;
    if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = t('ai_send_btn'); }
    return;
  }
 
  // ── ONLINE MOD (OpenAI gpt-4o-mini) ─────────────────────────
  try {
    const today       = (typeof getTodayStr === 'function') ? getTodayStr() : new Date().toLocaleDateString('en-CA');
    const todayIntakes = (typeof appData !== 'undefined')
      ? appData.medicineIntakes.filter(i => i.dateStr === today).length
      : 0;
 
    const medList = (typeof appData !== 'undefined' && appData.medicines.length)
      ? appData.medicines.map(m => `${m.name} (${m.dosage})`).join(', ')
      : '—';
 
    const langName = { tr: 'Turkish', ar: 'Arabic', en: 'English', ru: 'Russian' }[currentLanguage] || 'English';
 
    const context = `
User health data today:
- Sleep: ${typeof appData !== 'undefined' ? appData.sleep : 0} hours
- Water: ${typeof appData !== 'undefined' ? appData.water : 0} ml
- Steps: ${typeof appData !== 'undefined' ? appData.steps : 0}
- Medicines: ${medList}
- Intakes today: ${todayIntakes}
`.trim();
 
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a helpful health consultant. Answer BRIEFLY (1-3 sentences max). Always respond in ${langName}. Do not give diagnosis. Context: ${context}`
          },
          {
            role: "user",
            content: question
          }
        ],
        max_tokens: 250,
        temperature: 0.5
      })
    });
 
    const data = await response.json();
 
    if (!response.ok) {
      const errMsg = data.error?.message || "API error";
      const safeErr = (typeof escapeHtml === 'function') ? escapeHtml(errMsg) : errMsg;
      msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖:</strong> ❌ ${safeErr}</div>`;
    } else {
      const answer = data.choices?.[0]?.message?.content || "No response.";
      const safeAns = (typeof escapeHtml === 'function') ? escapeHtml(answer) : answer;
      msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖:</strong> ${safeAns}</div>`;
    }
 
  } catch (err) {
    // Ağ hatası → offline tipine dön
    const tip = getRandomTip();
    msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖 (Offline):</strong> ${tip}</div>`;
    console.warn("AI API error:", err);
  }
 
  msgBox.scrollTop = msgBox.scrollHeight;
  if (sendBtn) { sendBtn.disabled = false; sendBtn.textContent = t('ai_send_btn'); }
}
 
// Enter tuşuyla gönder (Shift+Enter = yeni satır)
document.addEventListener('DOMContentLoaded', function () {
  const aiQ = document.getElementById('aiQuestion');
  if (aiQ) {
    aiQ.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendAiQuestion();
      }
    });
  }
});
 
