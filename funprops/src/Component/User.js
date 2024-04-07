import React, { useState } from 'react'
function User(props)
{
   const[name,setName]=useState("")
return(
    <div>
        <input type="text" value={props.name} onChange={(e)=>{setName(e.target.value)}}/>
        <h1>Name:{name}</h1>
        <h1>Age:{props.age}</h1>
    </div>
)
}
export default User;