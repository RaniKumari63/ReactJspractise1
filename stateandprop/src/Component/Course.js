import React, { Component } from 'react'
class Course extends Component
{
    constructor(props)
   { console.log(props);
        super(props);
        this.state=
        {
          duration:2
        }
    }
    render()
    {
        return<div><h1>CourseName:{this.props.cname}</h1>
        <h1>duration:{this.state.duration}</h1></div>
    }

}
export default Course;
