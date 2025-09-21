import React, { useState } from 'react'
import Column from '../components/Column'
import AddTaskModal from '../components/AddTaskModal'
import FilterBar from '../components/FilterBar'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { moveTask } from '../redux/actions'
import { DragDropContext } from '@hello-pangea/dnd'
import './index.css'

const Dashboard = () => {
      const { tasks, filter } = useSelector(state => state)
      const dispatch = useDispatch()
      const [modalOpen, setModalOpen] = useState(false)

      const applyFilter = (list) => {
        let out = list
        if (filter.category && filter.category !== 'All') out = out.filter(t => t.category === filter.category)
        if (filter.priority && filter.priority !== 'All') out = out.filter(t => t.priority === filter.priority)
        if (filter.query && filter.query.trim()) {
          const q = filter.query.trim().toLowerCase()
          out = out.filter(t => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
        }
        return out
      }

      const columns = {
        todo: { id: 'todo', title: 'To Do', tasks: applyFilter(tasks.filter(t => t.status === 'todo')) },
        inprogress: { id: 'inprogress', title: 'In Progress', tasks: applyFilter(tasks.filter(t => t.status === 'inprogress')) },
        done: { id: 'done', title: 'Done', tasks: applyFilter(tasks.filter(t => t.status === 'done')) },
      }

      const onDragEnd = (result) => {
        const { source, destination, draggableId } = result
        if (!destination) return
        if (source.droppableId === destination.droppableId && source.index === destination.index) return

        dispatch(moveTask(draggableId, destination.droppableId, destination.index))
      }



    return (
      <div className="layout">
      <div className="sidebar">
          <div>
            <div style={{display: 'flex', alignItems:"center", paddingBottom: "30px", borderBottom: "1px solid rgba(219, 219, 219, 1)"}}>
                <div style={{display: 'flex', alignItems: "center"}}>
                    <img src="/images/Group 7.svg" alt="logo" style={{height:'24px', width: "24px"}} />
                    <h1 style={{fontSize: '20px', fontWeight:"600", fontFamily:"inter", fontStyle: "Semi Bold", margin:"0px", marginLeft: "9px"}}>Project M.</h1>
                </div>
                <img src="/images/Group 639.svg" alt="arrow" style={{marginLeft: '46px'}} />
            </div>
            <ul className="Tabs-list">
              <li className="tab-item">
                <img src="/images/category.svg" alt="Home" />
                <p className="tab-name">Home</p>
              </li>
              <li className="tab-item">
                <img src="/images/message.svg" alt="Messages" />
                <p className="tab-name">Messages</p>
              </li>
              <li className="tab-item">
                <img src="/images/task-square.svg" alt="Tasks" />
                <p className="tab-name">Tasks</p>
              </li>
              <li className="tab-item">
                <img src="/images/profile-2user.svg" alt="Members" />
                <p className="tab-name">Members</p>
              </li>
              <li className="tab-item">
                <img src="/images/setting-2.svg" alt="Settings" />
                <p className="tab-name">Settings</p>
              </li>
            </ul>
            <div className="project-heading-container">
              <h1 className="projects-heading">MY PROJECTS</h1>
              <img src="/images/add-square.svg" alt="plus" />
            </div>
            <ul className="projects-list">
              <li className="selected-project-item">
                <div className="project-item-name-container">
                  <img src="/images/Ellipse 8.svg" alt="Home" />
                  <p className="project-name-bold">Mobile App</p>
                </div>
                <p className="active-tab-options">...</p>
              </li>
              <li className="project-item">
                  <img src="/images/Ellipse 9.svg" alt="Home" />
                  <p className="tab-name">Website Redesign</p>
              </li>
              <li className="project-item">
                  <img src="/images/Ellipse 10.svg" alt="Home" />
                  <p className="tab-name">Design System</p>
              </li>
              <li className="project-item">
                  <img src="/images/Ellipse 11.svg" alt="Home" />
                  <p className="tab-name">Wireframes</p>
              </li>
            </ul>
          </div>
          <div>
            <div className="thoughts-time-container">
              <div className="lamp-icon-container">
                <img src="/images/lamp-on.svg" alt="lamp" className="lamp-icon"/>
              </div>
              <h1 className="thoughts-time-heading">Thoughts Time</h1>
              <p className="thoughts-para">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
              <button type="button" className="message-button">Write a message</button>
            </div>
          </div>
      </div>
      <div className="main-section">
        <header className="top-bar">
          <Navbar />
        </header>
        <div className="main-content">
          <div className='mobile-app-invite-container'>
            <div className='mobile-app-container'>
              <h1 className='mobile-app-heading'>Mobile App</h1>
              <img src="/images/arrow-square-up.svg" alt="pen" style={{marginRight:"12px"}} />
              <img src="/images/Group 626.svg" alt="link" />
            </div>
            <div className='invite-profiles-container'>
              <div className='invite-container'>
                <img src="/images/add-square-1.svg" alt="plus-icon" />
                <p className='invite'>Invite</p>
              </div>
              <div className='profiles-container'>
                <img src="/images/Ellipse 12.svg" alt="profiles" className='profile-1' />
                <img src="/images/Ellipse 13.svg" alt="profiles" className='profile-2'/>
                <img src="/images/Ellipse 15.svg" alt="profiles" className='profile-3'/>
                <img src="/images/Ellipse 14.svg" alt="profiles" className='profile-4'/>
                <p className='profile-count'>+2</p>
              </div>
            </div>
          </div>
          <FilterBar />
          <DragDropContext onDragEnd={onDragEnd}>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px" }}>
              {Object.values(columns).map(col => (
                <Column key={col.id} columnId={col.id} title={col.title} tasks={col.tasks} setModalOpen={setModalOpen} />
              ))}
            </div>
          </DragDropContext>
          {modalOpen && <div className="model"><AddTaskModal onClose={() => setModalOpen(false)} /></div>}
        </div>
      </div>
    </div>
    )
}
    


export default Dashboard;
