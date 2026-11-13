export const STORAGE_KEY = 'nurseapp:v1'
export const initialState = { schemaVersion: 1, settings: { currencySymbol: '$', rentAmount: 0, rentFrequency: 'weekly' }, payEntries: [], bills: [], shifts: [] }
export function migrate(data) { return { ...initialState, ...data, schemaVersion: 1, settings: { ...initialState.settings, ...(data?.settings || {}) } } }
export function loadState() { try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? migrate(JSON.parse(raw)) : initialState } catch { return initialState } }
export function saveState(state) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) } catch { /* storage may be unavailable */ } }
export function exportState(state) { return JSON.stringify(state, null, 2) }
export function validateImport(data) { return Boolean(data && data.schemaVersion === 1 && data.settings && Array.isArray(data.payEntries) && Array.isArray(data.bills) && Array.isArray(data.shifts)) }
