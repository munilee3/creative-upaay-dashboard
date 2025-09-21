import React, { useState } from 'react'
import { Droppable } from '@hello-pangea/dnd'
import TaskCard from './TaskCard'

const Column = ({ columnId, title, tasks, setModalOpen }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleToggleMenu = (id) => {
    setOpenMenuId(prev => (prev === id ? null : id));
  };
  const image = () => {
    switch (title) {
      case "To Do":
        return '/images/Ellipse 16.svg';
      case "In Progress":
        return "/images/Ellipse 9.svg";
      case "Done":
        return "/images/Ellipse 11.svg"
      default:
        return "None"
    }
  }
  return (
    <div style={{backgroundColor:"rgba(245, 245, 245, 1)", borderRadius:"16px", padding: "20px", minHeight:"300px", marginTop: "40px"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <div className="d-flex items-center align-center" style={{display:"flex", alignItems:"center", gap:"10px" }}>
          <img src={image()} alt="icon" />
          <h2 style={{fontSize:"16px", marginTop:"0.5rem"}}>{title}</h2>
          <span className="text-sm text-gray-500">{tasks.length}</span>
        </div>
        {title==="To Do" ? <button onClick={() => setModalOpen(true)} type="button" style={{border:"none", backgroundColor:"transparent", cursor:"pointer"}}><img src="/images/add-square-1.svg" alt="add-plus" /></button> : ""}
      </div>
      <hr style={{border:"2px solid  rgba(255, 165, 0, 1)"}}/>

      <Droppable droppableId={columnId}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className={`space-y-3 min-h-[150px] ${snapshot.isDraggingOver ? 'bg-blue-50' : ''} p-2 rounded`}>
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} isMenuOpen={openMenuId === task.id} onToggleMenu={() => handleToggleMenu(task.id)} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column
