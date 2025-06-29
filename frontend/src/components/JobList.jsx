import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../context/storeContext';
import axios from 'axios';

const JobList = () => {
    const { URL } = useContext(StoreContext);

    // Fetch all the jobs from the server
    const fetchJobs = async () => {
        const token = localStorage.getItem('token');
        console.log('Token in localStorage:', token); // Log the token to verify it's available

        if (!token) {
            alert("You are not authenticated");
            return;
        }

        try {
            const response = await axios.get(`${URL}/api/jobs/all-jobs`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Send token as authorization header
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            const data = response.data;
            console.log('Fetched Jobs:', data); // Check the fetched data
        } catch (error) {
            if (error.response) {
                console.log('Error Response:', error.response);
                console.log('Error Data:', error.response.data);
                console.log('Error Status:', error.response.status);
            } else {
                console.log('Error Message:', error.message); // If no response
            }
        }
    };

    useEffect(() => {
        fetchJobs();

    }, []); // Empty dependency array means it will run once when the component mounts

    return (
        <div>
            <h2>Recent Jobs</h2>
            {/* Add job listing rendering here */}
        </div>
    );
}

export default JobList;
