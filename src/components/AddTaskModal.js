import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions'

const AddTaskModal = ({ onClose }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('todo')
  const [priority, setPriority] = useState('Medium')

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    dispatch(addTask({ title, description, status, priority }))
    onClose()
  }

  return (
    <div style={{background: "white", padding: "20px", borderRadius: "12px", maxWidth: "500px", width: "90%", zIndex: "1001"}}>
      <form onSubmit={submit} className="p-2 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Add Task</h2>

        <div className='d-flex flex-column'>
          <label className="block mb-2">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="p-2 border-2 rounded mb-3" />
        </div>

        <div className='d-flex flex-column'>
          <label className="block mb-2">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="p-2 border-2 rounded mb-3" />
        </div>

        <div className="d-flex gap-2 mb-3">
          <select value={status} onChange={e => setStatus(e.target.value)} className="flex-1 p-2 border rounded">
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <select value={priority} onChange={e => setPriority(e.target.value)} className="p-2 border rounded">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="d-flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-2 border rounded bg-info">Cancel</button>
          <button type="submit" className="px-3 py-2 text-black rounded border bg-primary">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskModal
