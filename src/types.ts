export type MoneyMinorUnits = number & { readonly __brand: 'MoneyMinorUnits' }

export type Frequency = 'weekly' | 'biweekly' | 'monthly' | 'yearly'

export type Theme = 'system' | 'light' | 'dark'

export interface Settings {
  currencySymbol: string
  rentAmount: MoneyMinorUnits
  rentFrequency: Frequency
  theme: Theme
  hasOnboarded: boolean
}

export interface PayEntry {
  id: string
  date: string
  amount: MoneyMinorUnits
  hours?: number
  note?: string
}

export interface Bill {
  id: string
  name: string
  amount: MoneyMinorUnits
  frequency: Frequency
}

export interface Shift {
  id: string
  date: string
  start: string
  end: string
  locationName: string
  address?: string
  notes?: string
}

export interface AppState {
  schemaVersion: 2
  settings: Settings
  payEntries: PayEntry[]
  bills: Bill[]
  shifts: Shift[]
}

export type V1Settings = {
  currencySymbol?: string
  rentAmount?: number
  rentFrequency?: Frequency
}

export type V1State = {
  schemaVersion?: 1
  settings?: V1Settings
  payEntries?: Array<Omit<PayEntry, 'amount'> & { amount: number }>
  bills?: Array<Omit<Bill, 'amount'> & { amount: number }>
  shifts?: Shift[]
}

export function asMoneyMinorUnits(value: number): MoneyMinorUnits {
  return value as MoneyMinorUnits
}
