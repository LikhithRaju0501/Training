import React from 'react'
import { useSelector } from 'react-redux'
import Entry from './Entry'

const Entries = () => {
  const entries=useSelector((state)=>state.calorie)
  // if you use store = createStore(calorieReducer)
  // const entries=useSelector((state)=>state)
  return (
    <div className='mt-3'>
      <h4 className='display-6'>Entries</h4>
      <hr />
      <div className="list-group">
       {entries.map((item)=>{
         return <Entry entry={item} key={item.id} />
       })}
      </div>
    </div>
  )
}

export default Entries