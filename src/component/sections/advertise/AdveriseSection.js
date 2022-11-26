import React, { useEffect, useState } from 'react'
import BookingModal from '../../modal/BookingModal'
import ProductCard from '../../product/ProductCard'
export default function AdveriseSection() {

    const[bookingInfo,setBookingInfo] = useState(null)
    const[advertiseProducts,setAddvertiseProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/advertise/products`)
          .then((res) => res.json())
          .then((d) => {
            setAddvertiseProducts(d);
          })
          .catch((err) => console.log(err));
      },[]);
        console.log(advertiseProducts);

        if(advertiseProducts.length === 0) return <></>


  return (
            <div className='w-4/5 grid gap-12 grid-cols-4 mx-auto py-12'>
                  {
            advertiseProducts.length > 0 && advertiseProducts.map((d) => (
           <ProductCard productInfo={d} setProductInfo={setBookingInfo} key={d._id} />
            ))
        }

              {bookingInfo && <BookingModal bookingInfo = {bookingInfo} setBookingInfo={setBookingInfo} />}

            </div>
  )
}
