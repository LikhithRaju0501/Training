import React, { useState } from 'react'

const Post = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const data={name, email, mobile}
    const handleClick=()=>{
        console.log(data);
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            body:JSON.stringify(data)
        }).then((res)=>console.log(res))
    }
  return (
    <div>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <input type="text" placeholder='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} />  <br /><br />
        <button type='submit' onClick={handleClick}>Submit</button> 
    </div>
  )
}

export default Post