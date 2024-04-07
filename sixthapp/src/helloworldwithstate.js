import React from "react";
import { Component } from "react";

class helloworldwithstate extends Component
{
    constructor(props)
    {
        super(props);
        let firstName=this.props.name.split(" ")[0];
        this.state={
            name:firstName
        }
    }
    render()
    {
        return<h1>Hello,{this.state.name}</h1>
    }

}
export  default helloworldwithstate