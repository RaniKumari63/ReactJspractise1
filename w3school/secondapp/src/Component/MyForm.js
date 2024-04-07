import React, { useState } from 'react'

function MyForm() {
    const[name,setName]=useState("");
    
  return (
    <form  onSubmit={(event)=>{event.preventDefault()
      alert(`${name}`)
      }}>
        <label>Enter your name:
    <input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)}/>
    </label>
    <input type="submit"/>
    </form>
  )
}

export default MyForm