import React from 'react'

//function Destructuringrops({no,email}) {
    function  Destructuringrops(props) {
       const {no,email}=props
  return (
    <div><h1>hai{no}{email}</h1></div>
  )
}

export default Destructuringrops