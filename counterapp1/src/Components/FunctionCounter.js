import React from 'react';
function FunctionCounter()
{ const[name,setName]=useState('Rani')
return <div className="container">
   <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
   <br></br>
   <br></br>
   <button 
   className='btn btn-primary'
   onClick={()=>{setName("ranikumari")}}
   >ChangeName</button>
   <br>
   <br></br></br>
   <h1>{name}</h1>
</div>
}
export default FunctionCounter;