import React from 'react'
import { Button,Modal,Table} from 'react-bootstrap'


const ModalComp = (props) => {
  return (
    <>
    <Modal show={props.Show} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>C A R T</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {props.showEdit? <div>
          <input type="number" value={props.editedValue} onChange={props.editedValueChange} style={{width:'70%',marginBottom:'0.5vh',marginRight:'0.5vw'}} />
      <Button variant='primary' onClick={props.setItemValue}>Add Edited</Button>
          </div>:<></>}
         
     
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Sl.No</th>
      <th>Item</th>
      <th>Quantity</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {props.ItemList.filter(item=>item.quantity>0).map((item,index)=>{
        return(
            <tr>
      <td>{index+1}</td>
      <td>{item.itemName}</td>
      <td>{item.quantity}</td>
      <td  style={{textAlign:'center'}}>
          <Button variant='success' onClick={()=>props.showInput(item.name)}>Edit</Button></td>
      <td><Button variant='danger' onClick={()=>props.handleDelete(item.name)}>Delete</Button></td>
    </tr>
        )
    })}
  </tbody>
</Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="secondary" onClick={props.clearAll}>
          Clear All
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalComp