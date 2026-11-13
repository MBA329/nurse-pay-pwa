import { AppState } from '../types'
import { initialState, migrate } from '../lib/migration'

export const STORAGE_KEY = 'nurseapp:v2'

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem('nurseapp:v1')
    return raw ? migrate(JSON.parse(raw) as unknown) : initialState
  } catch {
    return initialState
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage can be unavailable in private browsing or restricted webviews.
  }
}

export function exportState(state: AppState): string {
  return JSON.stringify(
    {
      ...state,
      schemaVersion: 2,
      exportedAt: new Date().toISOString(),
    },
    null,
    2,
  )
}

export function validateImport(data: unknown): data is AppState {
  if (!data || typeof data !== 'object') return false
  const value = data as Partial<AppState> & { schemaVersion?: unknown }
  return (
    (value.schemaVersion === 1 || value.schemaVersion === 2) &&
    Boolean(value.settings) &&
    Array.isArray(value.payEntries) &&
    Array.isArray(value.bills) &&
    Array.isArray(value.shifts)
  )
}
