import React, { useState } from 'react'

const Counter = ({name}) => {
    const [count, setcount] = useState({
        count1:0,
    })
    const handleClick=(i)=>{
        if(i===1){
            setcount({count1:count.count1+1})
        }else{
            if(count.count1-1<0){
                alert("Won't allow Negative number");
                return
            }
            setcount({count1:count.count1-1})
        }
    }
  return (
    <div>
        <h1>{count.count1}</h1>
        <button onClick={()=>handleClick(1)}>Increment</button>
        <button onClick={()=>handleClick(2)}>Decrement</button>
    </div>
  )
}

export default Counter