import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../component/loader/Loader";

import BookingModal from "../component/modal/BookingModal";
import ProductCard from "../component/product/ProductCard";
import CategorySection from "../component/sections/category/CategorySection";

export default function SearchProducts() {
  const [bookingInfo, setBookingInfo] = useState(null);
    const location = useLocation()
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["searchproducts"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/search/products?search=${location.state?.searchText}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="conatiner mx-auto px-12 mt-8 pb-12">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5">
          <h1 className="p-4 bg-orange-500 text-xl text-center text-white">
            CATEGORIES
          </h1>
          <CategorySection />
        </div>

        <div className="w-full md:w-4/5 ">
          <h3 className="text-center text-3xl font-bold text-blue-500">
            {products.length > 0 ? "Products" : "No Products Found"}
          </h3>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:pl-24 pt-8">
            {products.length > 0 &&
              products.map((d) => (
                <ProductCard
                  refetch={refetch}
                  productInfo={d}
                  setProductInfo={setBookingInfo}
                  key={d._id}
                />
              ))}
          </div>
        </div>
      </div>

      {bookingInfo && (
        <BookingModal
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
        />
      )}
    </div>
  );
}
