import { createContext, type Dispatch, type ReactNode, useContext, useEffect, useReducer } from 'react'
import { initialState, migrate } from '../lib/migration'
import type { AppState, Bill, PayEntry, Settings, Shift } from '../types'
import { saveState, loadState } from './storage'

type Collection = 'payEntries' | 'bills' | 'shifts'
type CollectionItem = PayEntry | Bill | Shift

type Action =
  | { type: 'replace'; state: AppState }
  | { type: 'clear' }
  | { type: 'upsert'; collection: Collection; item: CollectionItem }
  | { type: 'remove'; collection: Collection; id: string }
  | { type: 'settings'; values: Partial<Settings> }

interface StoreValue {
  state: AppState
  dispatch: Dispatch<Action>
}

const StoreContext = createContext<StoreValue | null>(null)

function reducer(state: AppState, action: Action): AppState {
  if (action.type === 'replace') return migrate(action.state)
  if (action.type === 'clear') return initialState
  if (action.type === 'settings') {
    return { ...state, settings: { ...state.settings, ...action.values } }
  }

  const list = state[action.collection] as CollectionItem[]
  if (action.type === 'upsert') {
    return {
      ...state,
      [action.collection]: [...list.filter((item) => item.id !== action.item.id), action.item],
    }
  }
  return {
    ...state,
    [action.collection]: list.filter((item) => item.id !== action.id),
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)
  useEffect(() => saveState(state), [state])
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
}

export function useStore(): StoreValue {
  const value = useContext(StoreContext)
  if (!value) throw new Error('useStore must be used within StoreProvider')
  return value
}
