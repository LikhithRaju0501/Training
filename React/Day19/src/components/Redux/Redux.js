import React from 'react'
import AddEntry from './AddEntry'
import Entries from './Entries'
import Entry from './Entry'
import TotalCalories from './TotalCalories'

const Redux = () => {
  return (
    <div className='container'>
        <TotalCalories />
        <AddEntry />
        <Entries />
    </div>
  )
}

export default Redux