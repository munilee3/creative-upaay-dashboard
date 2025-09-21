import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../redux/actions'

const FilterBar = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  const update = (delta) => dispatch(setFilter(delta))

  return (
    <div style={{ display: "flex", alignItems:"center", justifyContent:"space-between", marginTop:"40px"}}>
      <div style={{ display: "flex", gap:"12px"}}>
        <select value={filter.category} onChange={e => update({ category: e.target.value })} className="p-2 border rounded">
          <option>All</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Urgent</option>
        </select>
        <select value={filter.priority} onChange={e => update({ priority: e.target.value })} className="p-2 border rounded">
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div style={{display:"flex", alignItems:"center", width:"220px", justifyContent:"space-around"}}>
        <div style={{display:"flex", alignItems:"center", padding:"0px 10px", border:"1px solid rgba(120, 116, 134, 1)", borderRadius:"5px", width:"97px", height:"40px", justifyContent:"center", gap:"6px"}}>
          <img src="/images/Group 615.svg" alt="share-icon" />
          <p style={{marginTop:"1rem", padding:'0px'}}>Share</p>
        </div>
        <div style={{borderLeft: "1px solid rgba(120, 116, 134, 1)", height:"28px"}}></div>
        <img src='/images/Group 612.svg' alt="equal-icon" />
        <img src="/images/Group 611.svg" alt="icon"/>
      </div>
    </div>
  )
}

export default FilterBar
