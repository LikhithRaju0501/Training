import React from 'react'
import './ContactComp.css'

const ContactComp = (props) => {
  return (
    <div style={{width:'80vw'}}>
      {props.contact.map((item,index)=>{
        return(
    <ol className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
      <div>{index+1}.</div>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.name}</div>
            {item.email}
          </div>
<button className='btn btn-danger me-3' onClick={()=>props.handleDelete(item.email)}>Delete</button>
<button className='btn btn-primary' onClick={()=>props.handleEdit(item.email)}>Edit</button>
        </li> 
    </ol>
        )
      })}
    
      </div>
  )
}

export default ContactComp