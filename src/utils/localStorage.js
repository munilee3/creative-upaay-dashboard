export const loadState = (key = 'appState') => {
  try {
    const serialized = localStorage.getItem(key)
    if (!serialized) return undefined
    return JSON.parse(serialized)
  } catch (e) {
    console.error('Failed to load state', e)
    return undefined
  }
}

export const saveState = (state, key = 'appState') => {
  try {
    const serialized = JSON.stringify(state)
    localStorage.setItem(key, serialized)
  } catch (e) {
    console.error('Failed to save state', e)
  }
}
