import React,{useState} from 'react'
export const StateBool=() => {
    const[data,setData]=useState(false)
    const handleShow =()=>{
        setData(true)
    }
    return(
        <>
        <p>{data? 'Hi':''}</p>
        <button onClick={handleShow}>{data ? 'Hide':'Show'}</button>
        </>

    )
}