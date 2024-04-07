import React from 'react'

function Football() {
    const shoot=(a,b)=>
    {
        alert("Great shot"+a+b.type)
    }
  return (
    <div> <button onClick={(event)=>{shoot("goal",event)}}>Shoot</button></div>
  )
}

export default Football