"use client";

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
import DotLoader from "react-spinners/DotLoader";
import { useRouter } from "next/navigation";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const options = {
  zoom: true,
  wheelToZoom: true,
};

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
    id: 0,
    src: "/assets/residence/slide/01_DSC07587-101.webp",
    alt: "bg-01",
    position: "center",
  },
  {
    id: 1,
    src: "/assets/residence/slide/01_DSC07606-Edit-103.webp",
    alt: "bg-02",
    position: "center",
  },
  {
    id: 2,
    src: "/assets/residence/slide/01_DSC07745-Edit-107.webp",
    alt: "bg-03",
    position: "center",
  },
  {
    id: 3,
    src: "/assets/residence/slide/01_DSC07750-Edit-108.webp",
    alt: "bg-04",
    position: "center",
  },
  {
    id: 4,
    src: "/assets/residence/slide/01_DSC07753-Edit-109.webp",
    alt: "bg-05",
    position: "center",
  },
  {
    id: 5,
    src: "/assets/residence/slide/01_DSC07778-Edit-116.webp",
    alt: "bg-06",
    position: "center",
  },
  {
    id: 6,
    src: "/assets/residence/slide/01_DSC07884-Edit-117.webp",
    alt: "bg-07",
    position: "center",
  },
];

const GallerySlide: FC<Props> = (): JSX.Element => {
  const router = useRouter();
  const lightGallery = useRef<any>(null);

  const [hasError, setHasError] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  const [items, setItems] = useState([
    {
      id: "1",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07587-101.webp",
      thumb: "/assets/residence/slide/01_DSC07587-101.webp",
    },
    {
      id: "2",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07606-Edit-103.webp",
      thumb: "/assets/residence/slide/01_DSC07606-Edit-103.webp",
    },

    {
      id: "3",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07745-Edit-107.webp",
      thumb: "/assets/residence/slide/01_DSC07745-Edit-107.webp",
    },
    {
      id: "4",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07750-Edit-108.webp",
      thumb: "/assets/residence/slide/01_DSC07750-Edit-108.webp",
    },
    {
      id: "5",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07753-Edit-109.webp",
      thumb: "/assets/residence/slide/01_DSC07753-Edit-109.webp",
    },
    {
      id: "6",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07778-Edit-116.webp",
      thumb: "/assets/residence/slide/01_DSC07778-Edit-116.webp",
    },

    {
      id: "7",
      size: "1400-933",
      src: "/assets/residence/slide/01_DSC07884-Edit-117.webp",
      thumb: "/assets/residence/slide/01_DSC07884-Edit-117.webp",
    } as any,
  ]);

  const openGallery = useCallback((index: number) => {
    lightGallery.current.openGallery(index);
  }, []);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, ref]);

  //   useEffect(() => {
  //     try {
  //       console.log("xxxxx");
  //     } catch (e) {
  //       console.log("22222");
  //       setHasError(true);
  //     }
  //   });

  //   if (hasError) {
  //     return (
  //       <div className="w-full h-full flex justify-center items-center ">
  //         <DotLoader color="#0a3254" />
  //       </div>
  //     );
  //   }

  return (
    <>
      <LightGallery
        escKey
        // dynamic
        // dynamicEl={items}
        onInit={onInit}
        plugins={[lgZoom, lgThumbnail]}
      >
        <a href="/assets/residence/slide/01_DSC07587-101.webp">
          <img alt="img1" src="/assets/residence/slide/01_DSC07587-101.webp" />
        </a>
      </LightGallery>

      {/* <Swiper
        id="gallery"
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="h-full w-full relative cursor-pointer"
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            onClick={() => openGallery(index)}
            id="bussiness_card"
            className="h-full w-full relative overflow-hidden shadow-md rounded-sm"
          >
            <div className="w-full h-full bg-[#fff] loading">
              <div className="image w-full h-full relative">
                <Image
                  //   onClick={open}
                  //   onClick={() => openImage(item.id)}
                  fill
                  unoptimized
                  src={item.src}
                  alt={item.alt}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
};

export default GallerySlide;
