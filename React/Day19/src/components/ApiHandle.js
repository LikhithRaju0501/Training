import React,{useState,useEffect} from 'react'

const ApiHandle = () => {
    const [info, setInfo] = useState([])
    
    const fetchData=()=>{fetch('https://jsonplaceholder.typicode.com/users').
    then(res=>res.json()).
    then(res=>{setInfo(res)})}

    useEffect(() => {
        fetchData()
    }, [])
    console.log(info);
  return (
    <>
    {info.map(el=>el.name)}
    </>
  )
}

export default ApiHandle