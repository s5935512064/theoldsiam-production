"use client";

import { useRouter } from "next/router";
import React, {
  FC,
  useEffect,
  useRef,
  useState,
  Fragment,
  useCallback,
} from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
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

const CHILD_VARIANTS_SCALE = {
  visible: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 1, scale: 1 },
};
const images = [
  {
    id: 1,
    src: "/assets/residence/residence_01.webp",
    alt: "bg-01",
    position: "center",
  },
  {
    id: 3,
    src: "/assets/residence/reception-1.webp",
    alt: "bg-03",
    position: "center",
  },
  {
    id: 2,
    src: "/assets/residence/residence_03.webp",
    alt: "bg-02",
    position: "center",
  },

  {
    id: 4,
    src: "/assets/residence/LOUNG1.webp",
    alt: "bg-04",
    position: "center",
  },
];

const ResidenceSlide: FC<Props> = (): JSX.Element => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, ref]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        variants={CHILD_VARIANTS_SCALE}
        className="absolute w-full h-full"
      >
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
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full relative bg-[#404040]"
            >
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
      </motion.div>
    </>
  );
};

export default ResidenceSlide;
