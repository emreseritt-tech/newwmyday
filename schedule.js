// ========== SCHEDULE.JS (DÜZELTİLMİŞ) ==========
// Düzeltmeler:
//  - t(), getInstructionText(), escapeHtml() bağımlılıkları guard ile korunuyor
//  - Saat sıralaması kararlı
//  - Boş ilaç listesi için temiz mesaj
 
// ── Satır renk sınıfı ────────────────────────────────────────────────────
function getTimeColor(time) {
  if (!time || time === '—') return 'schedule-row-night';
  const h = parseInt(time.split(':')[0], 10);
  if (isNaN(h))               return 'schedule-row-morning';
  if (h >= 22 || h < 6)       return 'schedule-row-night';
  if (h >= 6  && h < 9)       return 'schedule-row-early';
  if (h >= 9  && h < 12)      return 'schedule-row-morning';
  if (h >= 12 && h < 17)      return 'schedule-row-afternoon';
  return 'schedule-row-evening';
}
 
// ── Zaman dilimi etiketi ─────────────────────────────────────────────────
function getTimePeriod(time) {
  // t() bağımlılığı — tanımlı değilse İngilizce fallback
  const tr = (typeof t === 'function') ? t : (k => k);
 
  if (!time || time === '—') return '🌙 ' + tr('night');
  const h = parseInt(time.split(':')[0], 10);
  if (isNaN(h))               return '🌙 ' + tr('night');
  if (h >= 22 || h < 6)       return '🌙 ' + tr('night');
  if (h >= 6  && h < 9)       return '🌅 ' + tr('early_morning');
  if (h >= 9  && h < 12)      return '☀️ ' + tr('morning');
  if (h >= 12 && h < 17)      return '☀️ ' + tr('afternoon');
  return '🌆 ' + tr('evening');
}
 
// ── Bugün alındı mı? ─────────────────────────────────────────────────────
function getStatusEmoji(medId) {
  if (typeof appData === 'undefined' || !Array.isArray(appData.medicineIntakes)) return '⏳';
  const today = (typeof getTodayStr === 'function') ? getTodayStr() : new Date().toLocaleDateString('en-CA');
  const taken = appData.medicineIntakes.some(i => i.medicineId === medId && i.dateStr === today);
  return taken ? '✅' : '⏳';
}
 
// ── Takvim tablosunu çiz ─────────────────────────────────────────────────
function renderSchedule() {
  const container = document.getElementById('schedule-table-container');
  if (!container) return;
 
  // Bağımlılık guard
  const tr_fn    = (typeof t === 'function')                  ? t                  : (k => k);
  const instr_fn = (typeof getInstructionText === 'function') ? getInstructionText : (() => '—');
  const esc_fn   = (typeof escapeHtml === 'function')         ? escapeHtml         : (s => s);
 
  if (typeof appData === 'undefined' || !appData.medicines || !appData.medicines.length) {
    container.innerHTML = `<div class="history-item" style="text-align:center; padding:20px;">
      ${tr_fn('no_medicines')}
    </div>`;
    return;
  }
 
  // Süresi dolmamış ilaçları filtrele + saate göre sırala
  const active = appData.medicines.filter(m => {
    if (typeof shouldShowMedicine === 'function') return shouldShowMedicine(m);
    return true; // medicines.js yüklü değilse hepsini göster
  });
 
  const sorted = [...active].sort((a, b) => {
    const tA = (!a.time || a.time === '—') ? '23:59' : a.time;
    const tB = (!b.time || b.time === '—') ? '23:59' : b.time;
    return tA.localeCompare(tB);
  });
 
  if (!sorted.length) {
    container.innerHTML = `<div class="history-item" style="text-align:center; padding:20px;">
      ${tr_fn('no_medicines')}
    </div>`;
    return;
  }
 
  let html = `
    <table class="schedule-table">
      <thead>
        <tr>
          <th>${tr_fn('schedule_time')}</th>
          <th>${tr_fn('schedule_medicine')}</th>
          <th>${tr_fn('schedule_instruction')}</th>
          <th>${tr_fn('schedule_status')}</th>
        </tr>
      </thead>
      <tbody>
  `;
 
  sorted.forEach(med => {
    const rowClass  = getTimeColor(med.time);
    const status    = getStatusEmoji(med.id);
    const instr     = instr_fn(med.instruction) || '—';
    const daysInfo  = (typeof getMedicineStatus === 'function')
      ? getMedicineStatus(med)
      : null;
    const daysLabel = daysInfo && daysInfo.daysLeft !== '∞' && daysInfo.daysLeft > 0
      ? `<br><small style="color:#f59e0b">⏳ ${daysInfo.daysLeft}d</small>`
      : '';
 
    html += `
      <tr class="${rowClass}">
        <td>
          <strong>${esc_fn(med.time || '—')}</strong><br>
          <small>${getTimePeriod(med.time)}</small>
        </td>
        <td>
          <strong>${esc_fn(med.name)}</strong><br>
          <small>${esc_fn(med.dosage)}</small>
          ${daysLabel}
        </td>
        <td style="font-size:13px;">${instr}</td>
        <td style="text-align:center; font-size:20px;">${status}</td>
      </tr>
    `;
  });
 
  html += `</tbody></table>`;
  container.innerHTML = html;
}
 
