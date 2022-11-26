import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../component/modal/BookingModal";
import ProductCard from "../component/product/ProductCard";

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
             <ProductCard productInfo={d} setProductInfo ={setBookingInfo}  key={d._id}/>
            ))
        }
         
      

        </div>
      </div>

            {bookingInfo && <BookingModal bookingInfo = {bookingInfo} setBookingInfo={setBookingInfo} />}


    </div>
  );
}
