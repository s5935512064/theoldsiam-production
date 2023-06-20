"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import moment from "moment";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Footer: FC<Props> = (): JSX.Element => {
  const [year, setYear] = useState<any>(moment().year());

  return (
    <>
      <div className="w-full h-fit bg-[#0a3254] flex flex-col justify-center items-center relative">
        <div className="h-72 w-full bg-[url('/assets/contact.png')] bg-center bg-no-repeat bg-cover  flex justify-center items-center">
          <div className="max-w-[1440px] w-full flex flex-col gap-2 justify-center items-center text-center  px-6 ">
            <h1 className="text-4xl font-bold  text-white uppercase">
              Get in Touch
            </h1>
            <p className="font-Allison text-4xl -mt-6 text-white">with us</p>

            <p className="text-white -mt-2">
              The Old Siam Plaza is a classic shopping mall on Rattanakosin
              Island.
            </p>

            <div className="flex items-center gap-4 divide-x divide-white">
              <div className="flex items-center justify-center">
                <button className="outline-none border-none hover:scale-105 duration-300  transition-all text-sm  text-white inline-flex items-center gap-2    ">
                  Rental Area{" "}
                  <span>
                    <BiPhoneCall className="w-5 h-5 shrink-0" />
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center">
                <button className="outline-none border-none hover:scale-105 duration-300  transition-all text-sm  text-white inline-flex items-center gap-2   pl-4">
                  More Information
                  <span>
                    <BiInfoCircle className="w-5 h-5 shrink-0" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white  max-w-[1440px] px-6 py-4  w-full flex flex-col gap-2 sm:flex-row justify-between lg:justify-between items-center">
          <p className="text-center text-xs sm:text-sm  ">
            Copyright © 2023 {year != "2023" && -year}{" "}
            <Link legacyBehavior href={"https://siamsindhorn.com/"}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="name_goto_website"
                className="font-medium cursor-pointer mr-1 italic"
              >
                Siam Sindhorn Co., Ltd.
              </a>
            </Link>
            All rights reserved.
          </p>

          <div className="  right-5 md:right-10 flex items-center gap-2 text-xs sm:text-sm  divide-x">
            <div className="flex items-center justify-center">
              <Link legacyBehavior href={"https://siamsindhorn.com/privacy"}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="name_goto_website"
                  className="hover:scale-105 duration-300  transition-all cursor-pointer outline-none border-none"
                >
                  Privacy Policy
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                data-cc="c-settings"
                className="pl-2 hover:scale-105 duration-300 cursor-pointer outline-none border-none transition-all"
              >
                Cookies Consent{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
