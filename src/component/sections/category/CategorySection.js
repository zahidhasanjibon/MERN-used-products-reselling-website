import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { NavLink } from "react-router-dom";
import { default as e2, default as e6 } from "../../../assests/img/cat1.png";
import e4 from "../../../assests/img/cat3.png";
import e5 from "../../../assests/img/cat4.png";
import e3 from "../../../assests/img/cat6.png";
import e1 from "../../../assests/img/cat7.png";


export default function CategorySection() {
  const [allCategory, setAllcategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const imgArr = [e1, e2, e3, e4, e5,e6];

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_URL}/productcategory`)
      .then((res) => {
        const data = res.data;
        const updatedCategory = data.map((el, i) => {
          return { ...el, img: imgArr[i] };
        });

        setAllcategory(updatedCategory);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if(loading){
    return <div style={{padding:"15px"}}><Skeleton count={5} style={{marginBottom:"30px"}} /></div>
 
  }

  return (
    <div className="px-2 py-4">
      <ul>
        {allCategory.length > 0 &&
          allCategory.map((d, i) => (
            <li
              className="flex items-center justify-around my-4 pb-2 text-sm lg:text-lg hover:font-bold hover:text-blue-800 text-orange-800 border-b-2"
              key={i}
            >
              <NavLink
                to={`/category/${d._id}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-bold" : undefined
                }
              >
                {d.category}
              </NavLink>
              <div className="avatar">
                <div className="w-12 rounded">
                  <img className="w-18 h-8 rounded-full" src={d.img} alt="" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
