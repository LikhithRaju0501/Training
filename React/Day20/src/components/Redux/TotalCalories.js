import React from 'react'
import { useSelector } from 'react-redux'

const TotalCalories = () => {
  const entries = useSelector((state)=>state.calorie)
  let totalCal=0
  entries.map((item)=>totalCal+=item.calorie)
  return (
    <div className='display-3 text-center'>TotalCalories:{totalCal}</div>
  )
}

export default TotalCalories