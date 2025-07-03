import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
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
            <div>
            <p> <FaRegEdit style={{border:"1px solid red",width:"20px",height:"20px"}} />bsbsbh</p> 
              <MdDeleteOutline />
            </div>
        </div>
    )
}

export default JobsView;