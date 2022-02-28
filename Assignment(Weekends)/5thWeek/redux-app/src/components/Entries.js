import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table,Button } from 'react-bootstrap'
import { deleteEntry } from './Actions'

const Entries = () => {
    const calState = useSelector((state)=>state.calorie)
    const dispatch = useDispatch()
    console.log(calState);
  return (
    <div>
         <Table responsive striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Item</th>
      <th>Calories</th>
      <th>Delete</th>
    </tr>
  </thead>
        {calState.map((item)=>{
            return (
               
  <tbody>
      
        <tr>
      <td>{item.item}</td>
      <td>{item.cal}</td>
      <td>
  <Button variant="danger" onClick={()=>dispatch(deleteEntry(item.id))}>Delete</Button>{' '}</td>
    </tr>
  </tbody>

   
            )
        })}
    
</Table>
    </div>
  )
}

export default Entries