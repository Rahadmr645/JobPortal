import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { StoreContext } from '../../context/storeContext'

const Admin = () => {
    const { fetchUsers, users, deleteUser } = useContext(StoreContext);

    useEffect(() => {
        fetchUsers();
    }, [])
    useEffect(() => {
        console.log('users', users)
    }, [users])
    return (
        <div>
            <Navbar />
            <br />
            <h1>
                All the users
            </h1>
            {users.length > 0 ?
                (
                    users.map((user) => {
                        return (
                            <div style={{ border: '1px solid red', padding: '10px', width: '400px' }} key={user._id}>
                                <p>{user?.name}</p>
                                <p>email: {user?.email}</p>
                                <p>id:{user._id}</p>
                                <button onClick={() => deleteUser(`${user._id}`)} className='btn btn-danger'>delete</button>
                            </div>
                        )
                    })
                )
                : <p>Opps no users registered</p>
            }

        </div>
    )
}

export default Admin