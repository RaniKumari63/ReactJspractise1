import React from 'react'
const UserInputForm =(props)=>
{
    let handleSubmit=(e)=>
    {
        e.preventDefault();
    }
    return(
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Please Enter Your Name</label>
        <br/>
        <input type="text" id="name" defaultValue={props.data.name||''} onChange={props.inputChange}/>


        </form>
    )
}
export default UserInputForm