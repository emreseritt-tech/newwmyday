// ========== LANGUAGES.JS ==========
// 4 dil desteği: Türkçe, Arapça, İngilizce, Rusça

const translations = {
  tr: {
    // Dashboard
    'header_title': 'Günüm',
    'card_sleep': 'Uyku',
    'card_water': 'Su',
    'card_steps': 'Adımlar',
    'card_medicine': 'İlaçlar',
    'card_schedule': 'Takvim',
    'card_ai': 'AI Asistan',
    
    // Navigation
    'nav_home': 'Ana Sayfa',
    'nav_stats': 'İstatistikler',
    'nav_profile': 'Profil',
    
    // Sleep
    'header_sleep': 'Uyku',
    'sleep_add_title': 'Uyku Ekle',
    'sleep_save_btn': '💾 Kaydet',
    'sleep_history_title': 'Uyku Geçmişi',
    'hours': 'saat',
    'sleep_hours_unit': 'saat bugün',
    
    // Water
    'header_water': 'Su',
    'water_quick_title': 'Hızlı Ekleme',
    'water_add_btn': '💾 Ekle',
    'water_history_title': 'Su Geçmişi',
    'water_unit': 'ml bugün (hedef: 2000 ml)',
    
    // Steps
    'header_steps': 'Adımlar',
    'steps_add_title': 'Adım Ekle',
    'steps_save_btn': '💾 Kaydet',
    'steps_history_title': 'Adım Geçmişi',
    'steps': 'adım',
    
    // Medicine
    'header_medicine': 'İlaçlar + QR',
    'med_add_title': '➕ İlaç Ekle',
    'med_save_btn': '💾 Manuel Kaydet',
    'med_list_title': '📋 İlaçlarım',
    'med_intake_history_title': '📜 Kullanım Geçmişi',
    'medicine_intakes_unit': 'kullanım bugün',
    'medicines': 'ilaç',
    'intakes': 'kullanım',
    'take_now': '💊 Şimdi Al',
    'edit': '✏️ Düzenle',
    'delete': '🗑️ Sil',
    'taken': '✅ Alındı',
    'not_taken': '⚠️ Alınmadı',
    
    // Schedule
    'header_schedule': '📅 Günlük Takvim',
    'schedule_desc': 'Bugünün tam ilaç takvimi önerilerle',
    'schedule_time': 'Saat',
    'schedule_medicine': 'İlaç',
    'schedule_instruction': 'Talimat',
    'schedule_status': 'Durum',
    
    // AI Assistant
    'header_ai': '🤖 AI Asistan',
    'ai_title': 'Sağlık Yardımcısı',
    'ai_send_btn': 'Gönder',
    'ai_question_placeholder': 'Sağlık hakkında soru sorun...',
    
    // Stats
    'header_stats': '📊 İstatistikler',
    'stat_sleep_title': '😴 Uyku (bugün)',
    'stat_water_title': '💧 Su',
    'stat_steps_title': '👟 Adımlar',
    'stat_med_title': '💊 İlaçlar',
    'stat_intakes_title': '✅ Bugünün Kullanımları',
    'unit_stat_med': 'aktif ilaç',
    'unit_stat_intakes': 'kaydedilen kullanım',
    'charts_btn': '📈 Haftalık Grafikler',
    
    // Charts
    'header_charts': '📈 Haftalık Grafikler',
    'chart_sleep_title': '😴 7 Günlük Uyku',
    'chart_water_title': '💧 7 Günlük Su',
    'chart_steps_title': '👟 7 Günlük Adımlar',
    
    // Profile
    'header_profile': '👤 Profil',
    'profile_title': 'Günüm — Pro + QR + AI',
    'profile_desc': 'Sağlık takibi + QR-kod + AI asistan',
    'theme_label': 'Tema:',
    'api_key_label': 'DeepSeek API Key (AI için):',
    'save_api_btn': '💾 API Key Kaydet',
    'export_btn': '📁 Verileri Dışa Aktar (JSON)',
    'import_btn': '📂 Dosyadan İçe Aktar',
    'clear_btn': '🗑️ Tüm Verileri Sil',
    
    // Messages
    'enter_name': 'Adını gir',
    'med_added': 'İlaç eklendi: ',
    'med_deleted': 'İlaç silindi',
    'confirm_delete': 'İlaç silinsin mi?',
    'no_data': 'Veri yok',
    'no_medicines': 'İlaç yok',
    'no_records': 'Kayıt yok',
    'invalid_qr': '❌ Geçersiz QR',
    'qr_added': '💊 QR eklendi: ',
    'time_take': '💊 Zaman: ',
    'dosage': 'Doz',
    'name': 'Ad',
    'time': 'Saat',
    'days': 'gün',
    'enter_api_key': 'API Key gir',
    'api_saved': 'API Key kaydedildi',
    'camera_error': 'Kamera hatası: ',
    'updated': 'Güncellendi',
    'data_exported': '📁 Veriler dışa aktarıldı',
    'data_imported': '✅ Veriler içe aktarıldı',
    'invalid_file': '❌ Dosya formatı geçersiz',
    'file_error': '❌ Dosya okuma hatası',
    'data_cleared': '🗑️ Veriler temizlendi',
    'confirm_clear_all': 'Tüm veriler silinsin mi? Geri alınamaz.',
    'reminder': '🔔 Hatırlatma: ',
  },
  ar: {
    'header_title': 'يومي',
    'card_sleep': 'النوم',
    'card_water': 'الماء',
    'card_steps': 'الخطوات',
    'card_medicine': 'الأدوية',
    'card_schedule': 'الجدول',
    'card_ai': 'مساعد ذكي',
    
    'nav_home': 'الرئيسية',
    'nav_stats': 'الإحصائيات',
    'nav_profile': 'الملف الشخصي',
    
    'header_sleep': 'النوم',
    'sleep_add_title': 'إضافة النوم',
    'sleep_save_btn': '💾 حفظ',
    'sleep_history_title': 'سجل النوم',
    'hours': 'ساعة',
    'sleep_hours_unit': 'ساعات اليوم',
    
    'header_water': 'الماء',
    'water_quick_title': 'إضافة سريعة',
    'water_add_btn': '💾 إضافة',
    'water_history_title': 'سجل الماء',
    'water_unit': 'مل اليوم (الهدف: 2000 مل)',
    
    'header_steps': 'الخطوات',
    'steps_add_title': 'إضافة خطوات',
    'steps_save_btn': '💾 حفظ',
    'steps_history_title': 'سجل الخطوات',
    'steps': 'خطوة',
    
    'header_medicine': 'الأدوية + QR',
    'med_add_title': '➕ إضافة دواء',
    'med_save_btn': '💾 حفظ يدوي',
    'med_list_title': '📋 أدويتي',
    'med_intake_history_title': '📜 سجل الاستخدام',
    'medicine_intakes_unit': 'جرعات اليوم',
    'medicines': 'دواء',
    'intakes': 'جرعة',
    'take_now': '💊 تناول الآن',
    'edit': '✏️ تعديل',
    'delete': '🗑️ حذف',
    'taken': '✅ تم تناوله',
    'not_taken': '⚠️ لم يتم تناوله',
    
    'header_schedule': '📅 جدول اليوم',
    'schedule_desc': 'جدول الأدوية الكامل لليوم مع التوصيات',
    'schedule_time': 'الوقت',
    'schedule_medicine': 'الدواء',
    'schedule_instruction': 'التعليمات',
    'schedule_status': 'الحالة',
    
    'header_ai': '🤖 مساعد ذكي',
    'ai_title': 'مساعد صحي',
    'ai_send_btn': 'إرسال',
    'ai_question_placeholder': 'اسأل سؤالاً صحياً...',
    
    'header_stats': '📊 الإحصائيات',
    'stat_sleep_title': '😴 النوم (اليوم)',
    'stat_water_title': '💧 الماء',
    'stat_steps_title': '👟 الخطوات',
    'stat_med_title': '💊 الأدوية',
    'stat_intakes_title': '✅ جرعات اليوم',
    'unit_stat_med': 'أدوية نشطة',
    'unit_stat_intakes': 'جرعات مسجلة',
    'charts_btn': '📈 الرسوم البيانية الأسبوعية',
    
    'header_charts': '📈 الرسوم البيانية الأسبوعية',
    'chart_sleep_title': '😴 النوم 7 أيام',
    'chart_water_title': '💧 الماء 7 أيام',
    'chart_steps_title': '👟 الخطوات 7 أيام',
    
    'header_profile': '👤 الملف الشخصي',
    'profile_title': 'يومي — Pro + QR + AI',
    'profile_desc': 'تتبع الصحة + رمز QR + مساعد ذكي',
    'theme_label': 'المظهر:',
    'api_key_label': 'مفتاح DeepSeek API (للمساعد الذكي):',
    'save_api_btn': '💾 حفظ API Key',
    'export_btn': '📁 تصدير البيانات (JSON)',
    'import_btn': '📂 استيراد من ملف',
    'clear_btn': '🗑️ حذف جميع البيانات',
    
    'enter_name': 'أدخل الاسم',
    'med_added': 'تم إضافة الدواء: ',
    'med_deleted': 'تم حذف الدواء',
    'confirm_delete': 'هل تريد حذف الدواء؟',
    'no_data': 'لا توجد بيانات',
    'no_medicines': 'لا توجد أدوية',
    'no_records': 'لا توجد سجلات',
    'invalid_qr': '❌ QR غير صالح',
    'qr_added': '💊 تم إضافة QR: ',
    'time_take': '💊 الوقت: ',
    'dosage': 'الجرعة',
    'name': 'الاسم',
    'time': 'الوقت',
    'days': 'أيام',
    'enter_api_key': 'أدخل API Key',
    'api_saved': 'تم حفظ API Key',
    'camera_error': 'خطأ الكاميرا: ',
    'updated': 'تم التحديث',
    'data_exported': '📁 تم تصدير البيانات',
    'data_imported': '✅ تم استيراد البيانات',
    'invalid_file': '❌ صيغة الملف غير صحيحة',
    'file_error': '❌ خطأ في قراءة الملف',
    'data_cleared': '🗑️ تم مسح البيانات',
    'confirm_clear_all': 'هل تريد حذف جميع البيانات؟ لا يمكن التراجع.',
    'reminder': '🔔 تذكير: ',
  },
  en: {
    'header_title': 'My Day',
    'card_sleep': 'Sleep',
    'card_water': 'Water',
    'card_steps': 'Steps',
    'card_medicine': 'Medicines',
    'card_schedule': 'Schedule',
    'card_ai': 'AI Assistant',
    
    'nav_home': 'Home',
    'nav_stats': 'Statistics',
    'nav_profile': 'Profile',
    
    'header_sleep': 'Sleep',
    'sleep_add_title': 'Add Sleep',
    'sleep_save_btn': '💾 Save',
    'sleep_history_title': 'Sleep History',
    'hours': 'hours',
    'sleep_hours_unit': 'hours today',
    
    'header_water': 'Water',
    'water_quick_title': 'Quick Add',
    'water_add_btn': '💾 Add',
    'water_history_title': 'Water History',
    'water_unit': 'ml today (goal: 2000 ml)',
    
    'header_steps': 'Steps',
    'steps_add_title': 'Add Steps',
    'steps_save_btn': '💾 Save',
    'steps_history_title': 'Steps History',
    'steps': 'steps',
    
    'header_medicine': 'Medicines + QR',
    'med_add_title': '➕ Add Medicine',
    'med_save_btn': '💾 Save Manual',
    'med_list_title': '📋 My Medicines',
    'med_intake_history_title': '📜 Intake History',
    'medicine_intakes_unit': 'intakes today',
    'medicines': 'medicine',
    'intakes': 'intake',
    'take_now': '💊 Take Now',
    'edit': '✏️ Edit',
    'delete': '🗑️ Delete',
    'taken': '✅ Taken',
    'not_taken': '⚠️ Not Taken',
    
    'header_schedule': '📅 Daily Schedule',
    'schedule_desc': 'Complete medicine schedule for today with recommendations',
    'schedule_time': 'Time',
    'schedule_medicine': 'Medicine',
    'schedule_instruction': 'Instruction',
    'schedule_status': 'Status',
    
    'header_ai': '🤖 AI Assistant',
    'ai_title': 'Health Assistant',
    'ai_send_btn': 'Send',
    'ai_question_placeholder': 'Ask a health question...',
    
    'header_stats': '📊 Statistics',
    'stat_sleep_title': '😴 Sleep (today)',
    'stat_water_title': '💧 Water',
    'stat_steps_title': '👟 Steps',
    'stat_med_title': '💊 Medicines',
    'stat_intakes_title': '✅ Today\'s Intakes',
    'unit_stat_med': 'active medicines',
    'unit_stat_intakes': 'recorded intakes',
    'charts_btn': '📈 Weekly Charts',
    
    'header_charts': '📈 Weekly Charts',
    'chart_sleep_title': '😴 Sleep 7 Days',
    'chart_water_title': '💧 Water 7 Days',
    'chart_steps_title': '👟 Steps 7 Days',
    
    'header_profile': '👤 Profile',
    'profile_title': 'My Day — Pro + QR + AI',
    'profile_desc': 'Health tracking + QR-code + AI assistant',
    'theme_label': 'Theme:',
    'api_key_label': 'DeepSeek API Key (for AI):',
    'save_api_btn': '💾 Save API Key',
    'export_btn': '📁 Export Data (JSON)',
    'import_btn': '📂 Import From File',
    'clear_btn': '🗑️ Delete All Data',
    
    'enter_name': 'Enter name',
    'med_added': 'Medicine added: ',
    'med_deleted': 'Medicine deleted',
    'confirm_delete': 'Delete medicine?',
    'no_data': 'No data',
    'no_medicines': 'No medicines',
    'no_records': 'No records',
    'invalid_qr': '❌ Invalid QR',
    'qr_added': '💊 QR added: ',
    'time_take': '💊 Time: ',
    'dosage': 'Dosage',
    'name': 'Name',
    'time': 'Time',
    'days': 'days',
    'enter_api_key': 'Enter API Key',
    'api_saved': 'API Key saved',
    'camera_error': 'Camera error: ',
    'updated': 'Updated',
    'data_exported': '📁 Data exported',
    'data_imported': '✅ Data imported',
    'invalid_file': '❌ Invalid file format',
    'file_error': '❌ File read error',
    'data_cleared': '🗑️ Data cleared',
    'confirm_clear_all': 'Delete all data? Cannot undo.',
    'reminder': '🔔 Reminder: ',
  },
  ru: {
    'header_title': 'Мой День',
    'card_sleep': 'Сон',
    'card_water': 'Вода',
    'card_steps': 'Шаги',
    'card_medicine': 'Лекарства',
    'card_schedule': 'График',
    'card_ai': 'AI Помощник',
    
    'nav_home': 'Главная',
    'nav_stats': 'Статистика',
    'nav_profile': 'Профиль',
    
    'header_sleep': 'Сон',
    'sleep_add_title': 'Добавить сон',
    'sleep_save_btn': '💾 Сохранить',
    'sleep_history_title': 'История сна',
    'hours': 'часов',
    'sleep_hours_unit': 'часов сегодня',
    
    'header_water': 'Вода',
    'water_quick_title': 'Быстрое добавление',
    'water_add_btn': '💾 Добавить',
    'water_history_title': 'История воды',
    'water_unit': 'мл сегодня (цель: 2000 мл)',
    
    'header_steps': 'Шаги',
    'steps_add_title': 'Добавить шаги',
    'steps_save_btn': '💾 Сохранить',
    'steps_history_title': 'История шагов',
    'steps': 'шагов',
    
    'header_medicine': 'Лекарства + QR',
    'med_add_title': '➕ Добавить лекарство',
    'med_save_btn': '💾 Сохранить вручную',
    'med_list_title': '📋 Мои лекарства',
    'med_intake_history_title': '📜 История приёмов',
    'medicine_intakes_unit': 'приёмов сегодня',
    'medicines': 'препаратов',
    'intakes': 'приёмов',
    'take_now': '💊 Принять сейчас',
    'edit': '✏️ Редактировать',
    'delete': '🗑️ Удалить',
    'taken': '✅ Принято',
    'not_taken': '⚠️ Не принято',
    
    'header_schedule': '📅 График на день',
    'schedule_desc': 'Полный график приёма лекарств на сегодня с рекомендациями',
    'schedule_time': 'Время',
    'schedule_medicine': 'Лекарство',
    'schedule_instruction': 'Инструкция',
    'schedule_status': 'Статус',
    
    'header_ai': '🤖 AI Помощник',
    'ai_title': 'Здоровье Помощник',
    'ai_send_btn': 'Отправить',
    'ai_question_placeholder': 'Задайте вопрос о здоровье...',
    
    'header_stats': '📊 Статистика',
    'stat_sleep_title': '😴 Сон (сегодня)',
    'stat_water_title': '💧 Вода',
    'stat_steps_title': '👟 Шаги',
    'stat_med_title': '💊 Лекарства',
    'stat_intakes_title': '✅ Приёмы сегодня',
    'unit_stat_med': 'активных препаратов',
    'unit_stat_intakes': 'зафиксированных приёмов',
    'charts_btn': '📈 Недельные графики',
    
    'header_charts': '📈 Недельные графики',
    'chart_sleep_title': '😴 Сон за 7 дней',
    'chart_water_title': '💧 Вода за 7 дней',
    'chart_steps_title': '👟 Шаги за 7 дней',
    
    'header_profile': '👤 Профиль',
    'profile_title': 'Мой День — Pro + QR + AI',
    'profile_desc': 'Трекинг здоровья + QR-код + AI помощник',
    'theme_label': 'Тема:',
    'api_key_label': 'DeepSeek API Key (для AI помощника):',
    'save_api_btn': '💾 Сохранить API Key',
    'export_btn': '📁 Экспорт данных (JSON)',
    'import_btn': '📂 Импорт из файла',
    'clear_btn': '🗑️ Удалить все данные',
    
    'enter_name': 'Введите название',
    'med_added': 'Лекарство добавлено: ',
    'med_deleted': 'Лекарство удалено',
    'confirm_delete': 'Удалить лекарство?',
    'no_data': 'Нет данных',
    'no_medicines': 'Нет лекарств',
    'no_records': 'Нет записей',
    'invalid_qr': '❌ Неверный QR',
    'qr_added': '💊 QR добавлен: ',
    'time_take': '💊 Время принять: ',
    'dosage': 'Дозировка',
    'name': 'Название',
    'time': 'Время',
    'days': 'дней',
    'enter_api_key': 'Введите API Key',
    'api_saved': 'API Key сохранён',
    'camera_error': 'Ошибка камеры: ',
    'updated': 'Обновлено',
    'data_exported': '📁 Данные сохранены',
    'data_imported': '✅ Данные загружены',
    'invalid_file': '❌ Неверный формат файла',
    'file_error': '❌ Ошибка чтения файла',
    'data_cleared': '🗑️ Данные сброшены',
    'confirm_clear_all': 'Удалить все данные? Восстановить нельзя.',
    'reminder': '🔔 Напоминание: ',
  }
};

const instructionTranslations = {
  tr: {
    'before-meal': '🍽️ Yemekten önce',
    'with-meal': '🍽️ Yemekle birlikte',
    'after-meal': '🍽️ Yemekten sonra',
    'with-water': '💧 Su ile',
    'with-milk': '🥛 Süt ile',
    'no-chew': '🚫 Çiğnemeden',
    'dissolve': '⚗️ Çözerek',
    'other': '⚙️ Diğer'
  },
  ar: {
    'before-meal': '🍽️ قبل الطعام',
    'with-meal': '🍽️ مع الطعام',
    'after-meal': '🍽️ بعد الطعام',
    'with-water': '💧 مع الماء',
    'with-milk': '🥛 مع الحليب',
    'no-chew': '🚫 بدون مضغ',
    'dissolve': '⚗️ إذابة',
    'other': '⚙️ آخر'
  },
  en: {
    'before-meal': '🍽️ Before meal',
    'with-meal': '🍽️ With meal',
    'after-meal': '🍽️ After meal',
    'with-water': '💧 With water',
    'with-milk': '🥛 With milk',
    'no-chew': '🚫 Do not chew',
    'dissolve': '⚗️ Dissolve',
    'other': '⚙️ Other'
  },
  ru: {
    'before-meal': '🍽️ Перед едой',
    'with-meal': '🍽️ С едой',
    'after-meal': '🍽️ После еды',
    'with-water': '💧 С водой',
    'with-milk': '🥛 С молоком',
    'no-chew': '🚫 Не жевать',
    'dissolve': '⚗️ Растворить',
    'other': '⚙️ Другое'
  }
};

function t(key) {
  // DİL KARIŞMASINI ÖNLEMEK İÇİN:
  // Artık başka dile fallback YOK, sadece key döner.
  return translations[currentLanguage]?.[key] || key;
}

function getInstructionText(instruction) {
  if (!instruction) return '';
  return instructionTranslations[currentLanguage]?.[instruction] || '';
}


function updateUILanguage() {
  document.querySelectorAll("[id]").forEach(el => {
    const id = el.id;
    if (translations[currentLanguage][id]) {
      el.textContent = translations[currentLanguage][id];
    }
  });

  // input placeholder çevirileri (placeholder metni KEY ise çalışır)
  document.querySelectorAll("[placeholder]").forEach(el => {
    const key = el.getAttribute("placeholder");
    if (translations[currentLanguage][key]) {
      el.setAttribute("placeholder", translations[currentLanguage][key]);
    }
  });

  // özel ID → KEY eşleştirmeleri
  const map = {
    "header-title": "header_title",
    "card-sleep": "card_sleep",
    "card-water": "card_water",
    "card-steps": "card_steps",
    "card-medicine": "card_medicine",
    "card-schedule": "card_schedule",
    "card-ai": "card_ai",

    "nav-home": "nav_home",
    "nav-stats": "nav_stats",
    "nav-profile": "nav_profile",

    "header-sleep": "header_sleep",
    "sleep-add-title": "sleep_add_title",
    "sleep-save-btn": "sleep_save_btn",
    "sleep-history-title": "sleep_history_title",
    "unit-sleep-hours": "sleep_hours_unit",

    "header-water": "header_water",
    "water-quick-title": "water_quick_title",
    "water-add-btn": "water_add_btn",
    "water-history-title": "water_history_title",
    "unit-water": "water_unit",

    "header-steps": "header_steps",
    "steps-add-title": "steps_add_title",
    "steps-save-btn": "steps_save_btn",
    "steps-history-title": "steps_history_title",
    "unit-steps": "steps",

    "header-medicine": "header_medicine",
    "med-add-title": "med_add_title",
    "med-save-btn": "med_save_btn",
    "med-list-title": "med_list_title",
    "med-intake-history-title": "med_intake_history_title",
    "unit-med-intakes": "medicine_intakes_unit",

    "header-schedule": "header_schedule",
    "schedule-desc": "schedule_desc",

    "header-ai": "header_ai",
    "ai-title": "ai_title",
    "ai-send-btn": "ai_send_btn",

    "header-stats": "header_stats",
    "stat-sleep-title": "stat_sleep_title",
    "stat-water-title": "stat_water_title",
    "stat-steps-title": "stat_steps_title",
    "stat-med-title": "stat_med_title",
    "stat-intakes-title": "stat_intakes_title",
    "unit-stat-med": "unit_stat_med",
    "unit-stat-intakes": "unit_stat_intakes",
    "charts-btn": "charts_btn",

    "header-charts": "header_charts",
    "chart-sleep-title": "chart_sleep_title",
    "chart-water-title": "chart_water_title",
    "chart-steps-title": "chart_steps_title",

    "header-profile": "header_profile",
    "profile-title": "profile_title",
    "profile-desc": "profile_desc",
    "theme-label": "theme_label",
    "api-key-label": "api_key_label",
    "save-api-btn": "save_api_btn",
    "export-btn": "export_btn",
    "import-btn": "import_btn",
    "clear-btn": "clear_btn"
  };

  for (const id in map) {
    const el = document.getElementById(id);
    if (el) el.textContent = t(map[id]);
  }
}
