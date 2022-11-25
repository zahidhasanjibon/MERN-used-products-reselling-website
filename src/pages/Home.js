import React from "react";
import BannerSection from "../component/sections/banner/BannerSection";
import HeroSection from "../component/sections/banner/HeroSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex px-8">

      <div className="w-1/5 shadow-lg">
 
        <h1 className="p-4 bg-orange-500 text-xl text-center text-white">SHOP BY CATEGORIES</h1>
     

        <div className="px-6 py-4">
          <ul>
          <li>

            Home
          </li>
          <li>
            
          </li>



          </ul>


        </div>

      </div>

      <div className="w-4/5">
        <BannerSection />
      </div>





    </div>


      <HeroSection />

      




    </div>
    
  );
}
