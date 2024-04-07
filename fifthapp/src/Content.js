import React from 'react'
import {useState} from React;
const Content=()=>
{const[name,setName]=useState('Rani')


    const handleNameChange = ()=> {
        const names=['Bob','Kevin','Dave'];
        const int=Math.floor(Math.random()*3);
        setName(names[int]);
      }  
      const handleClick=()=>
      {
        console.log("You clicked it")
      }
      const handleClick2=(name)=>
      {
        console.log(`${name}You clicked it`)
      }
      const handleClick3=(e)=>
      {
        console.log(e.target.innerText)
      }
    return(
        <main>
            <p onDoubleClick={handleClick}>Hello {name}</p>
         <button onClick={handleClick}>Click It</button>
         <button onClick={()=>handleClick2('ranik')}>Click It</button>
         <button onClick={(e)=>handleClick3(e)}>Click Its</button>
        </main>
    );
}

export default Content