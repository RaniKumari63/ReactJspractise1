import React, { useState } from 'react'

function FunCounter1() {
    const[name,setName]=useState('rani');
  return (
    <div className="container">
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br></br>
        <button className='btn btn-primary' onClick={()=>setName('aaaaaaaaaa')}>ChangeName</button>
        <h1>{name}</h1>
    </div>
  )
}

export default FunCounter1