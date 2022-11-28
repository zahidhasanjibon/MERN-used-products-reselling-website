/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { BsCheck } from "react-icons/bs";

export default function ProductCard({productInfo,setProductInfo,refetch}) {

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
      <img  src={imgUrl} alt="service" className="cursor-pointer w-4/5 h-4/5  mx-auto" />
    </div>
    <div className="w-1/2">
      <div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-orange-500"> R$ <span className="text-orange-500 text-4xl">{originalPrice}</span></p>
    </div>
 <div className="star-wrapper py-3 text-start">
      <p className="font-bold">resale Price : {resalePrice} $</p>
      <p className="font-bold py-2">original price : {originalPrice} $</p>
      <p className="font-bold">year of use : {yearOfUse}</p>
      <p className="font-bold py-2">post : {timeWhenPost}</p>
      <div className="flex items-center justify-center">
      <span className="pr-2 w-1/2 font-bold">seller : {sellerName}</span> 
      <span className="w-1/2"> {sellerVerified && <BsCheck style={{backgroundColor:"blue",borderRadius:"40%"}} color="white" size={22} /> }</span>
      </div>
      {!report &&  <button onClick={() => handleReport(_id)} className="btn btn-primary btn-xs">report</button>}
      {report && <button className="btn btn-primary btn-xs">reported</button>}
    </div>
  <div className="mt-2">
    <label htmlFor="booking-modal" className="btn btn-primary btn-sm" onClick={() => setProductInfo(productInfo)} >Book Now</label>
    </div>
    </div>
    

   

  
  </div>
  )
}
