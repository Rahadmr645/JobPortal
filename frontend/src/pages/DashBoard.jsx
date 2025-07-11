import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { StoreContext } from '../context/storeContext';

const DashBoard = () => {

  const { signBtn, user } = useContext(StoreContext);

  return (
    <div>
      <Navbar />
      <div className='d-flex gap-3 justify-content-center  mt-5'>
        <div className='profile-container'>
          <h1>{user?.name}</h1>
          <h4>Email: {user?.email}</h4>
          <h4>Location: </h4>
          <button className='btn btn-outline-success'>Edit Profile</button>
          {/* <button>{signBtn}</button> */}
        </div>
        <div className='profile-container'>
          <div>
            <h1>Applied Jobs</h1>
            <div>
              <h4>Frontend Developer</h4>
              <div>
                <p>brand name</p>
                <p>status</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Frontend Developer</h4>
            <div>
              <p>brand name</p>
              <p>status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard;