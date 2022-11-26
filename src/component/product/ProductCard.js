

export default function ProductCard({productInfo,setProductInfo}) {

        const {_id,imgUrl,location,resalePrice,originalPrice,yearOfUse,timeWhenPost,sellerName,name} = productInfo || {}

  return (
    <div className="service text-center shadow-lg" key={_id}>
    <div className="inline-block">
      <img src={imgUrl} alt="service" className="cursor-pointer" />
    </div>
    <div>
      <h2 className="text-2xl">{name}</h2>
      <p>location : {location}</p>
    </div>

    <div className="star-wrapper py-3">
      <p>resale Price : {resalePrice} $</p>
      <p>original price : {originalPrice} $</p>
      <p>year of use : {yearOfUse}</p>
      <p>post : {timeWhenPost}</p>
      <p>seller : {sellerName}</p>
    </div>

    <p className="text-blue-600 font-semibold text-2xl">"ffdfsd"</p>
    <div className="mt-2">
    <label htmlFor="booking-modal" className="btn btn-primary btn-sm" onClick={() => setProductInfo(productInfo)} >Book Now</label>
    </div>
  </div>
  )
}
