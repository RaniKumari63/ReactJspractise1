import React, { useState } from 'react'
function FunCounter1()
{
    const[name,setName]=useState('rani');
    const[age,setAge]=useState(10);
    return(<div className="container">
        <input type="text" value={name} onChange={(e)=>{ setName(e.target.value); setAge(e.target.value)}}/>
        <input type="text" value={age} />
        <br/><br></br>
        <button onClick={()=>{setName("ranikumari"); setAge(23)}}>ChangeName</button>

        <h1>{name}{age}</h1>
        
    </div>)
}
export default FunCounter1