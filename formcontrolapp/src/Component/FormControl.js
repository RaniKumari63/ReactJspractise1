import React, { Component } from 'react'

export default class FormControl extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:''
      }
    }
    

  render() {
    const{username,comment,topic}=this.state
    return (
    <div>
    <form onSubmit={e=>{
        alert(`${username} ${comment} ${topic}`)
    e.preventDefault()
    }}>
<div>
<label>UserName</label>
<input type='text'  value={username} onChange={(e)=>{ this.setState({username:e.target.value})}}/>
<br></br><br></br>
<label>Comment</label>
<textarea value={comment} onChange={(e)=>{this.setState({comment:e.target.value})}}></textarea>
</div>
<div>
<label>topic</label>
<select value={topic} onChange={(e)=>{this.setState({topic:e.target.value})}}> 
    <option value="react">React</option>
    <option value="angular">Angular</option>
    <option value="vue">Vue</option>
</select>

</div>
<button type="submit" >Submit</button>
    </form>
   <div>
    <h2>{username}</h2>
    <h2>{comment}</h2>
    <h2>{topic}</h2>

    </div>   
   </div>
    )
  }
}
