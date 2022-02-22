import React,{useContext} from 'react'
import { ExpenseContext } from '../expense-context'


const TotalBalance = () => {
const {entries,handleClick}=useContext(ExpenseContext)
  const tBalance = entries.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  )
  return (
    <div className='display-3 text-center'>${tBalance}</div>
  )
}

export default TotalBalance