export function parseLocalDate(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}
export function formatLocalDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
export function startOfWeek(date) {
  const result = new Date(date)
  const day = result.getDay()
  result.setDate(result.getDate() - (day === 0 ? 6 : day - 1))
  result.setHours(0, 0, 0, 0)
  return result
}
export function endOfWeek(date) { const result = startOfWeek(date); result.setDate(result.getDate() + 6); return result }
export function todayString() { return formatLocalDate(new Date()) }
export function shiftDurationHours(start, end) {
  const [sh, sm] = start.split(':').map(Number); const [eh, em] = end.split(':').map(Number)
  let minutes = eh * 60 + em - (sh * 60 + sm)
  if (minutes <= 0) minutes += 24 * 60
  return minutes / 60
}
