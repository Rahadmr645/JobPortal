import React from 'react'

const JobsRegister = () => {
    return (
        <form className='container w-50 mt-5 gap-3 d-flex flex-column'>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="title" />
            </div>
            <div>
                <label htmlFor="textarea" className="form-label">Description</label>
                <textarea name="textarea" id="textarea" placeholder='Description' className='form-control' rows="5">
                </textarea>
            </div>
            <div>
                <label htmlFor="company">Company</label> <br />
                <input className='rounded-1 border-0 ms-1 p-1 mt-1' type="text" placeholder='company' />
            </div>
            <div>
                <label htmlFor="location">Location</label> <br />
                <input className='mt-1 rounded-1 border-0 ms-1 p-1' type="text" placeholder='Location' />
            </div>
            <div>
                <label htmlFor="type">Type</label> <br />
                <select className='rounded-1 border-0 mt-1 p-1 ' name="" id="">
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