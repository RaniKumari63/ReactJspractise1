import React, { Component } from 'react'
class Course extends Component
{ 
    constructor(props)
    {
super(props);
this.state=
{
cname:""
}
    }
    render()
    {
        return(
            <div>
                <input type="text" value={this.props.cname} onChange={(e)=>{this.setState({cname:e.target.value})}}/>
                    <h1>CourseName:{this.state.cname}</h1>
            <h1>Time:{this.props.time}</h1></div>
        )
    }
}
export default Course