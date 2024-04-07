import React from 'react'

function Columns() {
    const items=[]
  return (
    <React.Fragment>
        items.map(item =>(
            <React.Fragment key={items.id}>
                <h1>title</h1>
                <p>{items.title}</p>
            </React.Fragment>
        ))
  <td>Name</td>
  <td>Vishwas</td>

  </React.Fragment>
  )
}

export default Columns