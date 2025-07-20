import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import { StoreContext } from '../context/storeContext';
import JobsRegister from '../features/jobs/JobsRegister';

const DashBoard = () => {

  const { handleDeleteAccount, user,setShowForm,showForm } = useContext(StoreContext);

  const capitilizeWords = (str) => {
    return str?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <div>
      <Navbar />
      {showForm && <JobsRegister/>}
      <div className='d-flex gap-3 justify-content-center  mt-5'>
        <div className='profile-container'>
          <h1>{capitilizeWords(user?.name)}</h1>
          <h4>Email: {user?.email}</h4>
          <button className='btn btn-outline-success'>Edit Profile</button>
          {/* <button>{signBtn}</button> */}
          <button onClick={handleDeleteAccount}>Delete Your account</button>
          <button className='btn btn-outline-success' onClick={() => setShowForm(true) }>Post Job</button>
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