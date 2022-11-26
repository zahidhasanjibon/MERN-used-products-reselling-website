import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import BookingModal from "../component/modal/BookingModal";
import ProductCard from "../component/product/ProductCard";

export default function CategoryDetails() {

  const[bookingInfo,setBookingInfo] = useState(null)

  const { name } = useParams();



      const {
        data: products = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["categoriesproducts",name],
        queryFn: async () => {
          const res = await fetch(
            `${process.env.REACT_APP_API_URL}/products/${name}`
          );
          const data = await res.json();
          return data;
        },
      });

      if (isLoading) {
        return (
          <div className="h-[70vh] text-center">
            <SpinnerCircular color="blue" style={{ display: "inline" }} />
          </div>
        );
      }
    
  

  return (
    <div className="conatiner mx-auto px-12">
      <h3>Products of Sports Car</h3>

      <div className="flex">
        <div className="w-1/5">
          <h3>category</h3>
        </div>

        <div className="w-4/5 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {
            products.length > 0 && products.map((d) => (
             <ProductCard refetch={refetch} productInfo={d} setProductInfo ={setBookingInfo}  key={d._id}/>
            ))
        }
         
      

        </div>
      </div>

            {bookingInfo && <BookingModal bookingInfo = {bookingInfo} setBookingInfo={setBookingInfo} />}


    </div>
  );
}
