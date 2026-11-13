import { describe, expect, it } from 'vitest'
import { calculateMonth, calculateWeek, shiftDurationHours, toMonthly, toWeekly } from './calc'
const settings = { rentAmount: 180000, rentFrequency: 'monthly' }
describe('calculations', () => {
  it('converts recurring amounts', () => { expect(Math.round(toWeekly(180000, 'monthly'))).toBe(41538); expect(toWeekly(100, 'biweekly')).toBe(50); expect(toMonthly(5200, 'yearly')).toBeCloseTo(433.33, 1) })
  it('handles overnight shifts', () => expect(shiftDurationHours('19:00', '07:00')).toBe(12))
  it('uses Monday week boundaries across months', () => { const result = calculateWeek([{ id: '1', date: '2024-07-01', amount: 10000 }], [], { rentAmount: 0, rentFrequency: 'weekly' }, '2024-07-03'); expect(result.payIn).toBe(10000) })
  it('calculates negative leftovers', () => { const result = calculateWeek([], [], { rentAmount: 20000, rentFrequency: 'weekly' }, '2024-07-03'); expect(result.leftOver).toBe(-20000) })
  it('counts all five monthly pay entries', () => { const entries = Array.from({ length: 5 }, (_, i) => ({ id: String(i), date: `2024-05-${String(i + 1).padStart(2, '0')}`, amount: 100 })); expect(calculateMonth(entries, [], { rentAmount: 0, rentFrequency: 'monthly' }, '2024-05-10').payIn).toBe(500) })
  it('handles empty data', () => expect(calculateMonth([], [], settings, '2024-05-10').payIn).toBe(0))
})
