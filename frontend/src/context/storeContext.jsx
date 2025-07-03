
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext();


export const ContextProvider = ({ children }) => {


    const [state, setState] = useState('working');
    const [login, setLogin] = useState(false);
    const [signBtn, setSignBtn] = useState("Sign In");
    const [showForm, setShowForm] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const URL = "http://localhost:4002"
    const token = localStorage.getItem("token");

    // decode function
    const decodeToken = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0)
                        .toString(16)).slice(-2))
                    .join('')
            );
            return JSON.parse(jsonPayload);
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }

    // decode token and update user info
    useEffect(() => {
        if (token) {
            const decoded = decodeToken(token);
            setUser(decoded);
            console.log('decoded user:', decoded)
        }
    }, [token])




    // Fetch all the jobs from the server
    const fetchJobs = async () => {

        if (!URL) {
            console.log('Error: URL is undefined');
            return;
        }

        try {
            const response = await axios.get(`${URL}/api/jobs/all-jobs`, {
                headers: {

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


    const chackeLogin = () => {
        if (token) {
            setLogin(true);
            setSignBtn("Logout");
        } else {
            setLogin(false);
        }
    }



    // fetch all the users
    const fetchUsers = async () => {
        if (!URL) {
            console.log("URL is not define")
            return;
        }

        try {
            const response = await axios.get(`${URL}/api/admin/users`);
            const data = response.data;
            setUsers(data)
        } catch (error) {
            console.error("faild to get users", data.error)
        }
    }

    // delete the users
    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(`${URL}/api/admin/user/delete/${id}`);
            const data = response.data;
            console.log(data);
            fetchUsers();
        } catch (error) {
            console.error('faild to delete', "error", error.message)
        }
    }

// delete jobs 
const deleteJobs = async (id) => {
     try {
       const response = await axios.delete(`${URL}/api/jobs/delete-job/${id}`)
       const data = response.data;
       alert(data.message);
       fetchJobs();
     }catch (error) {
       console.error("faild to delete",error.massage)
     }
}
    const contextValue = {
        state,
        setState,
        showForm,
        setShowForm,
        URL,
        fetchJobs,
        jobs,
        setJobs,
        login,
        setLogin,
        signBtn,
        setSignBtn,
        chackeLogin,
        user,
        setUser,
        fetchUsers,
        users,
        setUsers,
        deleteUser,
        deleteJobs,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}