import React, { useState } from 'react'

const FormComp = () => {
    const [info, setInfo] = useState({
        name:'',
        password:'',
        age:0
    })
    const handleClick=(e)=>{
        e.preventDefault();
        alert(info.name)
    }
    const handleNameChange=(e)=>{
        setInfo({...info,name:e.target.value})
    }
    const handlePassChange=(e)=>{
        setInfo({...info,password:e.target.value})
    }
    const handleAgeChange=(e)=>{
        setInfo({...info,age:e.target.value})
    }
    
    console.log(info);
  return (
    <div>
        <label htmlFor="">Name</label>
        <input type="text"   value={info.name} onChange={handleNameChange} /><br />
        <input type="password"  onChange={handlePassChange} value={info.password} /><br />
        <input type="numer"  onChange={handleAgeChange} value={info.age} /><br />
        <button onClick={handleClick} type="submit">Click Me</button>
    </div>
  )
}

export default FormComp