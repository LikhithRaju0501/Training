import { createContext,useState } from "react"

export const ExpenseContext=createContext()
export const ExpenseProvider=(props)=>{
    const [entries, setEntries] = useState([
        {id:1,description:'Pizza',amount:-100},
        {id:2,description:'Burger',amount:-10},
        {id:3,description:'Salary',amount:300},
        {id:4,description:'Samosa',amount:-15},
        {id:5,description:'Stocks',amount:100},
    ])
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')
    const descChange=(e)=>{
      setDesc(e.target.value)
    }

    const amountChange=(e)=>{
      setAmount(parseInt(e.target.value))
    }

  const handleAdd=(event,e)=>{
    event.preventDefault()
    if(amount<=0){
      alert("Amount cannot be less than 0")
    setAmount('')
    setDesc('')
      return
    }
    console.log(e);
    let lastId = 0;
    entries.map((item)=>lastId=item.id)
    if(e==1){
    setEntries([...entries,{id:lastId+1,description:desc,amount:amount}])
    }else{
    setEntries([...entries,{id:lastId+1,description:desc,amount:amount*-1}])
    }
    setAmount('')
    setDesc('')
 }
  const handleDelete=(id)=>{
    setEntries(entries.filter((item)=> item.id!=id))
  }
    return <ExpenseContext.Provider value={{entries,
     handleAdd,
     handleDelete,
     desc,
     amount,
     descChange,
     amountChange
     }}>
        {props.children}
    </ExpenseContext.Provider>
}

