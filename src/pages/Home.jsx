import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { useStore } from '../store/StoreContext'
import { formatDate, formatMoney, formatTime } from '../lib/format'
import { calculateWeek } from '../lib/calc'
import { formatLocalDate, todayString } from '../lib/dates'
export default function Home() { const { state } = useStore(); const next = [...state.shifts].filter((s) => s.date >= todayString()).sort((a, b) => `${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`))[0]; const week = calculateWeek(state.payEntries, state.bills, state.settings, todayString()); return <><h1>Good morning</h1><p className="muted">Your money and shifts at a glance.</p><Card title="Next shift">{next ? <><strong>{formatDate(next.date)}</strong><p>{formatTime(next.start)} - {formatTime(next.end)}{next.end <= next.start ? ' (+1)' : ''}</p><p>{next.locationName}</p>{next.address && <a href={`https://maps.apple.com/?q=${encodeURIComponent(next.address)}`}>Open in Maps</a>}<p>{next.notes}</p></> : <p className="muted">No upcoming shifts. Add one in Schedule.</p>}</Card><Link to="/money" className={`card link-card ${week.leftOver < 0 ? 'negative' : ''}`}><span className="muted">This week left over</span><strong>{formatMoney(week.leftOver, state.settings.currencySymbol)}</strong><span>View breakdown →</span></Link></> }
