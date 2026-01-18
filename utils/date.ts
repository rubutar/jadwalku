export function getTodayKey(date = new Date()) {
  return date.toISOString().slice(0, 10) // YYYY-MM-DD
}
