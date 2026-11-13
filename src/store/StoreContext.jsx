import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, loadState, saveState } from './storage'
const StoreContext = createContext(null)
function reducer(state, action) {
  if (action.type === 'replace') return action.state
  if (action.type === 'clear') return initialState
  const list = action.collection ? state[action.collection] : null
  if (action.type === 'upsert') return { ...state, [action.collection]: [...list.filter((item) => item.id !== action.item.id), action.item] }
  if (action.type === 'remove') return { ...state, [action.collection]: list.filter((item) => item.id !== action.id) }
  if (action.type === 'settings') return { ...state, settings: { ...state.settings, ...action.values } }
  return state
}
export function StoreProvider({ children }) { const [state, dispatch] = useReducer(reducer, undefined, loadState); useEffect(() => saveState(state), [state]); return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider> }
export function useStore() { return useContext(StoreContext) }
