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
    title: "Thai Taste",
    title_th: "รสชาติแบบไทยๆ",
    detail_th:
      "แหล่งรวมอาหารไทย สัมผัสรสชาติแบบไทยแท้ หลากหลายเมนู เตรียมเอาไว้ให้ลูกค้าทุกท่านมาลิ้มลอง ",
    detail:
      "Experience Thai culture through authentic Thai food, a hub for the best local Thai food dishes and also where you can find them.",
    cover_image: "/assets/ZoneSlide/taste-1.webp",
  },

  {
    id: "1",
    title: "Thai Desserts",
    title_th: "ขนมไทยพื้นบ้าน",
    detail_th:
      "แหล่งรวมร้านขนมไทยสุดอร่อย ความพิเศษของขนมไทยที่นี่ คือการเลือกใช้วัตถุดิบที่หาได้จากท้องถิ่นคุณภาพดี คัดสรรเองกับมือ มาค่อย ๆ พิถีพิถันรังสรรค์ให้กลายเป็นเมนูขนมไทยอร่อยเลื่องชื่อ พร้อมให้คุณเลือกชิมลิ้มลอง",
    detail:
      "A source of delicious Thai desserts. The special feature of Thai desserts here is the selection of raw materials, which are made from local high-quality raw materials. A delicious Thai dessert menu was chosen and gradually created by myself. Have your choice of flavors ready.",
    cover_image: "/assets/ZoneSlide/desserts.webp",
  },

  {
    id: "2",
    title: "Diamon Jewelry & Gold",
    title_th: "ร้านเพชร จิวเวลรี่ และทองคำ",
    detail_th:
      "เรารวบรวมร้านจัดจำหน่ายเครื่องประดับเพชร พลอย จิวเวลรี่ และทองรูปพรรณ ที่ได้รับการรับรองคุณภาพ รวมถึงร้านจัดหน่ายเครื่องประดับอื่นๆ ที่มีชื่อเสียงและเป็นที่รู้จักกว่า 65 ร้านค้า ",
    detail:
      "65 units of the well-know center of jewelers selling precious gemstones, intricately crafted gold ornaments and other jewelry items.",
    cover_image: "/assets/ZoneSlide/jewelly.webp",
  },

  {
    id: "3",
    title: "Silk & Lace",
    title_th: "ผ้าไหมและผ้าลูกไม้",
    detail_th:
      "มากกว่า 150 ร้านค้า ที่เราได้รวบรวมร้านจัดจำหน่ายผ้าไหมและชุดผ้าไหมสำเร็จรูปที่มาจากทั่วทุกภูมิภาคของประเทศ รวมถึงร้านผ้าไหมที่ได้รับมาตรฐานผลิตภัณฑ์ผ้าไหมไทยตรานกยูงพระราชทาน ซึ่งเป็นเครื่องหมายรับรองคุณภาพผ้าไหมไทยจากกรมหม่อนไหมด้วย จึงถือได้ว่าเป็นแหล่งค้าผ้าไหมที่ใหญ่ที่สุดอีกแห่งหนึ่งของประเทศไท",
    detail:
      "Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk.",
    cover_image: "/assets/ZoneSlide/silk.webp",
  },
];

const Zone: FC<Props> = ({ lang }): JSX.Element => {
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
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className="h-full w-full relative  cursor-grab"
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
                    "bg-gradient-to-t from-black/75 w-full h-1/3 bottom-0 absolute flex flex-col justify-end p-6 transition-all duration-200"
                  }
                >
                  <p className="text-white font-semibold text-lg md:text-xl uppercase">
                    {lang == "en" ? item.title : item.title_th}
                  </p>

                  <p className="text-white text-sm">
                    {lang == "en"
                      ? item.detail.substring(0, 150)
                      : item.detail_th.substring(0, 150)}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Zone;
