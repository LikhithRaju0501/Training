import React,{useContext} from 'react'
import { ExpenseContext } from '../expense-context'


const Entry = (props) => {
  const {handleDelete} = useContext(ExpenseContext)
  return (
    <div>
       <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      {props.entry.description}
    </div>
    <span ><button className='btn btn-danger' onClick={()=>handleDelete(props.entry.id)}>${props.entry.amount}</button></span>
  </li>
    </div>
  )
}

export default Entry