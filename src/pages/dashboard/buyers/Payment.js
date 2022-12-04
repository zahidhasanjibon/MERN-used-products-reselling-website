import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../../authentication/AuthContext';
import Loader from "../../../component/loader/Loader";
import CheckoutForm from "./CheckoutForm";

export default function Payment() {

    const {logOut} = useContext(authContext)
        const {id} = useParams()
        const navigate = useNavigate()
    const {
        data: bookingInfo = {},
        isLoading,
      } = useQuery({
        queryKey: ["paymentinfo",id],
        queryFn: async () => {
          const jwttoken = localStorage.getItem("jwttoken");
          const res = await fetch(`${process.env.REACT_APP_API_URL}/booking/${id}`, {
            headers: {
              authorization: `bearer ${jwttoken}`,
            },
          });
          if (res.status === 401 || res.status === 403) {
            toast.error("unauthorized access");
            logOut()
              .then(() => {
                localStorage.removeItem("jwttoken");
                navigate("/login");
              })
              .catch((err) => {
                toast.error(err);
              });
          }
          const data = await res.json();
          return data;
        },
      });
    


      
  if (isLoading) {
    return (
    <Loader />
    );
  }

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PK)

  return (
    <div>
            <h4 className='text-3xl'>Payment for {bookingInfo.productName}</h4>
            <h3 className='text-xl'>please pay <span className='text-2xl text-blue-500'>{bookingInfo.productPrice} $</span></h3>

            <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookingInfo={bookingInfo}/>
        </Elements>
      </div>

    </div>
  )
}
