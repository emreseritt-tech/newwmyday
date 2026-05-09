// ========== SCHEDULE.JS (PREMIUM EDITION) ==========
// Profesyonel ilaç takvimi + renk kodları + çoklu dil + güvenli HTML

function getTimeColor(time) {
  if (!time || time === "—") return "schedule-row-none";

  const [h] = time.split(":").map(Number);

  if (h >= 22 || h < 6) return "schedule-row-night";       // 🌙 Gece
  if (h >= 6 && h < 9) return "schedule-row-early";        // 🌅 Erken sabah
  if (h >= 9 && h < 12) return "schedule-row-morning";     // ☀️ Sabah
  if (h >= 12 && h < 17) return "schedule-row-afternoon";  // ☀️ Öğlen
  return "schedule-row-evening";                           // 🌆 Akşam
}

function getTimePeriod(time) {
  if (!time || time === "—") return "🌙 " + (t("night") || "Night");

  const [h] = time.split(":").map(Number);

  if (h >= 22 || h < 6) return "🌙 " + (t("night") || "Night");
  if (h >= 6 && h < 9) return "🌅 " + (t("early_morning") || "Early");
  if (h >= 9 && h < 12) return "☀️ " + (t("morning") || "Morning");
  if (h >= 12 && h < 17) return "☀️ " + (t("afternoon") || "Afternoon");
  return "🌆 " + (t("evening") || "Evening");
}

function getStatusEmoji(medId) {
  const today = getTodayStr();
  const taken = appData.medicineIntakes.some(
    i => i.medicineId === medId && i.dateStr === today
  );
  return taken ? "✅" : "⏳";
}

function renderSchedule() {
  const container = document.getElementById("schedule-table-container");
  if (!container) return;

  if (!appData.medicines.length) {
    container.innerHTML = `
      <div class="schedule-empty">
        ${t("no_medicines")}
      </div>`;
    return;
  }

  // Saat sıralaması
  const sorted = [...appData.medicines].sort((a, b) => {
    const tA = a.time === "—" ? "23:59" : a.time;
    const tB = b.time === "—" ? "23:59" : b.time;
    return tA.localeCompare(tB);
  });

  let html = `
    <table class="schedule-table">
      <thead>
        <tr>
          <th>${t("schedule_time")}</th>
          <th>${t("schedule_medicine")}</th>
          <th>${t("schedule_instruction")}</th>
          <th>${t("schedule_status")}</th>
        </tr>
      </thead>
      <tbody>
  `;

  sorted.forEach(med => {
    const rowClass = getTimeColor(med.time);
    const status = getStatusEmoji(med.id);
    const instr = getInstructionText(med.instruction) || "—";

    html += `
      <tr class="${rowClass}">
        <td>
          <strong>${med.time}</strong><br>
          <small>${getTimePeriod(med.time)}</small>
        </td>

        <td>
          ${escapeHtml(med.name)}<br>
          <small>${escapeHtml(med.dosage)}</small>
        </td>

        <td>${instr}</td>

        <td class="schedule-status">${status}</td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}
