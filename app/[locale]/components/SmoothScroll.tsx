"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

interface Props {
  linkTo: string;
}

const SmoothScroll: FC<Props> = ({ linkTo }): JSX.Element => {
  return (
    <>
      <Link
        href="#"
        activeClass="active"
        to={linkTo}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <button
          type="button"
          className="arrow-exp text-white drop-shadow-2xl h-full outline-none text-xs uppercase "
        >
          Scroll
        </button>
      </Link>
    </>
  );
};

export default SmoothScroll;
