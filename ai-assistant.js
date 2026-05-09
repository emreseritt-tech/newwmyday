// ========== AI-ASSISTANT.JS ==========
// OpenAI API entegrasyonu + Fallback sağlık ipuçları

async function sendAiQuestion() {
  const question = document.getElementById('aiQuestion').value.trim();
  if (!question) return;
  
  const messagesDiv = document.getElementById('aiMessages');
  messagesDiv.innerHTML += `<div class="ai-chat-message"><strong>❓ Siz:</strong> ${escapeHtml(question)}</div>`;
  
  document.getElementById('aiQuestion').value = '';
  
  const context = `
    User Health Data:
    - Sleep: ${appData.sleep} hours
    - Water: ${appData.water} ml
    - Steps: ${appData.steps}
    - Active Medicines: ${appData.medicines.length}
    - Today's Intakes: ${appData.medicineIntakes.filter(i => i.dateStr === getTodayStr()).length}
    - Language: ${currentLanguage}
  `;
  
  try {
    if (appData.apiKey) {
      await callOpenAiApi(question, context, messagesDiv);
    } else {
      provideOfflineSuggestion(question, messagesDiv);
    }
  } catch (error) {
    console.error('AI Error:', error);
    provideOfflineSuggestion(question, messagesDiv);
  }
}

async function callOpenAiApi(question, context, messagesDiv) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${appData.apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful health assistant. Answer in ${
            currentLanguage === 'tr' ? 'Turkish' : 
            currentLanguage === 'ar' ? 'Arabic' : 
            currentLanguage === 'en' ? 'English' : 'Russian'
          }. Context: ${context}`
        },
        { role: 'user', content: question }
      ],
      max_tokens: 300,
      temperature: 0.7
    })
  });
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  
  const data = await response.json();
  const answer = data.choices[0].message.content;
  
  messagesDiv.innerHTML += `<div class="ai-chat-message"><strong>🤖 AI:</strong> ${answer}</div>`;
  messagesDiv.parentElement.scrollTop = messagesDiv.parentElement.scrollHeight;
}

function provideOfflineSuggestion(question, messagesDiv) {
  const suggestions = {
    tr: {
      su: '💧 Su tüketimi çok önemli! Günde en az 2 litre su içmeyi hedefleyin. Daha iyi hissedeceksiniz.',
      uyku: '😴 Sağlıklı uyku için düzenli uyku saati belirleyin. 7-9 saat ideal.',
      egzersiz: '🏃 Hergün en az 30 dakika hareket yapın. Adımlarınızı takip etmeyi unutmayın!',
      ilac: '💊 İlaçlarınızı zamanında almayı unutmayın. Takvim sekmesini kontrol edin.',
      stress: '😌 Stresi azaltmak için meditasyon veya derin nefes alışkanlığı edinin.',
      default: '💡 Sağlıklı yaşam için su, uyku ve egzersizeye dikkat edin.'
    },
    ar: {
      ماء: '💧 شرب الماء مهم جداً! استهدف 2 لتر على الأقل يومياً.',
      نوم: '😴 للنوم الصحي، حدد وقتاً منتظماً للنوم. 7-9 ساعات مثالية.',
      تمرين: '🏃 تحرك لمدة 30 دقيقة على الأقل يومياً. تتبع خطواتك!',
      دواء: '💊 لا تنسَ تناول أدويتك في الوقت المحدد. تحقق من التقويم.',
      stress: '😌 للتغلب على التوتر، جرب التأمل أو التنفس العميق.',
      default: '💡 للعيش بصحة، انتبه للماء والنوم والتمارين.'
    },
    en: {
      water: '💧 Water is very important! Aim for at least 2 liters per day.',
      sleep: '😴 For healthy sleep, set a regular sleep schedule. 7-9 hours is ideal.',
      exercise: '🏃 Move for at least 30 minutes daily. Don\'t forget to track your steps!',
      medicine: '💊 Don\'t forget to take your medicines on time. Check the schedule.',
      stress: '😌 To reduce stress, try meditation or deep breathing.',
      default: '💡 For good health, pay attention to water, sleep, and exercise.'
    },
    ru: {
      вода: '💧 Вода очень важна! Пейте не менее 2 литров в день.',
      сон: '😴 Для здорового сна установите регулярное время. 7-9 часов идеально.',
      упражнение: '🏃 Двигайтесь не менее 30 минут в день. Не забывайте отслеживать шаги!',
      лекарство: '💊 Не забывайте вовремя принимать лекарства. Проверьте график.',
      стресс: '😌 Чтобы снизить стресс, попробуйте медитацию или глубокое дыхание.',
      default: '💡 Для хорошего здоровья уделяйте внимание воде, сну и упражнениям.'
    }
  };
  
  const langSuggestions = suggestions[currentLanguage] || suggestions.en;
  let answer = langSuggestions.default;
  
  const q = question.toLowerCase();
  for (const [key, value] of Object.entries(langSuggestions)) {
    if (q.includes(key)) {
      answer = value;
      break;
    }
  }
  
  messagesDiv.innerHTML += `<div class="ai-chat-message"><strong>🤖 AI (Offline):</strong> ${answer}</div>`;
  messagesDiv.parentElement.scrollTop = messagesDiv.parentElement.scrollHeight;
}

window.sendAiQuestion = sendAiQuestion;
