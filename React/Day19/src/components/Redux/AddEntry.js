import React from 'react'

const AddEntry = () => {
  return (
    <div className='border border-info rounded p-4 mt-5'>
    <form className="form-group">
      <label htmlFor="description">Food Item</label>
      <input type="text"  id='description' className="form-control" />
      <label htmlFor="amount">Calories</label>
      <input type="number"  id='amount' className="form-control" />
      <button className='btn btn-success mt-3' >Add Calories</button>
      <button className='btn btn-danger mt-3 ms-2' >Remove Calories</button>
    </form>
  </div>
  )
}

export default AddEntry