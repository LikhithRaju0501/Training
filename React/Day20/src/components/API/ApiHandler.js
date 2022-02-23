import React, { useState,useEffect } from 'react'
import Delete from './Delete'
import Post from './Post'

const ApiHandler = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(result=>result.json())
        .then(info=>setData(info))
    }, [])
    // console.log(data);
  return (
    <div>
        {/* {data.map((item)=>{
            return (
                <div>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                </div>
            )
        })} */}
        {/* <Post /> */}
        <Delete />
    </div>
  )
}

export default ApiHandler