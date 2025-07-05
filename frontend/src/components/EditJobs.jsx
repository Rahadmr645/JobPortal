import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { StoreContext } from '../context/storeContext';

const EditJobs = () => {

    const { editFormShow, setEditFormShow } = useContext(StoreContext);

    const [editForm, setEditForm] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        type: ''
    })
    const handlgeChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const submitEditForm = () => {
        console.log(editForm);
    }

    return (
        <div className='jobRegister-laregeContainer'>
            <form onSubmit={submitEditForm} className='container w-50 mt-5 gap-3 d-flex flex-column position-absolute jobResister'>
                <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <label name="title" className="form-label">Title</label>
                        <button onClick={() => setEditFormShow(false)} className='cancel-btn'>cancel</button>
                    </div>

                    <input type="text" name='title' onChange={handlgeChange} value={editForm.title} className="form-control" id="title" aria-describedby="title" />
                </div>
                <div>
                    <label htmlFor="textarea" className="form-label">Description</label>
                    <textarea name='description' onChange={handlgeChange} value={editForm.description} id="textarea" placeholder='Description' className='form-control' rows="5">
                    </textarea>
                </div>
                <div>
                    <label htmlFor="company">Company</label> <br />
                    <input name='company' onChange={handlgeChange} value={editForm.company} className='rounded-1 border-0 ms-1 p-1 mt-1' type="text" placeholder='company' />
                </div>
                <div>
                    <label htmlFor="location">Location</label> <br />
                    <input name='location' onChange={handlgeChange} value={editForm.location} className='mt-1 rounded-1 border-0 ms-1 p-1' type="text" placeholder='Location' />
                </div>
                <div>
                    <label htmlFor="type">Type</label> <br />
                    <select name='type' onChange={handlgeChange} value={editForm.type} className='rounded-1 border-0 mt-1 p-1 ' id="">
                        <option value="">
                            default
                        </option>
                        <option value="full-time">
                            Full Time
                        </option>
                        <option value="part-time">Part Time</option>
                        <option value="remote">Remote</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditJobs