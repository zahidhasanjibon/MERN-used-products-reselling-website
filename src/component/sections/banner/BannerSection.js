// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import doct3img from "../../../assests/img/download.jpg";

import img2 from "../../../assests/img/images.jpg";
import img1 from "../../../assests/img/new-laptop-sale-promotion-social-facebook-cover-banner_252779-424.webp";


export default function BannerSection() {
  return (
    <section className="mt-6">
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-[510px]"
        spaceBetween={30}
      >
        <SwiperSlide>
          <div className="hero-wrapper" style={{    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
            <div className="flex flex-col gap-4 md:flex-row px-12 md:px-32 items-center">
              <div className=" md:w-1/2">
                <h1 className="text-lg md:text-3xl">
                  High Innovative Technology & Awesome Laptop
                </h1>
                <p className="py-4">
                  Dentists remove tooth decay, fill cavities, and repair
                  fractured teeth. Dentists diagnose and treat problems with
                  patients' teeth, gums, and related parts of the mouth.
                </p>
                <button className="btn-secondary btn">
                  See Products
                </button>
              </div>
              <div className=" md:w-1/2">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-wrapper" style={{    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
            <div className="flex gap-4 flex-col md:flex-row px-12 md:px-32 items-center">
              <div className="w-1/2">
                <h1 className="text-lg md:text-3xl ">
                  High Innovative Technology & Awesome Laptop
                </h1>
                <p className="py-4">
                  Dentists remove tooth decay, fill cavities, and repair
                  fractured teeth. Dentists diagnose and treat problems with
                  patients' teeth, gums, and related parts of the mouth.
                </p>
                <button className="btn btn-secondary">
                  See Products
                </button>
              </div>
              <div className="w-1/2">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-wrapper" style={{    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
            <div className="flex flex-col gap-4 md:flex-row px-12 md:px-32 items-center">
              <div className="w-1/2">
                <h1 className="text-lg md:text-3xl ">
                  High Innovative Technology & Awesome Laptop
                </h1>
                <p className="py-4">
                  Dentists remove tooth decay, fill cavities, and repair
                  fractured teeth. Dentists diagnose and treat problems with
                  patients' teeth, gums, and related parts of the mouth.
                </p>
                <button className="btn btn-secondary">
                  See Products{" "}
                </button>
              </div>
              <div className="w-1/2">
                <img src={doct3img} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>

  </section>
  )
}
