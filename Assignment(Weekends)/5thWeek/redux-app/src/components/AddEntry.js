import React, { useState } from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addEntry} from './Actions'

const AddEntry = () => {
    const dispatch = useDispatch()
    const [Item, setItem] = useState('')
    const [Cal, setCal] = useState(0)
    const handleItem=(e)=>{
        setItem(e.target.value);
    }
    const handleCal=(e)=>{
        setCal(e.target.value);
    }
  return (
    <div>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Item Name"
      value={Item}
      onChange={(e)=>handleItem(e)}
    />
    <InputGroup.Text id="basic-addon2">Item</InputGroup.Text>
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Calories"
      type='number'
      value={Cal}
      onChange={(e)=>handleCal(e)}
    />
    <InputGroup.Text id="basic-addon2">Calories</InputGroup.Text>
  </InputGroup>
    
  <Button variant="success" onClick={()=>{dispatch(addEntry(Item,Cal)); setItem(''); setCal(0)}}>A D D - I T E M</Button>{' '}
    </div>
  )
}

export default AddEntry