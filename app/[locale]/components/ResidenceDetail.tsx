"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

const GallerySlide = dynamic(() => import("./SwipeeSlide/GallerySlide"), {
  ssr: false,
});

interface Props {
  lang: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CHILD_VARIANTS_SCALE = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 0, scale: 1 },
};

const container = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 0, scale: 0.95 },
};

const container_image = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 5,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 0, scale: 1 },
};

const floor_detail = [
  {
    id: 0,
    coverImage: "/assets/1674537729922.webp",
    title: "Feung Nakorn - Charoenkrung Market",
    detail:
      "On the 1st floor of Plaza, there are central diamond shop, leading gold shop, imported lace fabrics, jewelry shop and the famous ancient Thai dessert shop.",
  },
  {
    id: 1,
    coverImage: "/assets/3.webp",
    title: "Mingmueang Market",
    detail:
      "The second floor of the plaza is the silk center. One of the largest evening gown and bridal boutiques in the country.",
  },
  {
    id: 2,
    coverImage: "/assets/BRM_Perspective.webp",
    title: "Bamrung Mueang Market",
    detail:
      "Discover the new look of the 3rd floor of the plaza, a hub of restaurants and flea markets that is being upgraded to become a new dining experience in the area. Sell ​​products and provide services that better meet customer needs.",
  },
  {
    id: 4,
    coverImage: "/assets/residence_03.webp",
    title: "The Old Siam Residence",
    detail:
      "The 4th floor is a residential area (residential), with a total of 128 households, with a starting area of 95 square meters, a duplex apartment, 2 bedrooms, a large living room, 1 kitchen and 2 bathrooms, with a total area of 13,000 square meters.",
  },
];

const ResidenceDetail: FC<Props> = ({ lang }): JSX.Element => {
  const controls = useAnimation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [played, setPlayed] = useState(false);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  useEffect(() => {
    if (isInView && played == false) {
      controls.start("visible");
      setPlayed(true);
    } else if (played == false) {
      controls.start("hidden");
    }
  }, [isInView, controls, ref, played]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1 }}
        animate={controls}
        variants={CHILD_VARIANTS_SCALE}
        className="grid grid-cols-1  w-full  h-full gap-4 lg:gap-10"
      >
        <div className=" flex flex-col items-center  relative h-full min-h-[350px] lg:min-h-fit ">
          <motion.div
            // ref={ref2}
            initial={{ opacity: 0, scale: 0.95 }}
            // animate="visible"
            animate={"visible"}
            variants={container}
            className="flex items-center gap-4  h-full"
          >
            <div className="flex flex-col justify-center items-center  w-full md:h-full  gap-2 ">
              <p
                className={classNames(
                  lang == "en" ? "font-kings_caslon" : "",
                  "flex items-center gap-1 italic  text-sm text-white "
                )}
              >
                {" "}
                <span className="w-6 h-[1px] border-t border-[#BDA27D] "></span>
                {lang == "en"
                  ? "The Old Siam Residence"
                  : "ดิ โอลด์ สยาม เรสซิเดนซ์"}
                <span className="w-6 h-[1px] border-t border-[#BDA27D] "></span>
              </p>

              <p
                className={classNames(
                  lang == "en" ? "font-kings_caslon " : "",
                  "text-xl md:text-3xl font-semibold text-[#BDA27D] uppercase tracking-wider  text-center"
                )}
              >
                {lang == "en"
                  ? " Sky Villa , the only one on Rattanakosin Island"
                  : "สกายวิลล่า หนึ่งเดียว ใจกลางเกาะรัตนโกสินทร์"}
              </p>
              <p className="text-sm md:text-base mt-2 md:mt-5 text-white ">
                {lang == "en"
                  ? "This new residential project is an integral part of"
                  : "โครงการที่พักอาศัยนี้ เป็นส่วนหนึ่งของ"}{" "}
                <span className="italic text-[#BDA27D]">
                  {lang == "en"
                    ? "The Old Siam Plaza"
                    : "ดิ โอลด์ สยาม พล่าซ่า"}
                </span>{" "}
                {lang == "en"
                  ? ", a mixed-use development project on the unique location in Rattanakosin Island, A perfect blend of neo and classic alchemy each unit provides a spacious living area to accommodate all homy activities and desires of a modern family while comfortable living and diverse lifestyles are well embraced."
                  : "โครงการมิกซ์ยูส (Mixed-use) บนทำเลศักยภาพหนึ่งเดียว ใจกลางเกาะรัตนโกสินทร์ ทุกยูนิตมีพื้นที่ใช้สอยขนาดใหญ่ ให้ความรู้สึกของความเป็น ‘บ้าน’ ที่เติมเต็มความสุขและรองรับกิจกรรมเพื่อทุกคนในครอบครัว"}
              </p>

              <p className="text-sm md:text-base mt-1 text-white">
                <span className="italic text-[#BDA27D]">
                  {lang == "en"
                    ? "Living And Life With Tangible Conveniences"
                    : "ความสุขที่สัมผัสได้อย่างแท้จริง"}
                </span>{" "}
                {lang == "en"
                  ? "situated adjacent to mrt sam yod allows an easy access to public transportations. the project is surrounded with all facilities for daily dwelling; shopping center, cafeterias, mouth-watering michelin stars food shops, academic institutes, public park and government offices."
                  : "สะดวกสบายในทุกการเดินทาง ด้วยทำเลติดสถานีรถไฟฟ้า MRT สามยอด แวดล้อมด้วยสิ่งอำนวยความสะดวกครบครัน ทั้งศูนย์การค้าฯ ตลาดชุมชน ร้านอาหารเก่าแก่ดั้งเดิม คาเฟ่ยอดนิยม สถานศึกษา พิพิธภัณฑ์ สวนสาธารณะ หน่วยงานราชการ"}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full relative min-h-[300px] md:min-h-[450px] lg:min-h-[550px] overflow-hidden">
          <GallerySlide />
        </div>

        {/* <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 1 }}
          animate={"visible"}
          variants={container_image}
          className="w-full relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-[#fff] loading overflow-hidden "
        >
          <div className="image w-full h-full relative">
            <Image
              src={"/assets/residence/reception-1.webp"}
              alt="store"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-all duration-200 fade-in"
            />
          </div>
        </motion.div> */}

        <div className="flex flex-col w-full my-4">
          <p className="text-sm md:text-base text-white">
            {lang == "en"
              ? "Outstandingly, it takes only a few minutes’ walk to several most world class renowned attractions: the Grand Palace, the Temple of the Emerald. Hence, the old siam residence delivers both the realm of glorious old places & promising new path of living that nowhere can compare."
              : "ที่สำคัญคุณยังสามารถเดินไปยังสถานที่สำคัญของประเทศ และมรดกวัฒนธรรมระดับโลก อาทิ วัดพระแก้ว พระบรมมหาราชวัง โดยใช้เวลาเดินเพียงไม่กี่นาที ณ ที่แห่งนี้ ดิ โอลด์ สยาม เรสซิเดนซ์ จึงเต็มไปด้วยความรื่นรมย์ สดชื่น และยังคงกลิ่นอายของอดีต ตอบโจทย์ความต้องการของผู้อยู่อาศัยทุกช่วงวัย"}
          </p>
        </div>

        {/* <div className="w-full relative min-h-[300px] md:min-h-[450px] lg:min-h-[550px] overflow-hidden">
          <GallerySlide />
        </div> */}

        {/* <motion.div
          ref={ref2}
          // id="bussiness_card"
          initial={{ opacity: 0, scale: 1 }}
          animate={"visible"}
          variants={container_image}
          className="w-full relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-[#fff] loading overflow-hidden "
        >
          <div className="image w-full h-full relative">
            <Image
              src={"/assets/residence/reception-1.webp"}
              alt="store"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-all duration-200 fade-in"
            />
          </div>
        </motion.div> */}
      </motion.div>
    </>
  );
};

export default ResidenceDetail;
