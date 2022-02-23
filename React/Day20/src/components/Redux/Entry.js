import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEntry } from './actions/Actions'

const Entry = (props) => {
  const dispatch = useDispatch()
  const handleDelete=(e)=>{
    dispatch(deleteEntry(e))
    console.log(e);
  }
  return (
<div>
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          {props.entry.item}
        </div>
        <div className="ms-2 me-auto">
        {props.entry.calorie}KC
        </div>
    <span ><button className='btn btn-danger' onClick={()=>handleDelete(props.entry.id)}>Delete</button></span>
    </li>
 </div>
  )
}

export default Entry