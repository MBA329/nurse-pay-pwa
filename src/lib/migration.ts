import {
  AppState,
  asMoneyMinorUnits,
  Frequency,
  Settings,
  Theme,
  V1State,
} from '../types'

export const CURRENT_SCHEMA_VERSION = 2 as const

export const defaultSettings: Settings = {
  currencySymbol: '$',
  rentAmount: asMoneyMinorUnits(0),
  rentFrequency: 'weekly',
  theme: 'system',
  hasOnboarded: false,
}

export const initialState: AppState = {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  settings: defaultSettings,
  payEntries: [],
  bills: [],
  shifts: [],
}

function isFrequency(value: unknown): value is Frequency {
  return value === 'weekly' || value === 'biweekly' || value === 'monthly' || value === 'yearly'
}

function isTheme(value: unknown): value is Theme {
  return value === 'system' || value === 'light' || value === 'dark'
}

function hasEntries(data: V1State): boolean {
  return Boolean(data.payEntries?.length || data.bills?.length || data.shifts?.length)
}

export function migrate(data: unknown): AppState {
  if (!data || typeof data !== 'object') return initialState

  const source = data as Partial<AppState> & V1State
  const sourceSettings = source.settings ?? {}
  const migratedSettings: Settings = {
    ...defaultSettings,
    currencySymbol:
      typeof sourceSettings.currencySymbol === 'string'
        ? sourceSettings.currencySymbol
        : defaultSettings.currencySymbol,
    rentAmount:
      typeof sourceSettings.rentAmount === 'number'
        ? asMoneyMinorUnits(sourceSettings.rentAmount)
        : defaultSettings.rentAmount,
    rentFrequency: isFrequency(sourceSettings.rentFrequency)
      ? sourceSettings.rentFrequency
      : defaultSettings.rentFrequency,
    theme: isTheme((sourceSettings as Settings).theme)
      ? (sourceSettings as Settings).theme
      : defaultSettings.theme,
    hasOnboarded:
      typeof (sourceSettings as Settings).hasOnboarded === 'boolean'
        ? (sourceSettings as Settings).hasOnboarded
        : hasEntries(source),
  }

  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    settings: migratedSettings,
    payEntries: Array.isArray(source.payEntries) ? source.payEntries : [],
    bills: Array.isArray(source.bills) ? source.bills : [],
    shifts: Array.isArray(source.shifts) ? source.shifts : [],
  }
}
