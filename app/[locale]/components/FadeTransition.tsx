"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
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

const FadeTransition: FC<Props> = ({ children }): JSX.Element => {
  const controls = useAnimation();
  const [isPlayed, setIsPlayed] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px 0px 0px",
  });

  useEffect(() => {
    if (isInView && isPlayed == false) {
      controls.start("visible");
      setIsPlayed(true);
    } else if (isPlayed == false) {
      controls.start("hidden");
    }
  }, [isInView, controls, ref, isPlayed]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1 }}
        animate={controls}
        variants={CHILD_VARIANTS_SCALE}
      >
        {children}
      </motion.div>
    </>
  );
};

export default FadeTransition;
