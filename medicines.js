// ========== MEDICINES.JS ==========
// İlaç yönetimi ve durum kontrolü

function getMedicineStatus(medicine) {
  if (!medicine.days || medicine.days === 0) {
    return { active: true, daysLeft: '∞', status: 'infinite' };
  }
  
  const createdDate = new Date(medicine.createdAt);
  const today = new Date();
  const daysElapsed = Math.floor((today - createdDate) / (1000 * 60 * 60 * 24));
  const daysLeft = medicine.days - daysElapsed;
  
  return {
    active: daysLeft > 0,
    daysLeft: Math.max(0, daysLeft),
    status: daysLeft > 0 ? 'active' : 'expired'
  };
}

function isMedicineActive(medicine) {
  return getMedicineStatus(medicine).active;
}

function shouldShowMedicine(medicine) {
  return isMedicineActive(medicine);
}

function getMedicineUsageInfo(medicine) {
  const status = getMedicineStatus(medicine);
  const today = getTodayStr();
  const timesToday = appData.medicineIntakes.filter(i => 
    i.medicineId === medicine.id && i.dateStr === today
  ).length;
  
  return {
    ...status,
    timesToday,
    isOverdue: status.status === 'expired'
  };
}
