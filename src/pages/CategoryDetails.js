import React from "react";
import logo from "../assests/img/chair.png";

export default function CategoryDetails() {
  return (
    <div className="conatiner mx-auto px-12">
      <h3>Products of Sports Car</h3>

      <div className="flex">
        <div className="w-1/5">
          <h3>category</h3>
        </div>

        <div className="w-4/5 grid gap-12 grid-cols-4">

        <div className="service text-center shadow-lg">
    <div className="inline-block">
    
      <img src={logo} alt="service" className='cursor-pointer' />
      
    </div>
    <div>
      <h2 className="text-2xl">Sport car</h2>
      <p>
      location
      </p>
    </div>

   <div className="star-wrapper py-3">
       <p>previous price</p>
       <p>recent price</p>
       <p>year of use</p>
       <p>posted time</p>
       <p>seller name</p>
   </div>
   
    <p className="text-blue-600 font-semibold text-2xl">"ffdfsd"</p>
    <div className="mt-2">

     <p>
        book now
     </p>
    </div>
  </div>

        </div>
      </div>
    </div>
  );
}
