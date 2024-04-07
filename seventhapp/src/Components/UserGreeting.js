import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
   /*  let message
    if(this.state.isLoggedIn){
  
      message=<div>Welcome rani</div>
    }
    else{
      
        message=<div>Welcome kumari</div>
        
    }
    return (message) */
return(
    this.state.isLoggedIn?
    <div>Welcome Rani</div>:<div>Welcome Kumari</div>
)
  }
}

export default UserGreeting