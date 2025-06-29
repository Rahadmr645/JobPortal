import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../context/storeContext';
import axios from 'axios';
import { useState } from 'react';
import JobsView from './JobsView.jsx';

const JobList = () => {
    const { fetchJobs, jobs } = useContext(StoreContext);
    useEffect(() => {
        fetchJobs();

    }, []); // Empty dependency array means it will run once when the component mounts

    useEffect(() => {
        console.log('jobs updated:', jobs)
    }, [jobs])


    return (
        <div>
            <h2>Recent Jobs</h2>
            <div className='job-list'>
                {jobs.length > 0 ? jobs.map((job) => {
                    return (

                        <JobsView key={job._id} title={job.title} description={job.description} company={job.company} location={job.location} type={job.type} time={job.createdAt} ownar={job.createdBy.name} />
                    )
                })
                    : <p>Opps there is no jobs yet</p>}
            </div>
        </div>
    );
}

export default JobList;
