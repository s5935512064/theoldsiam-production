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

interface Props {
  lang: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    id: "0",
    title: "Rattanakosin Island",
    title_th: "ใจกลางเกาะรัตนโกสินทร์",
    detail_th:
      "อยู่ท่ามกลางหน่วยงานราชการระดับประเทศ, แหล่งธุรกิจการค้าแบบดั้งเดิม รวมถีงแหล่งท่องเที่ยวทางวัฒนธรรมที่มีประวัติศาสตร์อันยาวนาน",
    detail:
      "The Center of government administration, traditional business development and an historical attractions.",
    cover_image: "/assets/rattanakosin.webp",
  },

  {
    id: "2",
    title: "Reaching by MRT",
    title_th: "เดินทางสะดวกด้วย MRT",
    detail_th: "อยู่ใกล้กับสถานี MRT (สถานีสามยอด)",
    detail: "Reachable with a few steps from Sam Yot Station.",
    cover_image: "/assets/samyot.jpg",
  },
  {
    id: "1",
    title: "Tourist Destination",
    title_th: "จุดหมายปลายทางของนักท่องเที่ยว",
    detail_th:
      "ครอบคลุมถึง 4 เขตที่มีความสำคัญทางประวัติศาสตร์: เขตพระนคร เขตป้อมปราบศัตรูพ่าย, เขตสัมพันธวงศ์ และเขตดุสิต",
    detail:
      "It covers four districts: Phra Nakhon, Pom Prap Sattruphai, Samphanthawong and Dusit.",
    cover_image: "/assets/tourist.jpg",
  },
];

const KeyFact: FC<Props> = ({ lang }): JSX.Element => {
  return (
    <>
      <Swiper
        id="sample-slider"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1500}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="!h-full w-full relative  cursor-grab"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="opacity-100 relative overflow-hidden shadow-md"
          >
            <div className="w-full h-full bg-[#fff] loading">
              <div className="image w-full h-full relative ">
                <Image
                  fill
                  src={item.cover_image}
                  alt={item.title}
                  unoptimized
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                <div
                  className={
                    "bg-gradient-to-t from-black/75   w-full h-1/3 bottom-0 absolute flex flex-col justify-end p-5  transition-all duration-200"
                  }
                >
                  <p className="text-white font-semibold text-lg md:text-xl uppercase">
                    {lang == "en" ? item.title : item.title_th}
                  </p>

                  <p className="text-white text-sm">
                    {lang == "en" ? item.detail : item.detail_th}
                  </p>
                </div>

                {/* <div
                  id="Hover"
                  className="bg-gradient-to-t from-black/75 w-full h-1/2 bottom-0 absolute flex flex-col justify-end p-5 py-7"
                >
                  <p className="text-white font-semibold text-xl uppercase">
                    {item.title}
                  </p>
                  <p className="text-white text-sm">{item.detail}</p>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default KeyFact;
