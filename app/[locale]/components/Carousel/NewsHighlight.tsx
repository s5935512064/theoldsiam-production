"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import DotLoader from "react-spinners/DotLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type News = {
  id: number;
  cover_image: string;
  title: string;
  date: string;
  tag: Array<string>;
  highlight: boolean;
};

interface Props {
  data: Array<News>;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

// const temp_news = [
//   {
//     id: 0,
//     cover_image: "/assets/promotions/01_eifel.jpg",
//     title:
//       "วันนี้ Café Eiffel on tour พร้อมเสิร์ฟความอร่อย ที่ดิโอลด์ สยาม พลาซ่า",
//     date: "June 27, 2023",
//     tag: ["#promotion", "#desserts"],
//   },
//   {
//     id: 1,
//     cover_image: "/assets/promotions/02_theold.jpg",
//     title: "What’s your favourite Food",
//     date: "June 27, 2023",
//     tag: ["#promotion", "#food"],
//   },
//   {
//     id: 2,
//     cover_image: "/assets/promotions/03_kohlangwang.jpg",
//     title: "ขอเชิญชมการประกวดขับร้องเพลงสากล ยุค“โก๋หลังวัง”",
//     date: "June 20, 2023",
//     tag: ["#event"],
//   },
//   {
//     id: 3,
//     cover_image: "/assets/promotions/04_theoldresidence.jpg",
//     title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
//     date: "June 15, 2023",
//     tag: ["#news", "#residence"],
//   },
//   {
//     id: 4,
//     cover_image: "/assets/promotions/02_osp_apichai/01.webp",
//     title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
//     date: "June 15, 2023",
//     tag: ["#news", "#residence"],
//   },
// ];

const NewsHighlight: FC<Props> = ({ data }): JSX.Element => {
  const [newsData, setNewsData] = useState<Array<News>>([]);

  let newArr: Array<News> = [];

  function sortDate() {
    newArr = data;
    newArr.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      // @ts-ignore
      return d - c;
    });
    setNewsData(newArr);
  }

  useEffect(() => {
    sortDate();
  }, []);

  if (!newsData) {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <DotLoader color="#0a3254" />
      </div>
    );
  }

  return (
    <>
      <Swiper
        id="sample-slider"
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        centeredSlides={false}
        speed={1500}
        // pagination={{
        //   clickable: false,
        // }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1279: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="!h-full w-full relative cursor-grab"
      >
        {newsData &&
          newsData
            .filter((p) => p.highlight == true)
            .map((item, index) => (
              <SwiperSlide
                key={index}
                id="bussiness_card"
                className="opacity-100 relative overflow-hidden shadow-md rounded-sm"
              >
                <Link legacyBehavior href={`/promotionevent/ssd202316062026`}>
                  <a
                    aria-label="news"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full bg-[#fff] loading"
                  >
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

                      <div className="px-4 py-1 bg-[#0a3254] text-white text-xs absolute top-3 left-0 ">
                        {item.date}
                      </div>

                      <div
                        className={
                          "bg-gradient-to-t from-black/75   w-full h-1/3 bottom-0 absolute flex flex-col justify-end p-4 py-4 transition-all duration-200"
                        }
                      >
                        <div className="flex items-center gap-1">
                          {item.tag.map((item, index) => (
                            <p key={index} className="text-xs text-white">
                              {item}
                            </p>
                          ))}
                        </div>
                        <p className="text-sm font-semibold text-white">
                          {item.title.substring(0, 100)}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default NewsHighlight;
