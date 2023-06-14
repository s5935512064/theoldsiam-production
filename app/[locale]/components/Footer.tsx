"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import moment from "moment";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Footer: FC<Props> = (): JSX.Element => {
  const [year, setYear] = useState<any>(moment().year());

  return (
    <>
      <div className="w-full h-fit bg-[#f8f8f8] px-6 py-4 border-t flex justify-center relative">
        <div className="max-w-[1440px] w-full flex flex-col gap-2 sm:flex-row justify-between lg:justify-between items-center">
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
            <Link legacyBehavior href={"https://siamsindhorn.com/privacy"}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="name_goto_website"
                className="hover:scale-105 duration-300 cursor-pointer transition-all"
              >
                Privacy Policy
              </a>
            </Link>
            <button
              type="button"
              data-cc="c-settings"
              className="pl-2 hover:scale-105 duration-300 cursor-pointer outline-none transition-all"
            >
              Cookies Consent{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
