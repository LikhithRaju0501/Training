import React,{useState} from 'react'
import { Button,Modal} from 'react-bootstrap';

const ModalComp = (props) => {

  
  return (
    <>
      <Modal  show={props.ShowModal} centered onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>E D I T - C O N T A C T</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
     <div className="col">
      <input type="text" 
         className="form-control"
         placeholder="Full name"
         aria-label="First name" 
         onChange={props.handleModalName} />
    </div>
    <div className="col">
     <input type="email" 
     className="form-control" 
     placeholder="Email" 
     aria-label="Last name"
     onChange={props.handleModalEmail}  />
    </div>
    </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
          <Button variant="success" onClick={()=>props.handleModalEdit(props.Index)}>
            Publish Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComp