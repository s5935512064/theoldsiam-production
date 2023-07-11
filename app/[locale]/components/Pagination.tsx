"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

import { Link, animateScroll as scroll } from "react-scroll";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  linkTo: string;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({
  linkTo,
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: Props): JSX.Element => {
  const [active, setActive] = useState(1);

  const totalPageCount =
    Math.ceil(totalCount / pageSize) != 0
      ? Math.ceil(totalCount / pageSize)
      : 1;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <>
      <div className="flex items-center gap-8 w-full  justify-center py-1">
        <Link
          href="#"
          activeClass="active"
          to={linkTo}
          spy={true}
          smooth={true}
          offset={-84}
          duration={500}
        >
          <button
            type="button"
            onClick={onPrevious}
            disabled={currentPage === 1}
            className={classNames(
              currentPage === 1 ? "opacity-50" : "",
              "flex items-center gap-2 text-sm"
            )}
          >
            <HiOutlineChevronDoubleLeft />
            Previous
          </button>
        </Link>

        <p className="text-sm">
          Page<span className="text-sm font-semibold px-1">{currentPage}</span>
          of
          <span className="text-sm font-semibold px-1 pl-2">
            {totalPageCount}
          </span>
        </p>

        <Link
          href="#"
          activeClass="active"
          to={linkTo}
          spy={true}
          smooth={true}
          offset={-84}
          duration={500}
        >
          <button
            type="button"
            onClick={onNext}
            disabled={currentPage === totalPageCount}
            className={classNames(
              currentPage === totalPageCount ? "opacity-75" : "",
              "flex items-center gap-2 text-sm"
            )}
          >
            Next
            <HiOutlineChevronDoubleRight />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Pagination;
