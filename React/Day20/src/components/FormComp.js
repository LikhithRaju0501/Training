import React, { useState } from 'react'

const FormComp = () => {
    const [info, setInfo] = useState({
        name:'',
        password:'',
        age:1
    })
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Age, setAge] = useState(0)
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(info);
        console.log(Name+' '+Password+' '+Age);
    }
    const handleNameChange=(e)=>{
        setInfo({...info,name:e.target.value})
        setName(e.target.value)
    }
    const handlePassChange=(e)=>{
        setInfo({...info,password:e.target.value})
        setPassword(e.target.value)
    }
    const handleAgeChange=(e)=>{
        setInfo({...info,age:e.target.value})
        setAge(e.target.value)
    }
    
  return (
    <div>
        <label htmlFor="">Name</label><br />
        <input type="text"   value={info.name} onChange={handleNameChange} /><br />
        <label htmlFor="">Password</label> <br />
        <input type="password"  onChange={handlePassChange} value={info.password} /><br />
        <label htmlFor="">Age</label><br />
        <input type="number"  onChange={handleAgeChange} value={info.age} /><br />
        <button onClick={handleClick} type="submit">Click Me</button>
    </div>
  )
}

export default FormComp