
import { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../authentication/AuthContext";

export default function BookingModal({ bookingInfo,setBookingInfo}) {

  const { user, } = useContext(authContext);
  const {name,originalPrice,imgUrl,_id} = bookingInfo || {}

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerPhone = form.phone.value;
    const buyerMeetingLocation = form.location.value;


    const formData = {
      productId:_id,
      productName: name,
      productPrice:originalPrice,
      productImg:imgUrl,
      buyerMeetingLocation,
        buyerName:user.displayName,buyerEmail:user.email,
        buyerPhone,
        status:"unpaid" 
    };

    fetch(`${process.env.REACT_APP_API_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        form.reset();
        setBookingInfo(null);
        if (result?.acknowledged) {
          toast.success(`${name} booking successfully`);
        } else {
          toast.error(result.message)
        }
      })
      .catch((err) =>{
        console.log(err);
        toast.error(" booking failed")
      });
  };
      

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <form onSubmit={handleSubmit}>
          
            <input
              name="name"
              value={`user Name  : ${user?.displayName}`}
              disabled
              type="text"
              required
              placeholder="Full Name"
              className="input input-bordered input-info w-full my-2"
            />
            <input
              name="email"
              value={`user email  : ${user?.email}`}
              type="email"
              disabled
              required
              placeholder="Email"
              className="input input-bordered input-info w-full my-2"
            />
            <input
              name="itemName"
              value={`product name  : ${name}`}
              type="text"
              disabled
              required
           
              className="input input-bordered input-info w-full my-2"
            />
            <input
              name="price"
              value={`Price   : ${originalPrice}`}
              type="text"
              disabled
              required
          
              className="input input-bordered input-info w-full my-2"
            />
            <input
              name="phone"
              type="number"
              required
              placeholder="Phone No"
              className="input input-bordered input-info w-full my-2"
            />
            <input
              name="location"
              type="text"
              required
              placeholder="meeting loction"
              className="input input-bordered input-info w-full my-2"
            />
            <input
              type="submit"
              className="bg-gray-900 text-white cursor-pointer input input-bordered input-info w-full my-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
