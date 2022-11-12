import React,{useState} from "react";


export default function Qty(){
  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(0)
  return(
    <>
      <div>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>+</button>
      </div>
    </>
  )
}