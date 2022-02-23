import React,{useContext} from 'react'
import './Progress.css'
import { ExpenseContext } from '../expense-context'


const Progress = () => {
    const {entries} = useContext(ExpenseContext)
    let income=0,dec=0,percentage=0,sum=0
    entries.map((item)=>{
        if(item.amount>0)income+=item.amount
        else dec+=item.amount
    })
    sum=income+dec
    percentage=(sum/income)*100
    if(sum<0)percentage=0
    let str=percentage+'%'
    console.log(str);
  return (
      <div>
          <h4>Your Savings Bar:</h4>
    <div className='totalBar'>
        <div className="progressBar" style={{width:str}}></div>
        {percentage < 50? <div className='bad'>Bad Savings</div>: <div className='good'>Great Savings</div>}
    </div>
    </div>
  )
}

export default Progress