/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import useTitle from "../component/hook/useTitle";
import AdveriseSection from "../component/sections/advertise/AdveriseSection";
import BannerHeader from "../component/sections/banner/BannerHeader";
import BannerSection from "../component/sections/banner/BannerSection";
import HeroSection from "../component/sections/banner/HeroSection";
import CategorySection from "../component/sections/category/CategorySection";

export default function Home() {


    useTitle("home")

  return (
    <div className="container mx-auto">
        
      <div className="flex flex-col md:flex-row px-8 mt-2">
        <div className="w-full md:w-1/5 shadow-lg">
        <h1 className="p-4 bg-orange-500 text-xl text-center text-white">
          CATEGORIES
          </h1>
          <CategorySection />
        </div>

        <div className="w-full md:w-4/5">
        <div className="px-16 flex items-center">
          <div className="w-10/12">
      <input type="text" placeholder="Search Products" className="border-2 border-r-0 border-orange-400 px-2 py-3 w-4/5" />
      <button className="p-[14px] text-white bg-orange-600">SEARCH</button>
    
          </div>
      <div className="w-1/5">
          <div className="flex items-center">
            <div className="w-16 rounded-full p-4 bg-slate-200"><AiOutlinePhone color="orange" size={26} /></div>
            <div className="ml-4">
              <h6 className="font-bold text-xl">+8801478666</h6>
              <p className="text-gray-400 pl-2">Support 7 /24</p>
            </div>
          </div>
      </div>
      </div>
          <BannerSection />
        </div>
      </div>
      

      <HeroSection />

      <BannerHeader />
  

      <AdveriseSection />





    </div>
  );
}
