"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";
import { usePathname, useRouter } from "next/navigation";

interface Props {}

const ReactShared: FC<Props> = (): JSX.Element => {
  const pathName = usePathname();
  const segments = pathName.split("/");

  return (
    <>
      <div className="w-fit h-fit bg-white rounded-full drop-shadow fixed right-[2%] top-16 flex flex-col gap-2 items-center justify-center p-1 py-2 z-20">
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_API_URL + pathName}`}
          // quote={post.from[0].name}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <LineShareButton
          url={`${process.env.NEXT_PUBLIC_API_URL + pathName}`}
          // @ts-ignore
          // quote={post.from[0].name}
        >
          <LineIcon size={32} round />
        </LineShareButton>

        <Link href={`/${segments[1]}/promotionevent`}>
          <button
            type="button"
            className="w-9 h-9 rounded-full border relative flex justify-center items-center hover:bg-[#0a3254] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            <span className="sr-only">back</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReactShared;
