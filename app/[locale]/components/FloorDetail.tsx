"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useInView, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

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
    tile_th: "ลานเฟื่องนคร ลานเจริญกรุง",
    detail_th:
      "พื้นที่พลาซ่า ชั้น 1 ยังคงเป็นแหล่งรวม ร้านเพชร ร้านทองส่งชั้นนำ ผ้าลูกไม้นำเข้า ร้านเครื่องประดับ และขนมไทยโบราณที่มีชื่อเสียงมายาวนาน",
    detail:
      "On the 1st floor of Plaza, there are central diamond shop, leading gold shop, imported lace fabrics, jewelry shop and the famous ancient Thai dessert shop.",
  },
  {
    id: 1,
    coverImage: "/assets/3.webp",
    title: "Mingmueang Market",
    tile_th: "ลานมิ่งเมือง",
    detail_th:
      "พื้นที่พลาซ่า ชั้น 2 เป็นศูนย์รวมผ้าไหม เครื่องประดับ ห้องเสื้อ ชุดราตรี ชุดแต่งงาน ที่ใหญ่ที่สุดแห่งหนึ่งของประเทศไทย",
    detail:
      "The second floor of the plaza is the silk center. One of the largest evening gown and bridal boutiques in the country.",
  },
  {
    id: 2,
    coverImage: "/assets/BRM_Perspective.webp",
    title: "Bamrung Mueang Market",
    tile_th: "ลานบำรุงเมือง",
    detail_th:
      "พื้นที่พลาซ่า ชั้น 3 เตรียมพบกับโฉมใหม่ เป็นศูนย์รวมร้านอาหาร และมาร์เก็ต เตรียมยกระดับให้เป็น Food Experience แห่งใหม่ของย่านนี้ ที่จำหน่ายสินค้าและให้บริการที่จะอำนวยความสะดวก และตอบสนองความต้องการของลูกค้ามากขึ้น",
    detail:
      "Discover the new look of the 3rd floor of the plaza, a hub of restaurants and flea markets that is being upgraded to become a new dining experience in the area. Sell ​​products and provide services that better meet customer needs.",
  },
  {
    id: 3,
    coverImage: "/assets/residence_03.webp",
    title: "The Old Siam Residence",
    tile_th: "ดิ โอลด์ สยาม เรสซิเดนซ์",
    detail_th:
      "ในส่วนของชั้น 4 เป็นพื้นที่บ้านพักอาศัย (Residence) ประกอบด้วย 128 ยูนิต ขนาดพื้นที่เริ่มต้น 95 ตารางเมตร แบบ Duplex 2 ห้องนอน ห้องรับแขกขนาดใหญ่ 1 ห้องครัว 2 ห้องน้ำ พื้นที่รวมทั้งหมด 13,000 ตารางเมตร",
    detail:
      "The 4th floor is a residential area (residential), with a total of 128 households, with a starting area of 95 square meters, a duplex apartment, 2 bedrooms, a large living room, 1 kitchen and 2 bathrooms, with a total area of 13,000 square meters.",
  },
];

const FloorDetail: FC<Props> = ({ lang }): JSX.Element => {
  const [color, setColor] = useState(true);
  const [replay, setReplay] = useState(true);
  const [played, setPlayed] = useState(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeData, setActiveData] = useState(floor_detail[activeSlide]);

  const controls = useAnimation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  const nextIndex = () => {
    if (activeSlide < floor_detail.length) {
      let temp: number = activeSlide;
      temp += 1;

      setActiveSlide(temp);
      handleReplay();
    } else {
      return null;
    }
  };

  const prevIndex = () => {
    if (activeSlide >= 0) {
      let temp: number = activeSlide;
      temp -= 1;
      setActiveSlide(temp);
      handleReplay();
    }
  };

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 200);
    setColor(!color);
  };

  useEffect(() => {
    setActiveData(floor_detail[activeSlide]);
  }, [activeSlide]);

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
        className="grid grid-cols-1 md:grid-cols-5 w-full  h-full"
      >
        <div className="bg-white p-5 pb-9 lg:p-10 gap-6 flex flex-col items-center shadow relative h-fit md:h-full md:min-h-[350px] md:col-span-2">
          <motion.div
            // ref={ref2}
            initial={{ opacity: 0, scale: 0.95 }}
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
            className="flex items-center gap-4  "
          >
            <div className="flex flex-col items-center justify-center h-full mt-4 md:mt-10 gap-1">
              <p
                className={classNames(
                  lang == "en" ? " font-kings_caslon" : "",
                  "flex items-center italic gap-1  text-sm"
                )}
              >
                {" "}
                <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                {lang == "en"
                  ? "Mixed-Use Experience"
                  : "ประสบการณ์แบบมิกซ์ยูส"}
                <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
              </p>

              <p
                className={classNames(
                  lang == "en" ? "font-kings_caslon" : "",
                  "text-2xl md:text-3xl font-semibold text-[#0a3254]  uppercase text-center"
                )}
              >
                {activeData
                  ? lang == "en"
                    ? activeData.title
                    : activeData.tile_th
                  : null}
              </p>
              <p className="text-sm md:text-base text-center mt-1">
                {activeData
                  ? lang == "en"
                    ? activeData.detail
                    : activeData.detail_th
                  : null}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-2  bottom-10 md:absolute pb-4 sm:pb-0">
            <div className="flex gap-2 items-center">
              <button
                type="button"
                title="button_prev"
                id="button_prev"
                disabled={activeSlide == 0 ? true : false}
                onClick={prevIndex}
                className={classNames(
                  activeSlide == 0
                    ? "opacity-20"
                    : "opacity-100 hover:bg-[#0a3254] hover:text-white",
                  "w-10 h-10  border border-[#0a3254]   duration-300 flex justify-center items-center outline-none"
                )}
              >
                <HiChevronLeft
                  id="item_right"
                  className="w-8 h-8 hover:scale-125 duration-200 "
                />
              </button>

              <button
                type="button"
                id="button_next"
                title="button_next"
                onClick={nextIndex}
                disabled={
                  activeSlide - floor_detail.length == -1 ? true : false
                }
                className={classNames(
                  activeSlide - floor_detail.length == -1
                    ? "opacity-20"
                    : "opacity-100 hover:bg-[#0a3254] hover:text-white ",
                  "w-10 h-10  border border-[#0a3254] flex justify-center items-center outline-none"
                )}
              >
                <HiChevronRight
                  id="item_right"
                  className="w-8 h-8 hover:scale-125 duration-200 translate-x-[2px]"
                />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, scale: 1 }}
          animate={replay ? "visible" : "hidden"}
          variants={container_image}
          className="w-full relative min-h-[300px] md:min-h-[400px] bg-[#fff] loading overflow-hidden md:col-span-3"
        >
          <div className="image w-full h-full relative">
            <Image
              src={activeData ? activeData.coverImage : ""}
              alt="store"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-all duration-200 fade-in"
            />
          </div>

          <div className="w-fit absolute bottom-5 right-5 flex items-center gap-1">
            {floor_detail.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(item.id)}
                className={classNames(
                  activeSlide == item.id
                    ? "bg-[#0a3254] text-white"
                    : "bg-white opacity-75",
                  "w-5 h-5   text-xs flex justify-center items-center hover:bg-[#0a3254] hover:text-white"
                )}
              >
                {index + 1}
              </button>
            ))}

            {/* <div className="border-[#0a3254] w-5 h-5 bg-white text-xs flex justify-center items-center">
              2
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloorDetail;
