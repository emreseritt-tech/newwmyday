// ========== AI-ASSISTANT.JS (PREMIUM EDITION) ==========
// En iyi performans + gpt-4o-mini + güvenli + hızlı

const healthTips = {
  tr: [
    "💧 Günde en az 2 litre su içmeyi unutmayın.",
    "😴 Her gece 7-8 saat uyumaya çalışın.",
    "🏃 Haftada 150 dakika egzersiz yapın.",
    "🥗 Omega-3 için balık tüketin.",
    "🧘 Meditasyon stresinizi azaltır.",
    "☀️ Sabah güneş ışığı alın.",
    "📱 Uyumadan önce ekranlardan uzak durun.",
    "🍎 Günde 5 porsiyon sebze-meyve tüketin."
  ],
  ar: [
    "💧 اشرب 2 لتر ماء يومياً.",
    "😴 نم 7-8 ساعات كل ليلة.",
    "🏃 مارس 150 دقيقة من الرياضة أسبوعياً.",
    "🥗 تناول الأسماك الدهنية.",
    "🧘 جرّب التأمل لتقليل التوتر.",
    "☀️ تعرّض لضوء الشمس صباحاً.",
    "📱 ابتعد عن الشاشات قبل النوم.",
    "🍎 تناول 5 حصص من الخضار والفواكه."
  ],
  en: [
    "💧 Drink at least 2 liters of water daily.",
    "😴 Aim for 7–8 hours of sleep.",
    "🏃 Exercise 150 minutes weekly.",
    "🥗 Add fatty fish to your diet.",
    "🧘 Try meditation to reduce stress.",
    "☀️ Get morning sunlight.",
    "📱 Avoid screens before bed.",
    "🍎 Eat 5 servings of fruits/vegetables."
  ],
  ru: [
    "💧 Пейте 2 литра воды ежедневно.",
    "😴 Спите 7–8 часов.",
    "🏃 Упражняйтесь 150 минут в неделю.",
    "🥗 Ешьте жирную рыбу.",
    "🧘 Попробуйте медитацию.",
    "☀️ Получайте утренний солнечный свет.",
    "📱 Избегайте экранов перед сном.",
    "🍎 Ешьте 5 порций овощей и фруктов."
  ]
};

// Güvenli HTML escape
function escapeHtml(text) {
  return text.replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  }[m]));
}

async function sendAiQuestion() {
  const input = document.getElementById("aiQuestion");
  const msgBox = document.getElementById("aiMessages");
  const question = input.value.trim();

  if (!question) {
    toast(t("enter_name"));
    return;
  }

  // Kullanıcı mesajını ekle
  msgBox.innerHTML += `<div class="ai-chat-message"><strong>🧑:</strong> ${escapeHtml(question)}</div>`;
  msgBox.scrollTop = msgBox.scrollHeight;
  input.value = "";

  const apiKey = appData.apiKey;

  // === OFFLINE MOD ===
  if (!apiKey) {
    const tip = healthTips[currentLanguage][Math.floor(Math.random() * healthTips[currentLanguage].length)];
    msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖 (Offline):</strong> ${tip}</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;
    return;
  }

  // === ONLINE MOD ===
  try {
    const context = `
Сон: ${appData.sleep} ч
Вода: ${appData.water} мл
Шаги: ${appData.steps}
Лекарства: ${appData.medicines.map(m => m.name + " (" + m.dosage + ")").join(", ")}
Приёмов сегодня: ${appData.medicineIntakes.filter(i => i.dateStr === getTodayStr()).length}
    `;

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
            content: `Ты — врач-консультант. Отвечай кратко (1–2 предложения) на языке ${currentLanguage}. Контекст: ${context}`
          },
          {
            role: "user",
            content: question
          }
        ],
        max_tokens: 200,
        temperature: 0.5
      })
    });

    const data = await response.json();

    if (!response.ok) {
      msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖:</strong> ❌ ${escapeHtml(data.error?.message || "API error")}</div>`;
    } else {
      const answer = data.choices?.[0]?.message?.content || "Ответ не получен.";
      msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖:</strong> ${escapeHtml(answer)}</div>`;
    }
  } catch (err) {
    const tip = healthTips[currentLanguage][Math.floor(Math.random() * healthTips[currentLanguage].length)];
    msgBox.innerHTML += `<div class="ai-chat-message"><strong>🤖 (Offline):</strong> ${tip}</div>`;
  }

  msgBox.scrollTop = msgBox.scrollHeight;
}
