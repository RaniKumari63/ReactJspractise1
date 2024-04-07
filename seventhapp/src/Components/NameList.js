import React from 'react'
import Person from './Person'

function NameList() {
    const names=['AAA','BBB','CCC','DDD','EEE']
   const persons=[
     {id:1,
        name:"Bruce",
        age:30,
        skill:'react'

     },
     {id:2,
        name:"BBB",
        age:40,
        skill:'jS'

     },
     {id:3,
        name:"CCCC",
        age:50,
        skill:'ANGULAR'

     },
     {id:4,
        name:"BrDDDDuce",
        age:50,
        skill:'JAVA'

     },
     {id:5,
        name:"Bruce",
        age:60,
        skill:'reJSact'

     },

    ]

    const personList=persons.map(person=><Person key={person.id} person={person}/>)
    const nameList=names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return <div>{personList}</div>
  // return <div> {nameList}</div>
   
}

export default NameList