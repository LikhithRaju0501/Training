import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from './actions/Actions'

const AddEntry = () => {
  const [item, setItem] = useState('')
  const [calories, setCalories] = useState(0)
  const dispatch= useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Hi");
    let tempCal=parseInt(calories)
    dispatch(addEntry({item,calorie:tempCal}))
    setItem('')
    setCalories(0)
  }
  return (
    <div className='border border-info rounded p-4 mt-5'>
    <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="description">Food Item</label>
      <input type="text"  id='description' className="form-control" value={item} onChange={(e)=>setItem(e.target.value)} />
      <label htmlFor="amount">Calories</label>
      <input type="number"  id='amount' className="form-control" value={calories} onChange={(e)=>setCalories(e.target.value)} />
      <button className='btn btn-success mt-3' >Add Calories</button>
      {/* <button className='btn btn-danger mt-3 ms-2' >Remove Calories</button> */}
    </form>
  </div>
  )
}

export default AddEntry