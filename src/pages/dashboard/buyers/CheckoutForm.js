
    import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutForm({bookingInfo}) {



    const [stripeError,setStripeError] = useState("")
    const [clientSecret,setClientSecret] = useState("")
    const [cardProcessing,setCardProcessing] = useState(false)

  
        const price = bookingInfo?.productPrice
        const {buyerName,buyerEmail,productId,_id} = bookingInfo || {}
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
  
      if (error) {
        setStripeError(error.message);
        return
      } else {
        setStripeError("");
      }
        setCardProcessing(true)

        const {paymentIntent, error:confirmSuccessError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: buyerName,
                  email:buyerEmail
                },
              },
            },
          );
          if(confirmSuccessError){
            setStripeError(confirmSuccessError.message)
            return 
          }
          console.log(paymentIntent);
         
          if(paymentIntent.status === 'succeeded'){
            toast.success("payment successfull")

            const orderInfo = {
                paymentId : paymentIntent.id,
                productId:productId,
                bookingId:_id
            }

            saveOrderToDb(orderInfo)
                // fetch for update
    
          }
          setCardProcessing(false)
    };


                function saveOrderToDb (orderInfo) {

                    fetch(`${process.env.REACT_APP_API_URL}/orders`,{
                        method:"POST",
                        headers:{
                            "content-type":"application/json",
                        },
                        body:JSON.stringify(orderInfo)
                    })
                    .then(res => res.json())
                    .then(d => {
                        console.log(d);
                    })



                }


  

      useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("jwttoken")}` },
          body: JSON.stringify({price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);




    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-xs" type="submit" disabled={!stripe || cardProcessing || !clientSecret}>
          Pay
        </button>
        {stripeError && <p className="text-red-500 mt-4">{stripeError}</p>}
      </form>
    );

}
