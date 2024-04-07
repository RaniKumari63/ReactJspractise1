import React from 'react'
import Student from './Student'

function StudentList() {
const students=[
    {sid:1,
    sname:"aaaa",
    sage:30,
semail:"aaa@gmail.com",
},
{sid:1,
    sname:"aaaa",
    sage:30,
semail:"aaa@gmail.com",
}, {sid:1,
    sname:"aaaa",
    sage:30,
semail:"aaa@gmail.com",
}
]
const studentList=students.map(student => <Student student={student}/>)

  return (
    
    <div>{studentList}</div>
  )
}

export default StudentList