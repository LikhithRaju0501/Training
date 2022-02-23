import React,{useContext} from 'react'
import Entry from './Entry'
import { ExpenseContext } from '../expense-context'


const Entries = () => {
  const {entries} = useContext(ExpenseContext)
  return (
    <div className='mt-3'>
      <h4 className='display-6'>Entries</h4>
      <hr />
      <div className="list-group">
       {entries.map((item)=>{
         return <Entry entry={item} />
       })}
      </div>
    </div>
  )
}

export default Entries