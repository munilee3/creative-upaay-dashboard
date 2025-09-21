import { ADD_TASK, UPDATE_TASK, DELETE_TASK, MOVE_TASK, SET_FILTER } from './actions'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  tasks: [
    { id: 't1', title: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play.', status: 'todo', priority: 'High', category: 'Work', dueDate: null },
    { id: 't2', title: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play.', status: 'inprogress', priority: 'Low', category: 'Work', dueDate: null },
    { id: 't3', title: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play.', status: 'done', priority: 'Low', category: 'Personal', dueDate: null },
    { id: 't4', title: 'Brainstorming ', description: 'Brainstorming brings team members diverse experience into play.', status: 'todo', priority: 'High', category: 'Personal', dueDate: null },
    { id: 't5', title: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play.', status: 'todo', priority: 'Medium', category: 'Personal', dueDate: null },
    { id: 't6', title: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play.', status: 'inprogress', priority: 'Low', category: 'Personal', dueDate: null }
  ],
  filter: {
    category: 'All',
    priority: 'All',
    query: ''
  }
}

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = { ...action.payload, id: uuidv4() }
      return { ...state, tasks: [newTask, ...state.tasks] }
    }
    case UPDATE_TASK: {
      const tasks = state.tasks.map(t => t.id === action.payload.id ? { ...t, ...action.payload } : t)
      return { ...state, tasks }
    }
    case DELETE_TASK: {
      const tasks = state.tasks.filter(t => t.id !== action.payload)
      return { ...state, tasks }
    }
    case MOVE_TASK: {
      const { taskId, newStatus, newIndex } = action.payload
      let tasks = state.tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t)

      if (newIndex !== null) {
        const byStatus = { todo: [], inprogress: [], done: [] }
        for (const t of tasks) byStatus[t.status].push(t)
        const moved = byStatus[newStatus].find(t => t.id === taskId)
        byStatus[newStatus] = byStatus[newStatus].filter(t => t.id !== taskId)
        byStatus[newStatus].splice(newIndex, 0, moved)
        tasks = [...byStatus.todo, ...byStatus.inprogress, ...byStatus.done]
      }

      return { ...state, tasks }
    }
    case SET_FILTER: {
      return { ...state, filter: { ...state.filter, ...action.payload } }
    }
    default:
      return state
  }
}

export default tasksReducer
