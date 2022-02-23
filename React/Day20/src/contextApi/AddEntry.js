import React,{useContext} from 'react'
import { ExpenseContext } from '../expense-context'

const AddEntry = () => {
  const {desc,amount,descChange,amountChange,handleAdd} = useContext(ExpenseContext)
  return (
    <div className='border border-info rounded p-4 mt-5'>
      <form className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" value={desc} onChange={descChange} id='description' className="form-control" />
        <label htmlFor="amount">Amount</label>
        <input type="number" value={amount} onChange={amountChange} id='amount' className="form-control" />
        <button className='btn btn-success mt-3' onClick={(event)=>handleAdd(event,1)}>Add Income</button>
        <button className='btn btn-danger mt-3 ms-2' onClick={(event)=>handleAdd(event,2)}>Add Expense</button>
      </form>
    </div>
  )
}

export default AddEntry