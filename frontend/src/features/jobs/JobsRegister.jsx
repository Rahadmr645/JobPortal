import React, { useEffect, useState } from 'react'
import axios from 'axios'


const JobsRegister = () => {


    const URL = 'http://localhost:4002'

    const [jobForm, setJobForm] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        type: '',

    })

    const handlgeChange = (e) => {
        const { name, value } = e.target;

        setJobForm(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const jobHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${URL}/api/jobs/create-job`, jobForm);

            const data = response.data;
            console.log('job create success', data);
            alert("Job created successfully");
            setJobForm({
                title: '',
                description: '',
                company: '',
                location: '',
                type: '',
            })
        } catch (error) {
            if (error.response && error.response.data) {
                console.log('axios error:', error.response.data);
                alert(error.response.data.message || "Job creation failed");
            } else {
                console.error("axios error:", toString(error))
            }
        }

    }


    return (
        <form onSubmit={jobHandleSubmit} className='container w-50 mt-5 gap-3 d-flex flex-column'>
            <div className="mb-3">
                <label name="title" className="form-label">Title</label>
                <input type="text" name='title' onChange={handlgeChange} value={jobForm.title} className="form-control" id="title" aria-describedby="title" />
            </div>
            <div>
                <label htmlFor="textarea" className="form-label">Description</label>
                <textarea name='description' onChange={handlgeChange} value={jobForm.description} id="textarea" placeholder='Description' className='form-control' rows="5">
                </textarea>
            </div>
            <div>
                <label htmlFor="company">Company</label> <br />
                <input name='company' onChange={handlgeChange} value={jobForm.company} className='rounded-1 border-0 ms-1 p-1 mt-1' type="text" placeholder='company' />
            </div>
            <div>
                <label htmlFor="location">Location</label> <br />
                <input name='location' onChange={handlgeChange} value={jobForm.location} className='mt-1 rounded-1 border-0 ms-1 p-1' type="text" placeholder='Location' />
            </div>
            <div>
                <label htmlFor="type">Type</label> <br />
                <select name='type' onChange={handlgeChange} value={jobForm.type} className='rounded-1 border-0 mt-1 p-1 ' id="">
                    <option value="">
                        default
                    </option>
                    <option value="full-time">
                        Full Time
                    </option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default JobsRegister