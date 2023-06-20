"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

interface Props {}

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

const FloorDetail: FC<Props> = (): JSX.Element => {
  const [color, setColor] = useState(true);

  const [replay, setReplay] = useState(true);

  const controls = useAnimation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, {
    margin: "100px 0px 100px 0px",
  });

  //   useEffect(() => {
  //     controls.start("hidden");
  //     setTimeout(() => {
  //       controls.start("visible");
  //     }, 10);
  //   }, [color]);

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 200);

    setColor(!color);
  };

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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        variants={CHILD_VARIANTS_SCALE}
        className="col-span-3 grid grid-cols-2 w-full mt-10"
      >
        <div className="bg-white p-10 flex flex-col justify-center shadow">
          <motion.div
            // ref={ref2}
            initial={{ opacity: 0, scale: 0.95 }}
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
            className="flex items-center gap-4"
          >
            <div className="flex flex-col items-center">
              <p className="flex items-center gap-1 italic font-kings_caslon text-sm ">
                {" "}
                <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                Mixed-Use Experience
                <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
              </p>
              <p className="text-3xl font-semibold text-[#0a3254] font-kings_caslon uppercase ">
                Mingmuang Market
              </p>
              <p className="text-center mt-2">
                1st floor of plaza, The center of diamond shops, leading gold
                shops, imported lace fabric, jewelry shops and ancient Thai
                desserts that are famous for a long time.
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-2 mt-5 ">
            <div className="flex gap-2">
              <button
                type="button"
                id="button_next"
                className=" w-10 h-10 rounded-full border border-black flex justify-center items-center "
              >
                <HiChevronLeft
                  id="item_right"
                  className="w-8 h-8 hover:scale-125 duration-200 "
                />
              </button>
              <button
                type="button"
                id="button_next"
                onClick={handleReplay}
                className="w-10 h-10 rounded-full border border-black flex justify-center items-center"
              >
                <HiChevronRight
                  id="item_right"
                  className="w-8 h-8  hover:scale-125 duration-200 translate-x-[2px]"
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
          className="w-full relative h-[400px]"
        >
          <Image
            src={color ? "/assets/3.webp" : "/assets/slide/slide_01.webp"}
            alt="store"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="transition-all duration-200 fade-in"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloorDetail;
