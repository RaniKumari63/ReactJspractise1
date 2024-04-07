import React from 'react'
const UserDashboard=(props)=>
{
    let inputChageHandler=(event)=>
    {
        props.updateName(event.target.value);
    }
    return(
        <div>
            <UserInputForm data={props.user} inputChage={inputChageHandler}/>
        </div>
    )
}