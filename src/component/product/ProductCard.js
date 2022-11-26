

export default function ProductCard({productInfo,setProductInfo,refetch}) {

        const {_id,imgUrl,location,resalePrice,originalPrice,yearOfUse,timeWhenPost,sellerName,name,report} = productInfo || {}


  const handleReport = (productId) => {

      fetch(`${process.env.REACT_APP_API_URL}/product/report/${productId}`,{
        method:"PUT"
      })    
      .then(res => res.json())
      .then(d => {
        console.log(d);
        refetch()
      })
      .catch((err => console.log(err)))

  }


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
      {!report && <button onClick={() => handleReport(_id)} className="btn btn-primary btn-xs">report</button>}
      {report && <button className="btn btn-primary btn-xs">reported</button>}
    </div>

    <div className="mt-2">
    <label htmlFor="booking-modal" className="btn btn-primary btn-sm" onClick={() => setProductInfo(productInfo)} >Book Now</label>
    </div>
  </div>
  )
}
