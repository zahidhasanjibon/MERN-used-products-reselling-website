import React, { useEffect, useState } from 'react'
import BookingModal from '../../modal/BookingModal'
import ProductCard from '../../product/ProductCard'
export default function AdveriseSection() {

    const[bookingInfo,setBookingInfo] = useState(null)
    const[advertiseProducts,setAddvertiseProducts] = useState([])

    useEffect(() => {
      const jwttoken = localStorage.getItem("jwttoken");
        fetch(`${process.env.REACT_APP_API_URL}/advertise/products`, {
          headers: {
            authorization: `bearer ${jwttoken}`,
          },
        })
          .then((res) => res.json())
          .then((d) => {
            setAddvertiseProducts(d);
          })
          .catch((err) => console.log(err));
      },[]);
        if(advertiseProducts.length === 0) return <></>


  return (  
    <div>
      <h5 className='text-center text-4xl mt-8'>Advertise Products</h5>
 <div className='w-full lg:w-4/5 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto py-12'>

                    {
            advertiseProducts.length > 0 && advertiseProducts.map((d) => (
           <ProductCard productInfo={d} setProductInfo={setBookingInfo} key={d._id} />
            ))
        }

              {bookingInfo && <BookingModal bookingInfo = {bookingInfo} setBookingInfo={setBookingInfo} />}

            </div>

    </div>
           
  )
}
