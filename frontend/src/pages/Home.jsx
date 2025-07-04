import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import JobList from '../components/JobList';
import { StoreContext } from '../context/storeContext';
import JobsRegister from '../features/jobs/JobsRegister';
import EditJobs from '../components/EditJobs';

const Home = () => {
  
  

  const { showForm,editFormShow, setEditFormShow } = useContext(StoreContext);

  return (
    <div style={{position:'relative', minHeight: '100vh', border: '1px solid red'}}>
      <Navbar />
      {showForm && 
      <JobsRegister  />}

      {editFormShow && <EditJobs/>}
      {/* hero section */}
      <div className='hero-section'>
        <div className='d-flex flex-column justify-content-center align-items-center text-center'>
          <h1 className='fs-1 fw-bold'>Find Your Dream Job</h1>
          <p style={{ fontSize: '17px' }}>Seach and apply for the latest job openings.</p>
        </div>
        <div className='d-flex '>
          <div className='position-relative ' style={{ border: '1px solid #636363', borderRadius: '5px 0px 0 5px' }}>
            <CiSearch className='position-absolute  ' style={{ bottom: '5px', fontSize: '20px' }} />
            <input style={{ borderRadius: '5px 0px 0 5px' }} className='ps-4 border-0 h-100  p-1' type="text" placeholder='Search for jobs' />
          </div>
          <div className='position-relative' style={{ border: '1px solid #636363', borderRadius: '0px 5px 5px 0' }}>
            <CiLocationOn className='position-absolute  ' style={{ bottom: '5px', fontSize: '20px' }} />
            <input style={{ borderRadius: '0px 5px 5px 0' }} className='ps-4 border-0 h-100 p-1' type="text" placeholder='Location' />
          </div>
          <div className='ms-2'>
            <button className='btn bg-dark text-light' style={{ width: '100px' }}>Search</button>
          </div>
        </div>

      </div>
      <JobList />
    </div>
  )
}

export default Home