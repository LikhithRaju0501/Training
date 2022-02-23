import React,{useContext,useState} from 'react'
import { BankingContext } from './banking-context'

const Banking = () => {
    const {balance, dispatch} = useContext(BankingContext)
    const [amount, setamount] = useState(0);
    const inputHandle=(e)=>{
        setamount(e.target.value)
    }
    const resetInput=()=>{
        setamount(0)
    }
  return (
    <div>
        <h1>Balance:${balance}</h1>
        <input type="text" value={amount} onChange={inputHandle} />
        <button onClick={()=>{dispatch({type:'WITHDRAW',amount}); resetInput();}}>WithDraw</button>
        <button onClick={()=>{dispatch({type:'DEPOSIT',amount});  resetInput();}}>Deposit</button>
        <button onClick={()=>{dispatch({type:'FD',amount});  resetInput();}}>Fixed Deposit</button>
        <button onClick={()=>{dispatch({type:'DELETE',amount});  resetInput();}}>Delete</button>   
    </div>
  )
}

export default Banking