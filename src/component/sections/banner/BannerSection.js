// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import doct3img from "../../../assests/img/download.jpg";
import doct3img from "../../../assests/img/slide-01.jpg";

import img2 from "../../../assests/img/slide-02.jpg";
// import img1 from "../../../assests/img/new-laptop-sale-promotion-social-facebook-cover-banner_252779-424.webp";

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
          className="h-[200px] md:h-[510px]"
          spaceBetween={30}
        >
          <SwiperSlide>
            <div
              className="hero-wrapper md:h-[400px]"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className=" flex-col gap-4 md:flex-row  items-center">
                <div className="w-1/2 absolute top-1/2 transform  -translate-y-32 md:-translate-y-2/3 left-16 md:left-20 lg:left-44">
                  <h1 className="text-lg md:text-3xl text-red-500">
                    New Arrival
                  </h1>
                  <h5 className="py-4 text-xl md:text-3xl lg:text-5xl">
                    Laptop for Winter <br></br> 2022
                  </h5>
                  <button className="btn btn-sm lg:btn-lg btn-secondary btn-outline">
                    See Products{" "}
                  </button>
                </div>
                <div className="w-full">
                  <img src={doct3img} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-wrapper"
              style={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className=" flex-col gap-4 md:flex-row   items-center">
                <div className="w-1/2 absolute top-1/2 transform  -translate-y-32 md:-translate-y-2/3 left-16 md:left-20 lg:left-44">
                  <h1 className="text-lg md:text-3xl text-red-500">
                    New Arrival
                  </h1>
                  <h5 className="py-4 text-xl md:text-3xl lg:text-5xl">
                    Laptop for Winter <br></br> 2022
                  </h5>
                  <button className="btn btn-sm lg:btn-lg btn-secondary btn-outline">
                    See Products{" "}
                  </button>
                </div>
                <div className="w-full">
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </section>
  );
}
