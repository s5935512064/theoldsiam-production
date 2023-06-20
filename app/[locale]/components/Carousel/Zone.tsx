"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Zone: FC<Props> = (): JSX.Element => {
  // const [isHovering, setIsHovered] = useState(false);
  // const onMouseEnter = () => setIsHovered(true);
  // const onMouseLeave = () => setIsHovered(false);

  // useEffect(() => {
  //   console.log({ isHovering });
  // });

  return (
    <>
      <Swiper
        id="sample-slider"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // effect="coverflow"
        // coverflowEffect={{
        //   rotate: 0,
        //   stretch: 80,
        //   depth: 200,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        // centeredSlides={true}
        // grabCursor={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className="!h-full w-full relative  cursor-grab"
      >
        <SwiperSlide
          id="bussiness_card"
          className="opacity-100 relative overflow-hidden shadow-md"
        >
          <div className="w-full h-full bg-[#fff] loading">
            <div className="image w-full h-full relative ">
              <Image
                fill
                src={"/assets/ZoneSlide/taste-1.webp"}
                alt="gallery1"
                unoptimized
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                className=""
              />
              <div className="bg-gradient-to-t from-black/75 w-full h-1/2 bottom-0 absolute flex flex-col justify-end p-5 py-10">
                <p className="text-white font-semibold text-xl">TASTE</p>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ipsa aliquid.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          id="bussiness_card"
          className="opacity-100 relative overflow-hidden  shadow-md"
        >
          <div className="w-full h-full bg-[#fff] loading">
            <div className="image w-full h-full relative ">
              <Image
                fill
                src={"/assets/ZoneSlide/desserts.webp"}
                alt="gallery2"
                unoptimized
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <div className="bg-gradient-to-t from-black/75 w-full h-1/2 bottom-0  absolute flex flex-col justify-end p-5 py-10">
                <p className="text-white font-semibold text-xl">
                  THAI DESSERTS
                </p>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  ipsa aliquid.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          id="bussiness_card"
          className="opacity-100 relative overflow-hidden  shadow-md"
        >
          <div className="w-full h-full bg-[#fff] loading">
            <div className="image w-full h-full relative ">
              <Image
                fill
                src={"/assets/ZoneSlide/jewelly.webp"}
                alt="gallery3"
                unoptimized
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="bg-gradient-to-t from-black/75 w-full h-1/2 bottom-0 absolute flex flex-col justify-end p-5 py-10">
                <p className="text-white font-semibold text-xl">
                  GOLD & JEWELRY
                </p>
                <p className="text-white text-sm">
                  65 units of the well-know center of jewelers selling precious
                  gemstones, intricately crafted gold ornaments and other
                  jewelry items.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          id="bussiness_card"
          className="opacity-100 relative overflow-hidden  shadow-md"
        >
          <div className="w-full h-full bg-[#fff] loading">
            <div className="image w-full h-full relative ">
              <Image
                fill
                src={"/assets/ZoneSlide/silk.webp"}
                alt="gallery4"
                unoptimized
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="bg-gradient-to-t from-black/75 w-full h-1/2 bottom-0  absolute flex flex-col justify-end p-5 py-10">
                <p className="text-white font-semibold text-xl">SILK & LACE</p>
                <p className="text-white text-sm">
                  Over 150 units This is also where visitors can find shops
                  selling quality silk that carries the Royal Peacock seal of
                  quality for Thai silk
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Zone;
