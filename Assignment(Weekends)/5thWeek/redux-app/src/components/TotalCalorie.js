import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const TotalCalorie = () => {
    const calState=useSelector((state)=>state.calorie)
    let totalCal=0
    calState.map((item)=>{
        totalCal +=item.cal
    })
  return (
    <div>
    <Card style={{ width: '20vw' }}>
  <Card.Body>
    <Card.Title>T O T A L - C A L O R I E</Card.Title>
    <Card.Text>
    {totalCal}C
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default TotalCalorie