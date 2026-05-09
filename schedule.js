// ========== SCHEDULE.JS ==========
// İlaç takvimi ve günlük düzen

function getTimeColor(time) {
  if (!time || time === '—') return 'schedule-row-afternoon';
  const [hours] = time.split(':').map(Number);
  if (hours >= 22 || hours < 6) return 'schedule-row-night';
  if (hours >= 6 && hours < 9) return 'schedule-row-early';
  if (hours >= 9 && hours < 12) return 'schedule-row-morning';
  if (hours >= 12 && hours < 17) return 'schedule-row-afternoon';
  return 'schedule-row-evening';
}

function getTimePeriod(time) {
  if (!time || time === '—') return '🌙 Gece';
  const [hours] = time.split(':').map(Number);
  if (hours >= 22 || hours < 6) return '🌙 ' + t('night') || 'Night';
  if (hours >= 6 && hours < 9) return '🌅 ' + (t('early_morning') || 'Early');
  if (hours >= 9 && hours < 12) return '☀️ ' + (t('morning') || 'Morning');
  if (hours >= 12 && hours < 17) return '☀️ ' + (t('afternoon') || 'Afternoon');
  return '🌆 ' + (t('evening') || 'Evening');
}

function getStatusEmoji(medId) {
  const taken = appData.medicineIntakes.some(i => i.medicineId === medId && i.dateStr === getTodayStr());
  return taken ? '✅' : '⏳';
}

function renderSchedule() {
  const container = document.getElementById('schedule-table-container');
  if (!container) return;
  
  if (!appData.medicines.length) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-secondary);">${t('no_medicines')}</div>`;
    return;
  }
  
  const sorted = [...appData.medicines].sort((a, b) => {
    const timeA = a.time === '—' ? '23:59' : a.time;
    const timeB = b.time === '—' ? '23:59' : b.time;
    return timeA.localeCompare(timeB);
  });
  
  let html = `<table class="schedule-table">
    <thead>
      <tr>
        <th>${t('schedule_time')}</th>
        <th>${t('schedule_medicine')}</th>
        <th>${t('schedule_instruction')}</th>
        <th>${t('schedule_status')}</th>
      </tr>
    </thead>
    <tbody>`;
  
  sorted.forEach(med => {
    const instr = getInstructionText(med.instruction);
    const status = getStatusEmoji(med.id);
    const rowClass = getTimeColor(med.time);
    
    html += `<tr class="${rowClass}">
      <td><strong>${med.time}</strong></td>
      <td>${escapeHtml(med.name)}<br><small>${escapeHtml(med.dosage)}</small></td>
      <td>${instr || '—'}</td>
      <td>${status}</td>
    </tr>`;
  });
  
  html += `</tbody></table>`;
  container.innerHTML = html;
}
