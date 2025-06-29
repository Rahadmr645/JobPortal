import React from 'react'

const JobsView = ({ title, description, company, location, type, time, ownar }) => {
    return (
        <div className='job-view'>
            <h1>
                Title : {title}
            </h1>
            <p>
                <strong> Description: </strong>   {description}
            </p>
            <p>
                <strong>Comapany :</strong>   {company}
            </p>
            <p>
                <strong>Location:</strong>   {location}
            </p>
            <p>
                <strong>Type:</strong>  {type}
            </p>
            <p>
             <strong>Posted at: </strong>  
             {new Date(time).toLocaleDateString()}
            </p>
            <p>Made By: {ownar}</p>

        </div>
    )
}

export default JobsView;