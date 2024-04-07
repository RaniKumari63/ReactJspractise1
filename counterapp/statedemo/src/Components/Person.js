import React, { Component } from 'react'
class Person extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rani Kumari"
      }
    }
render()
{return(
    <div>
        <h1 style={{color:"red"}}>Class Component State Example</h1>
       <hr></hr>
        <br></br><br></br>

        <h1>Mr.{this.state.name}</h1>
    </div>
)
}

}
export default Person