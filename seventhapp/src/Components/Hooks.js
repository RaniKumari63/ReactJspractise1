import React from 'react'
import { useState } from 'react'
const Hook=()=>
{
 function countIntitial()
 {
    console.log('run function')
    return 4;
 }
    const[state,setState]=useState({count:4,theme:'blue'})
const count=state.count
const color=state.theme
    function decrement()
    {
      
       setState(c=>{
        return{
        ...c,count:c.count-1}})
    }
    const increment=()=>
    {
       setState(c=>c.count+1)
    }
    return(<div><h1>hello welcome</h1>
    <button onClick={decrement}>-</button>
    <span>{count}{color}</span>
    <button onClick={increment}>+</button></div>)
}
export default Hook