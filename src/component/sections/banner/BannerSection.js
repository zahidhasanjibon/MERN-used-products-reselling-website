// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import doct3img from "../../../assests/img/11111.jpg";
import { default as doct4Img, default as doctImg } from "../../../assests/img/3333.jpg";


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
          <div className="hero-wrapper">
            <div className="flex flex-col gap-4 md:flex-row px-12 md:px-32 items-center">
              <div className=" md:w-1/2">
                <h1 className="text-lg md:text-3xl">
                  High Innovative Technology & Professional Dentists
                </h1>
                <p className="py-4">
                  Dentists remove tooth decay, fill cavities, and repair
                  fractured teeth. Dentists diagnose and treat problems with
                  patients' teeth, gums, and related parts of the mouth.
                </p>
                <button className="btn-grad">
                  Make an appoinment
                </button>
              </div>
              <div className=" md:w-1/2">
                <img src={doctImg} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-wrapper">
            <div className="flex gap-4 flex-col md:flex-row px-12 md:px-32 items-center">
              <div className="w-1/2">
                <h1 className="text-lg md:text-3xl ">
                  High Innovative Technology & Professional Dentists
                </h1>
                <p className="py-4">
                  Dentists remove tooth decay, fill cavities, and repair
                  fractured teeth. Dentists diagnose and treat problems with
                  patients' teeth, gums, and related parts of the mouth.
                </p>
                <button className="btn btn-secondary">
                  Make an appoinment{" "}
                </button>
              </div>
              <div className="w-1/2">
                <img src={doct4Img} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-wrapper">
            <div className="flex flex-col gap-4 md:flex-row px-12 md:px-32 items-center">
              <div className="w-1/2">
                <h1 className="text-lg md:text-3xl ">
                  High Innovative Technology & Professional Dentists
                </h1>
                <p className="py-4">
                  Dentists remove tooth decay, fill cavities, and repair
                  fractured teeth. Dentists diagnose and treat problems with
                  patients' teeth, gums, and related parts of the mouth.
                </p>
                <button className="btn btn-secondary">
                  Make an appoinment{" "}
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
