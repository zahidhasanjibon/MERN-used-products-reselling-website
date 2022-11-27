import axios from "axios";
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function CategorySection() {

    const [allCategory,setAllcategory] = useState([])
 
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/productcategory`)
        .then( (res) => {
            
                setAllcategory(res.data)
        })
        .catch( (error) => {
          console.log(error);
        })

    },[])
     

  return (

         <div className="px-6 py-4">
          <ul>

            {allCategory.length > 0 && allCategory.map((d,i) => (
                <li className='my-4 text-xl text-blue-500 border-b-2 pb-4' key={i}>
                    <NavLink to={`/category/${d._id}`} className={({ isActive }) =>
              isActive ? "text-blue-800 font-bold" : undefined
            } >{d.category}</NavLink>
                </li>
            ))}



          </ul>


        </div>
  )
}
