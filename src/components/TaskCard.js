import { Draggable } from '@hello-pangea/dnd'
import { useDispatch } from 'react-redux'
import { deleteTask, moveTask } from '../redux/actions'

const TaskCard = ({ task, index, isMenuOpen, onToggleMenu }) => {
  const dispatch = useDispatch();
  const priorityBgClassName = () => {
    switch (task.priority) {
      case ("Low"):
        return "rgba(223, 168, 116, 0.2)"
      case ("Medium"):
        return "rgba(118, 165, 234, 0.2)"
      case ("High") :
        return "rgba(216, 114, 125, 0.2)"
      default:
        return "None"
    }
  }
  const priorityColorClassName = () => {
    switch (task.priority) {
      case ("Low"):
        return "rgba(213, 141, 73, 1)"
      case ("Medium"):
        return "rgba(118, 165, 234, 1)"
      case ("High") :
        return "rgba(216, 114, 125, 1)"
      default:
        return "None"
    }
  }

  const handleMove = (status) => {
    dispatch(moveTask(task.id, status))
    onToggleMenu()
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
    onToggleMenu()
  }
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`px-3 py-4 bg-white border rounded mb-2 ${snapshot.isDragging ? 'opacity-90' : ''}`}
        >
          <div className='d-flex justify-content-between'>
            <p style={{backgroundColor:`${priorityBgClassName()}`, borderRadius:"4px", padding:"4px", fontSize:"12px", color:`${priorityColorClassName()}`}}>{task.priority || 'Medium'}</p>
            <div style={{ position: "relative" }}>
              <p onClick={onToggleMenu}>...</p>
              {isMenuOpen && (
                  <div
                    className="menu-dropdown"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0px",
                      background: "#fff",
                      borderRadius: "8px",
                      padding: "8px 0px",
                      zIndex: 9999,
                      minWidth: "180px"
                    }}
                  >
                    <button
                      onClick={handleDelete}
                      style={{
                        padding: '8px 12px',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      Delete
                    </button>
                    {task.status !== 'todo' && (
                      <button
                        onClick={() => handleMove('todo')}
                        style={{
                          padding: '8px 12px',
                          border: 'none',
                          background: 'none',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        Move to To Do
                      </button>
                    )}
                    {task.status !== 'inprogress' && (
                      <button
                        onClick={() => handleMove('inprogress')}
                        style={{
                          padding: '8px 12px',
                          border: 'none',
                          background: 'none',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        Move to In Progress
                      </button>
                    )}
                    {task.status !== 'done' && (
                      <button
                        onClick={() => handleMove('done')}
                        style={{
                          padding: '8px 12px',
                          border: 'none',
                          background: 'none',
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        Move to Done
                      </button>
                    )}
                  </div>
                )}
            </div>
          </div>
          <h1 style={{fontSize:"18px", fontWeight:"600", marginBottom:"4px"}}>{task.title}</h1>
          <p style={{fontSize:"12px", fontWeight:"400", color:"rgba(120, 116, 134, 1)", marginBottom:"28px"}}>{task.description}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <div style={{position:"relative", width:"63px"}}>
              <img src="/images/Ellipse 12.svg" alt="icon" style={{width:"24px", height:"24px", position:"absolute", bottom:"-15px", right:"40px"}}/>
              <img src="/images/Ellipse 14.svg" alt="icon" style={{width:"24px", height:"24px", position:"absolute", bottom:"-15px", right:"20px"}} />
              <img src="/images/Ellipse 15.svg" alt="icon" style={{width:"24px", height:"24px", position:"absolute", bottom:"-15px", right:"0px"}} />
            </div>
            <div className='d-flex align-items-center gap-2'>
              <div className='d-flex align-items-center gap-1'>
                <img src="/images/Group 627.svg" alt="icon" />
                <span>12 comments</span>
              </div>
              <div className='d-flex align-items-center gap-1'>
                <img src="/images/Group 628.svg" alt="icon" />
                <span>0 files</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
