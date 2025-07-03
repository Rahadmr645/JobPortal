import React, {useContext} from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"; 
import { StoreContext } from '../context/storeContext';

const JobsView = ({id, title, description, company, location, type, time, ownar }) => {
  
  const {deleteJobs} = useContext(StoreContext)
    return (
        <div className='job-view'>
            <h1>
                Title : {title}
            </h1>
            <p>{id}</p>
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
            <div className="jobs-icons">
              <p><FaRegEdit  /> </p>
            <p onClick={() => deleteJobs(id)} > <MdDeleteOutline /> </p>
            </div>
        </div>
    )
}

export default JobsView;