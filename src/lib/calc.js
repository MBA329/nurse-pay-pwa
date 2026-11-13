import { endOfWeek, formatLocalDate, parseLocalDate, startOfWeek } from './dates'
export function toWeekly(amount, frequency) { return amount * ({ weekly: 1, biweekly: 0.5, monthly: 12 / 52, yearly: 1 / 52 }[frequency] || 0) }
export function toMonthly(amount, frequency) { return amount * ({ weekly: 52 / 12, biweekly: 26 / 12, monthly: 1, yearly: 1 / 12 }[frequency] || 0) }
export function shiftDurationHours(start, end) { const [sh, sm] = start.split(':').map(Number); const [eh, em] = end.split(':').map(Number); let mins = eh * 60 + em - sh * 60 - sm; if (mins <= 0) mins += 1440; return mins / 60 }
function breakdown(payEntries, bills, rentAmount, frequency, mode, periodDate) {
  const date = parseLocalDate(periodDate); const from = mode === 'week' ? startOfWeek(date) : new Date(date.getFullYear(), date.getMonth(), 1); const to = mode === 'week' ? endOfWeek(date) : new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const fromKey = formatLocalDate(from); const toKey = formatLocalDate(to)
  const payIn = payEntries.filter((entry) => entry.date >= fromKey && entry.date <= toKey).reduce((sum, entry) => sum + entry.amount, 0)
  const convert = mode === 'week' ? toWeekly : toMonthly; const rent = convert(rentAmount, frequency)
  const billRows = bills.map((bill) => ({ ...bill, amountConverted: convert(bill.amount, bill.frequency) })); const billsTotal = billRows.reduce((sum, bill) => sum + bill.amountConverted, 0)
  return { payIn, rent, billsTotal, bills: billRows, leftOver: Math.round(payIn - rent - billsTotal) }
}
export function calculateWeek(payEntries, bills, settings, date) { return breakdown(payEntries, bills, settings.rentAmount, settings.rentFrequency, 'week', date) }
export function calculateMonth(payEntries, bills, settings, date) { return breakdown(payEntries, bills, settings.rentAmount, settings.rentFrequency, 'month', date) }
