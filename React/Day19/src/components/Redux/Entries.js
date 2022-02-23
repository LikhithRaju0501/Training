import React from 'react'
import Entry from './Entry'

const Entries = () => {
  return (
    <div className='mt-3'>
      <h4 className='display-6'>Entries</h4>
      <hr />
      <Entry />
      <Entry />
      <Entry />
      {/* <div className="list-group">
       {entries.map((item)=>{
         return <Entry entry={item} />
       })}
      </div> */}
    </div>
  )
}

export default Entries