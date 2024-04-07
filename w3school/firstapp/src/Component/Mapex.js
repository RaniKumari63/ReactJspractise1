import React from 'react'

function Mapex() {

    const myArray=['apple','banana','orange'];
    const myList=myArray.map((item)=><p>{item}</p>)
   const vehicles=['mustang','f-150','expedition']
  //const[car,truck,suv]=['mustang','f-150','expedition']
  const[car,truck,suv]=vehicles
  function calculate(a,b)
  {
    const add=a+b;
    const substract=a-b;
    const multiply=a*b;
    const divide=a/b;
    return [add,substract,multiply,divide]
  }
  
  return (
    <div>
        {myList}
    </div>
  )
}

export default Mapex