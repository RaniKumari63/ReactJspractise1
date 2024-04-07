import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
constructor(props)
{
  super(props)
  {
    this.state={
      parentName:"Parent",
      parentAge:"30"
    }
  }
 this.greetParent=this.greetParent.bind(this)
}
greetParent(childName)
{
  alert(`Hello${this.state.parentName}${this.state.parentAge} from ${childName}`)

}
  render()
 {

 return(
  <div>
<ChildComponent greetHandler={this.greetParent}/>
  </div>
 )
}
}
