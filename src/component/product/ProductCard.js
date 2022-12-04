/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast from "react-hot-toast";
import { BsCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { authContext } from "../../authentication/AuthContext";

export default function ProductCard({productInfo,setProductInfo,refetch}) {

  const {user} = useContext(authContext)

  const {_id,imgUrl,location,resalePrice,originalPrice,yearOfUse,timeWhenPost,sellerName,name,report,sellerVerified} = productInfo || {}


  const handleReport = (productId) => {

      fetch(`${process.env.REACT_APP_API_URL}/product/report/${productId}`,{
        method:"PUT"
      })    
      .then(res => res.json())
      .then(d => {
        toast.success("product report successfully")
        refetch()
      })
      .catch((err => console.log(err)))

  }


  return (
    <div className="w-11/12 service shadow-lg rounded py-4 flex " key={_id}>
    <div className=" w-1/2 flex items-center">
      <img  src={imgUrl} alt="service" className="cursor-pointer w-4/5 h-4/5  mx-auto drop-shadow-lg" />
    </div>
    <div className="w-1/2 py-8">
      <div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-orange-500"> R$ <span className="text-orange-500 text-4xl">{originalPrice}</span></p>
    </div>
 <div className="star-wrapper py-3 text-start">
      <p className="font-bold">resale Price : {resalePrice} $</p>
      <p className="py-2 font-bold">original price : {originalPrice} $</p>
      <p className="font-bold">year of use : {yearOfUse}</p>
      <p className="py-2 font-bold">post : {timeWhenPost}</p>
      <div className="flex items-center justify-center">
      <span className="pr-2 w-1/2 pb-3 font-bold">seller : {sellerName}</span> 
      <span className="w-1/2 pb-3"> {sellerVerified && <BsCheck style={{backgroundColor:"blue",borderRadius:"40%"}} color="white" size={22} /> }</span>
      </div>
      {!report &&  <button onClick={() => handleReport(_id)} className="btn btn-primary btn-outline btn-xs ">report</button>}
      {report && <button className="btn btn-primary btn-xs">reported</button>}
    </div>
  <div className="mt-2">
   {user?.uid ? <label htmlFor="booking-modal" className="btn btn-primary btn-sm" onClick={() => setProductInfo(productInfo)} >Book Now</label> : (
    <NavLink to="/login" className="btn btn-primary btn-sm">Log in to book</NavLink>
   )}
    </div>
    </div>
    

   

  
  </div>
  )
}
