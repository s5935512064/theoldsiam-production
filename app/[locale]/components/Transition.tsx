"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next-intl/client";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Transition: FC<Props> = ({ children }): JSX.Element => {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <motion.main
        ref={ref}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "spring", duration: 1.5 }}
        className="flex-1 w-full "
      >
        {children}
      </motion.main>
    </>
  );
};

export default Transition;
