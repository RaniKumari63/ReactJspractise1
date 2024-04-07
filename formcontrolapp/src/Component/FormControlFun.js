import React, { useState } from 'react'

function FormControlFun() {
    const[username,setUserName]=useState("")
    const[comment,setComment]=useState("")
    const[topic,setTopic]=useState("react")
  return (<form onSubmit={e=>{
    alert(`${username} ${comment} ${topic}`)
e.preventDefault()
}}> 
    <div>
        <label>UserName</label>
        <input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}}/><br></br>
    <label>Comment</label>
    <textarea value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea><br></br>
    <label>Topic</label>
    <select value={topic} onChange={(e)=>{setTopic(e.target.value)}}>
         <option value="react">React</option>
    <option value="angular">Angular</option>
    <option value="vue">Vue</option><option></option>
    </select>
    </div>
    <button type="submit" >Submit</button>
    </form>
  )
}

export default FormControlFun