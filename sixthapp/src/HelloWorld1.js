import React, { Component } from 'react'
class HelloWorld1 extends Component{

   
    constructor(props)
    {
        super(props);
        let firstName=this.props.name+"kkk";
        this.state={
            name:firstName
        }
    }
    render()
    {
        return<h1>Hello,{this.state.name}</h1>
    }

}
export default HelloWorld1