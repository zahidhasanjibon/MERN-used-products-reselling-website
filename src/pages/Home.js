/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import useTitle from "../component/hook/useTitle";
import AdveriseSection from "../component/sections/advertise/AdveriseSection";
import BannerHeader from "../component/sections/banner/BannerHeader";
import HeroSection from "../component/sections/banner/HeroSection";
import CategorySection from "../component/sections/category/CategorySection";
import SearchSection from "../component/sections/search/SearchSection";

export default function Home() {


    useTitle("home")

  return (
    <div className="container mx-auto">
        
      <div className="flex flex-col md:flex-row px-8 mt-2">
        <div className="w-full md:w-1/5 shadow-lg">
        <h1 className="p-4 bg-orange-500 text-sm md:text-lg lg:text-xl text-center text-white">
          CATEGORIES
          </h1>
          <CategorySection />
        </div>

          <SearchSection />

      </div>
      

      <HeroSection />

      <BannerHeader />
  

      <AdveriseSection />





    </div>
  );
}
