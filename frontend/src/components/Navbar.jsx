import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/storeContext';
const Navbar = () => {


    const { setShowForm, setLogin, login, chackeLogin, signBtn, setSignBtn } = useContext(StoreContext);

    useEffect(() => {
        chackeLogin();
    }, [])

    return (

        <nav className='navbar container navbar-expand-lg  mt-2 '>
            <div className='d-flex  justify-content-evenly  align-items-center w-100' >
                <div className='fw-bold fs-2'>
                    Jobify
                </div>
                <div>
                    <ul className='list-unstyled d-flex justify-content-center w-100 align-items-center  gap-5 mt-1' style={{ fontSize: '20px' }}>
                        <Link className='link' to='/'><li>Home</li></Link>
                        <li style={{ cursor: 'pointer' }} onClick={() => setShowForm(true)} >Jobs</li>
                        <li onClick={() => console.log(token)}>Application</li>
                        {login ? <Link className='link' to={'/dashBoard'}><li>DashBoard</li></Link> : <></>}
                    </ul>
                </div>
                <div>

                    {/* <button className='btn bg-dark text-light'>
                        Profile
                    </button> */}
                    <button className='btn bg-dark text-light fw-bold'
                        onClick={() => {
                            if (login) {
                                // perform logout
                                localStorage.removeItem("token");
                                setLogin(false);
                                setSignBtn("Sign In");
                                window.location.href = '/';
                            } else {
                                window.location.href = '/login';
                            }
                        }}

                    >{signBtn}</button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar