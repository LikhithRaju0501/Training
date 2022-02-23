import React, { useState,useEffect } from 'react'


const Delete = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(result=>result.json())
        .then(info=>setData(info))
    }, [])
    const deleteItem=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'DELETE',
        })
    }
  return (
    <div>
         {data.map((item)=>{
            return (
                <div>
                <h2>{item.name}</h2>
                <button onClick={()=>deleteItem(item.id)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Delete