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

const slide_image_hero = [
  { id: 0, src: "/assets/slide/slide_01.webp", alt: "bg_01" },
  { id: 1, src: "/assets/slide/slide_02.webp", alt: "bg_02" },
  { id: 2, src: "/assets/slide/slide_03.webp", alt: "bg_03" },
];

const HomeHero: FC<Props> = (): JSX.Element => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect="fade"
        spaceBetween={0}
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
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full relative"
      >
        {slide_image_hero.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-full relative">
            <Image
              fill
              priority={true}
              unoptimized
              src={item.src}
              alt={item.alt}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeHero;
