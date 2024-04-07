import React from 'react'
import Car from './Car'

function Garage() {
    const cars=['ford','bmw','audi']
  return (
    <>
    <h1>Who lives in my garage</h1>
    <ul>
        {cars.map((car)=><Car brand={car}/>)}
    </ul>
    </>

  )
}

export default Garage