export function formatMoney(minor, symbol = '$') { return `${minor < 0 ? '-' : ''}${symbol}${Math.abs(minor / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` }
export function formatTime(value) { const [h, m] = value.split(':').map(Number); const suffix = h >= 12 ? 'PM' : 'AM'; const hour = h % 12 || 12; return `${hour}:${String(m).padStart(2, '0')} ${suffix}` }
export function formatDate(value, options = { month: 'short', day: 'numeric', year: 'numeric' }) { return new Date(`${value}T12:00:00`).toLocaleDateString(undefined, options) }
