"use client";

import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const HomeHero: FC<Props> = (): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        speed={1500}
        pagination={{
          clickable: false,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-screen w-full relative"
      >
        <SwiperSlide className="h-screen w-full relative">
          <Image
            fill
            unoptimized
            src={"/assets/slide/slide_01.webp"}
            alt="background"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeHero;
