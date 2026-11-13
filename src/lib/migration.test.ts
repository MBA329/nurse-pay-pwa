import { describe, expect, it } from 'vitest'
import { migrate } from './migration'

describe('schema migration', () => {
  it('migrates a realistic v1 export without losing entries', () => {
    const migrated = migrate({
      schemaVersion: 1,
      settings: { currencySymbol: '€', rentAmount: 95000, rentFrequency: 'monthly' },
      payEntries: [{ id: 'pay-1', date: '2024-07-01', amount: 180000, hours: 12, note: 'Night' }],
      bills: [{ id: 'bill-1', name: 'Phone', amount: 5000, frequency: 'monthly' }],
      shifts: [
        {
          id: 'shift-1',
          date: '2024-07-02',
          start: '19:00',
          end: '07:00',
          locationName: 'Ward A',
          address: '1 Main St',
          notes: 'Handover',
        },
      ],
    })

    expect(migrated.schemaVersion).toBe(2)
    expect(migrated.settings).toMatchObject({
      currencySymbol: '€',
      rentAmount: 95000,
      rentFrequency: 'monthly',
      theme: 'system',
      hasOnboarded: true,
    })
    expect(migrated.payEntries).toHaveLength(1)
    expect(migrated.bills).toHaveLength(1)
    expect(migrated.shifts).toHaveLength(1)
  })

  it('defaults onboarding for fresh installs', () => {
    expect(migrate(null)).toMatchObject({
      schemaVersion: 2,
      settings: { theme: 'system', hasOnboarded: false },
      payEntries: [],
      bills: [],
      shifts: [],
    })
  })
})
