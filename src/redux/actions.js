export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const MOVE_TASK = 'MOVE_TASK'
export const SET_FILTER = 'SET_FILTER'

export const addTask = (task) => ({ type: ADD_TASK, payload: task })
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task })
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId })
export const moveTask = (taskId, newStatus, newIndex = null) => ({
  type: MOVE_TASK,
  payload: { taskId, newStatus, newIndex }
})
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter })
