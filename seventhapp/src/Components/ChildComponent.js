import React from 'react'
function ChildComponent(props)
{
    return(<div>
<button onClick={()=>props.greetHandler("child")}>GreetParent </button>
    </div>)
}
export default ChildComponent