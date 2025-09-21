import { createStore } from 'redux'
import tasksReducer from './tasksReducer'
import { loadState, saveState } from '../utils/localStorage'

const persisted = loadState()

const store = createStore(
  tasksReducer,
  persisted ? persisted : undefined,
)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
