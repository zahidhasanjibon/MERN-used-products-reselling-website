
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import { useContext } from "react";
import toast from "react-hot-toast";
import { BsCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { authContext } from "../../authentication/AuthContext";
export default function ProductCard({ productInfo, setProductInfo, refetch }) {
  const { user } = useContext(authContext);

  const {
    _id,
    imgUrl,
    originalPrice,
    timeWhenPost,
    sellerName,
    name,
    report,
    sellerVerified,
  } = productInfo || {};

  const handleReport = (productId) => {
    fetch(`${process.env.REACT_APP_API_URL}/product/report/${productId}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("product report successfully");
        refetch();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="">
      <div class="flex flex-col items-center justify-center ">
        <div class="w-96">
          <div class="max-w-md w-full shadow-lg rounded-xl p-4">
            <div class="flex flex-col ">
              <div class="">
                <div class="relative h-62 w-full mb-3">
                  <div class="absolute flex flex-col top-0 right-0 p-3">
                    <button class="transition ease-in duration-300 bg-blue-300  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <img
                    src={imgUrl}
                    alt="Just a flower"
                    class=" w-full h-[210px]  object-cover  rounded-2xl"
                  />
                </div>
                <div class="flex-auto justify-evenly">
                  <div class="flex flex-wrap ">
                    <div class="w-full flex-none text-sm flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-red-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="text-gray-400 whitespace-nowrap mr-3">
                        {timeWhenPost}
                      </span>
                      <span class="mr-2 text-gray-400">Bangladesh</span>
                    </div>
                    <div class="flex items-center w-full justify-between min-w-0 py-4">
                      <h2 class="text-2xl mr-auto cursor-pointer text-gray-700 hover:text-purple-500 truncate ">
                        {name}
                      </h2>
                    
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
 <div class="text-2xl text-gray-700 font-semibold mt-1">
                    $ {originalPrice}
                  </div>
                  <div className="flex items-center"> 
                   <span className="w-1/2  font-bold text-gray-700">{sellerName}</span>
  <span className="ml-4"> {sellerVerified && <BsCheck style={{backgroundColor:"gray",borderRadius:"40%"}} color="white" size={22} /> }</span>
                  </div>

                  </div>
                 
               
              
                  <div class="flex space-x-2 text-sm font-medium justify-between items-center mt-3">
                    <div className="">
                      <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gray-600 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                        {user?.uid ? (
                          <label
                            htmlFor="booking-modal"
                            className=""
                            onClick={() => setProductInfo(productInfo)}
                          >
                            Book Now
                          </label>
                        ) : (
                          <NavLink
                            to="/login"
                            className="btn btn-primary btn-sm"
                          >
                            Log in to book
                          </NavLink>
                        )}
                      </button>
               
                    </div>
                    <div className="">
                      {!report && (
                        <button
                          onClick={() => handleReport(_id)}
                          className="btn border-gray-400 btn-outline btn-xs "
                        >
                          report
                        </button>
                      )}
                      {report && (
                        <button className="btn bg-gray-300 border-0 text-black btn-xs">
                          reported
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-11/12 service shadow-lg rounded py-4 flex " key={_id}>
// <div className=" w-1/2 flex items-center">
//   <img  src={imgUrl} alt="service" className="cursor-pointer w-4/5 h-4/5  mx-auto drop-shadow-lg" />
// </div>
// <div className="w-1/2 py-8">
//   <div>
//   <h2 className="text-2xl font-bold">{name}</h2>
//   <p className="text-orange-500"> R$ <span className="text-orange-500 text-4xl">{originalPrice}</span></p>
// </div>
// <div className="star-wrapper py-3 text-start">
//   <p className="font-bold">resale Price : {resalePrice} $</p>
//   <p className="py-2 font-bold">original price : {originalPrice} $</p>
//   <p className="font-bold">year of use : {yearOfUse}</p>
//   <p className="py-2 font-bold">post : {timeWhenPost}</p>
//   <div className="flex items-center justify-center">
//   <span className="pr-2 w-1/2 pb-3 font-bold">seller : {sellerName}</span>
//   <span className="w-1/2 pb-3"> {sellerVerified && <BsCheck style={{backgroundColor:"blue",borderRadius:"40%"}} color="white" size={22} /> }</span>
//   </div>
//   {!report &&  <button onClick={() => handleReport(_id)} className="btn btn-primary btn-outline btn-xs ">report</button>}
//   {report && <button className="btn btn-primary btn-xs">reported</button>}
// </div>
// <div className="mt-2">
// {user?.uid ? <label htmlFor="booking-modal" className="btn btn-primary btn-sm" onClick={() => setProductInfo(productInfo)} >Book Now</label> : (
// <NavLink to="/login" className="btn btn-primary btn-sm">Log in to book</NavLink>
// )}
// </div>
// </div>

// </div>
