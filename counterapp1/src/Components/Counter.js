import React, { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    render() {
        return (

            <div className='container'>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <button className='btn btn-success' style={{ marginRight: 15 }} 
                onClick={()=>{this.setState({count:this.state.count+1})}}> +</button><button className='btn btn-danger' onClick={()=>{this.setState({count:this.state.count-1})}}>-</button>
            </div>
        )
    }
}
export default Counter