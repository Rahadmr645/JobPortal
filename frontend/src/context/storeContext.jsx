
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const StoreContext = createContext();


export const ContextProvider = ({ children }) => {


    const [state, setState] = useState('working');


    const [showForm, setShowForm] = useState(false);

    const [jobs, setJobs] = useState([]);
    const URL = "http://localhost:4002"

    // Fetch all the jobs from the server
    const fetchJobs = async () => {
        const token = localStorage.getItem('token');
        console.log('Token in localStorage:', token); // Log the token to verify it's available

        if (!token) {
            alert("You are not authenticated");
            return;
        }

        if (!URL) {
            console.log('Error: URL is undefined');
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
            setJobs(data.jobs);
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
    

     


    const contextValue = {
        state,
        setState,
        showForm,
        setShowForm,
        URL,
        fetchJobs,
        jobs,
        setJobs,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}