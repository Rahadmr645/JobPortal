import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar container navbar-expand-lg  mt-2 '>
            <div className='d-flex  justify-content-evenly  align-items-center w-100' >
                <div className='fw-bold fs-2'>
                    Jobify
                </div>
                <div>
                    <ul className='list-unstyled d-flex justify-content-center w-100 align-items-center  gap-5 mt-1' style={{ fontSize: '20px' }}>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Application</li>
                    </ul>
                </div>
                <div>

                    {/* <button className='btn bg-dark text-light'>
                        Profile
                    </button> */}
                    <button className='btn bg-dark text-light fw-bold'>Sign In</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar