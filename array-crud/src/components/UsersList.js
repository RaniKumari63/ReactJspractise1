import React, { useState } from 'react'
import DataList from './DataList';

function UsersList() {
   

    
    const [users, setUsers] = useState(DataList)
   
   // const [user, setUser] = useState({ id: '', name: '', email: '', mobile: '' })
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const create = () => {
      
        let user={
            id:id,
            name:name,
            email:email,
            mobile:mobile
        }
        let arr = users.concat(user);
        setUsers(arr)
       let newList = DataList.concat(user);
        //setUser(user);
        console.log('----->'+user)
      
        setUsers(newList)
       // DataList = newList;
        alert('calling create method'+DataList)
        console.log(newList)
    }
   const deleteUser =(id)=>{
        setUsers(DataList.splice(id,1))
    }

    return (
        <div>
            <h1>Create User</h1>
            <hr />
            <div className='container'>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputId" placeholder="Enter User Id" onChange={(e) => setId(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" id="inputName" placeholder="Enter User Name" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Enter User Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <input type="number" className="form-control" id="inputMobile" placeholder="Enter User Mobile Number" onChange={(e) => setMobile(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={create}>Submit</button>
                </form>
            </div>
            <hr />
            <h1>Users List</h1>
            <hr />
            {
                (users.length > 0) ?
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => <tr key={user.id}>
                                
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td><button className='btn btn-success'>Edit</button></td>
                                <td><button className='btn btn-danger' onClick={deleteUser}>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table> : "Users Not Available"
            }

        </div>
    )
}

export default UsersList
