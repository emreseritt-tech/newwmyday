// ========== MEDICINES.JS (ULTRA PREMIUM EDITION) ==========
// Tıbbi uygulama standardında ilaç yönetimi + ileri seviye durum analizi

// Gün farkını timezone hatası olmadan hesapla
function daysBetween(date1, date2) {
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
}

// İlaç durumunu hesapla (4 seviye)
function getMedicineStatus(medicine) {
  const today = new Date();

  // 1) Sonsuz kullanım (vitamin, magnezyum vb.)
  if (!medicine.days || medicine.days === 0) {
    return {
      active: true,
      daysLeft: "∞",
      status: "infinite",
      expiringSoon: false,
      expired: false
    };
  }

  const createdDate = new Date(medicine.createdAt);
  const daysElapsed = daysBetween(createdDate, today);
  const daysLeft = medicine.days - daysElapsed;

  // 2) Süresi dolmuş
  if (daysLeft <= 0) {
    return {
      active: false,
      daysLeft: 0,
      status: "expired",
      expiringSoon: false,
      expired: true
    };
  }

  // 3) Bitmeye yakın (son 3 gün)
  if (daysLeft <= 3) {
    return {
      active: true,
      daysLeft,
      status: "expiringSoon",
      expiringSoon: true,
      expired: false
    };
  }

  // 4) Normal aktif
  return {
    active: true,
    daysLeft,
    status: "active",
    expiringSoon: false,
    expired: false
  };
}

// İlaç aktif mi?
function isMedicineActive(medicine) {
  return getMedicineStatus(medicine).active;
}

// Takvimde gösterilmeli mi?
function shouldShowMedicine(medicine) {
  const status = getMedicineStatus(medicine);
  return status.active || status.status === "infinite";
}

// Günlük kullanım bilgisi
function getMedicineUsageInfo(medicine) {
  const status = getMedicineStatus(medicine);
  const today = getTodayStr();

  const timesToday = appData.medicineIntakes.filter(
    i => i.medicineId === medicine.id && i.dateStr === today
  ).length;

  return {
    ...status,
    timesToday,
    isOverdue: status.expired,
    isInfinite: status.status === "infinite",
    isActive: status.status === "active",
    isExpiringSoon: status.expiringSoon
  };
}
