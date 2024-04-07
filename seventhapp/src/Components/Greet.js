import React from 'react'
/* function Greet()
{
    return <h1>HelloRani</h1>
} */
 const Greet=(props)=>{
    
 console.log(props)
    return( <div><h1>Hello {props.namevalue}{props.heroname}</h1>
    {props.children}</div>
    )
}
export default Greet