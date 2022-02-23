import React from 'react'

const Entry = () => {
  return (
<div>
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          Samosa
        </div>
        <div className="ms-2 me-auto">
          5C
        </div>
    <span ><button className='btn btn-danger' >Delete</button></span>
    </li>
 </div>
  )
}

export default Entry