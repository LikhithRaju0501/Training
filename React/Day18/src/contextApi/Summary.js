import React,{useContext} from 'react'
import { ExpenseContext } from '../expense-context'


const Summary = () => {
    const {entries} = useContext(ExpenseContext)
    let inc=0,dec=0;
    entries.map((item)=>{
        if(item.amount>0)inc+=item.amount
        else dec+=item.amount
    })
  return (
    <div>
        <div className="row">
            <div className="col-sm-6">
                <div className="card border-success">
                    <div className="card-body">
                        <h5 className="card-title">Income</h5>
                        <h4 className='text-center text-success-display-5'>{inc}</h4>
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="card border-danger">
                    <div className="card-body">
                        <h5 className="card-title">Expense</h5>
                        <h4 className='text-center text-danger-display-5'>-${dec*-1}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary