import React,{useState} from "react";


export default function Qty({count,sub,add}){

  
  return(
    <>
      <div style={{display:"flex"}} >
        <button onClick={()=>{sub()}}>-</button>
        <p style={{padding:"0 5px 0 5px ", width:"20px"}}>{count}</p>
        <button onClick={()=>{add()}}>+</button>
      </div>
     
    </>
  )
}