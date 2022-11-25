import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assests/img/chair.png";
import BookingModal from "../component/modal/BookingModal";

export default function CategoryDetails() {
  const [products, setProducts] = useState([]);

  const[bookingInfo,setBookingInfo] = useState(null)

  const { name } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${name}`)
      .then((res) => res.json())
      .then((d) => {
        setProducts(d);
      })
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="conatiner mx-auto px-12">
      <h3>Products of Sports Car</h3>

      <div className="flex">
        <div className="w-1/5">
          <h3>category</h3>
        </div>

        <div className="w-4/5 grid gap-12 grid-cols-4">

        {
            products.length > 0 && products.map((d) => (
                <div className="service text-center shadow-lg" key={d._id}>
                <div className="inline-block">
                  <img src={logo} alt="service" className="cursor-pointer" />
                </div>
                <div>
                  <h2 className="text-2xl">Sport car</h2>
                  <p>location</p>
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
                <label htmlFor="booking-modal" className="btn btn-primary btn-sm" onClick={() => setBookingInfo(d)} >Book Now</label>
                </div>
              </div>
            ))
        }
         
      

        </div>
      </div>

            {bookingInfo && <BookingModal bookingInfo = {bookingInfo} setBookingInfo={setBookingInfo} />}


    </div>
  );
}
