import { useEffect, useState } from 'react'
import axios from "axios"
const Login = () => {

    const [showForm, setShowForm] = useState(false);
    const [currState, setCurrState] = useState('Login');


    const URL = 'http://192.168.8.221:4002'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        // checked: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
         const endpoint = currState === "Login"? `${URL}/api/user/login`
         : `${URL}/api/user/create`;
         
         try{
           const response = await axios.post(endpoint, formData);
           const data = response.data;
           
           if(currState === "Login") {
             localStorage.setItem("token", data.token);
             window.location.href = '/';
           } else {
             alert("Signup successfull Now log in");
             setCurrState("Login")
           }
         } catch(error) {
           if(error.response && error.response.data) {
             alert(error.response.data.message || "Login/signup fail")
           }else {
             alert("server error please try again")
           }
           console.error("AXIOS FULL ERROR:", error.toJSON());
         }
    }


    useEffect(() => {
        handleSubmit
    }, [])

    return (
        <div className='container d-flex justify-content-center align-items-center form-main-content ' style={{ minHeight: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '400px' }}>
                {currState === 'SignUp' ?
                    <div className="mb-3 " >
                        <label htmlFor="exampleInputname" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputname" aria-describedby="nameHelp"
                            value={formData.name}
                            name='name'
                            onChange={handleChange}
                        />
                    </div>
                    : <></>
                }
                <div className="mb-3 " >
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={formData.email}
                        name='email'
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={formData.password}
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {currState === 'Login' ? <p>Don't have account<span onClick={() => setCurrState('SignUp')}> click here</span></p> :
                    <p>Already have account<span onClick={() => setCurrState('Login')}> click here</span></p>
                }

            </form>
        </div>
    )
}

export default Login