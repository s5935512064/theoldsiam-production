"use client";

import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { Gallery, Item } from "react-photoswipe-gallery";

interface Props {
  lang: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const planData = [
  {
    id: 0,
    active: "master",
    floorsrc: "/assets/residence/MASTERPLAN.png",
    topic: "Master Plan",
    description: "",
  },
  {
    id: 1,
    active: "1st",
    floorsrc: "/assets/residence/1STFLOORPLAN-W.png",
    topic: "1st Floor Plan",
    description: "",
  },
  {
    id: 2,
    active: "2nd",
    floorsrc: "/assets/residence/2NDFLOORPLAN-W.png",
    topic: "2nd Floor Plan",
    description: "",
  },
];

const options = {
  zoom: true,
  wheelToZoom: true,
};

const ResidencePlan: FC<Props> = ({ lang }): JSX.Element => {
  const lightGallery = useRef<any>(null);

  const [items, setItems] = useState([
    {
      id: 1,
      size: "1400-933",
      src: "/assets/residence/MASTERPLAN.png",
      thumb: "/assets/residence/MASTERPLAN.png",
    },
    {
      id: 2,
      size: "1400-933",
      src: "/assets/residence/1STFLOORPLAN-W.png",
      thumb: "/assets/residence/1STFLOORPLAN-W.png",
    },
    {
      id: 3,
      size: "1400-933",
      src: "/assets/residence/2NDFLOORPLAN-W.png",
      thumb: "/assets/residence/2NDFLOORPLAN-W.png",
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

  const [played, setPlayed] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  const [activeBtn, setActiveBtn] = useState<string>("master");

  const activeData = planData.filter((p) => p.active == activeBtn);

  const activeButton = (input: string) => {
    setActiveBtn(input);
  };

  useEffect(() => {
    if (isInView && played == false) {
      controls.start("visible");
      setPlayed(true);
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls, ref, played]);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 relative ">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 flex flex-col gap-2">
            <div
              // onClick={() => openGallery(activeData[0].id)}
              className="cursor-pointer bg-white relative min-h-[300px] md:min-h-[400px] lg:min-h-[480px] w-full"
            >
              <Gallery options={options}>
                <Item
                  original={activeData[0].floorsrc}
                  thumbnail={activeData[0].floorsrc}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <Image
                      fill
                      onClick={open}
                      unoptimized
                      alt={activeData[0].topic}
                      src={activeData[0].floorsrc}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  )}
                </Item>
              </Gallery>

              {/* <LightGallery
                mode="lg-fade"
                dynamic
                dynamicEl={items}
                onInit={onInit}
                plugins={[lgZoom, lgThumbnail]}
              >
              <Image
                fill
                unoptimized
                alt={activeData[0].topic}
                src={activeData[0].floorsrc}
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
              </LightGallery> */}
            </div>
          </div>

          <div className="md:col-span-2 md:px-5 flex flex-col lg:pb-5">
            <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3 mb-4 w-full  justify-center md:justify-start ">
              <button
                type="button"
                onClick={() => activeButton("master")}
                className={classNames(
                  activeBtn == "master"
                    ? "opacity-100 bg-[#BDA27D] text-white"
                    : "opacity-100 border border-white text-white",
                  "px-4 sm:px-7 py-2 w-fit   text-xs md:text-sm  whitespace-nowrap hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-[#BDA27D] hover:border-[#BDA27D]"
                )}
              >
                Master Plan
              </button>
              <button
                type="button"
                onClick={() => activeButton("1st")}
                className={classNames(
                  activeBtn == "1st"
                    ? "opacity-100 bg-[#BDA27D] text-white"
                    : "opacity-100 border border-white text-white",
                  "px-4 sm:px-7 py-2 w-fit   text-xs md:text-sm  whitespace-nowrap hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-[#BDA27D] hover:border-[#BDA27D]"
                )}
              >
                1st Floor Plan
              </button>
              <button
                type="button"
                onClick={() => activeButton("2nd")}
                className={classNames(
                  activeBtn == "2nd"
                    ? "opacity-100 bg-[#BDA27D] text-white"
                    : "opacity-100 border border-white text-white",
                  "px-4 sm:px-7 py-2 w-fit   text-xs md:text-sm  whitespace-nowrap hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-[#BDA27D] hover:border-[#BDA27D]"
                )}
              >
                2nd Floor Plan
              </button>
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-[#BDA27D] font-kings_caslon uppercase tracking-wider">
              {activeData != null ? activeData[0].topic : null}
            </p>

            <p className="text-sm md:text-base mt-1 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              magnam ipsam aut, obcaecati perspiciatis est placeat commodi
              minima? Repellat distinctio, consequuntur minima iste atque
              voluptatibus quis saepe ducimus magnam non!
            </p>

            <div className="grid grid-cols-2 text-white my-2 text-[13px] md:text-sm ">
              <p>1x bed room</p>
              <p>1x bed room</p>
              <p>1x bed room</p>
              <p>1x bed room</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidencePlan;
