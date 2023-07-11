"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";
import Image from "next/image";
import React, { FC, useEffect, useState, Fragment } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const segments = pathName.split("/");

  const redirectedPathName = (locale: string) => {
    if (!pathName) {
      return "/";
    } else if (locale == "en") {
      const segments = pathName.split("/");
      segments[1] = "th";
      return segments.join("/");
    } else {
      const segments = pathName.split("/");
      segments[1] = "en";
      return segments.join("/");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      router.refresh();
    }, 1500);
  }, []);

  return (
    <>
      <Link href={redirectedPathName(segments[1])} scroll={false}>
        <button
          type="button"
          className="w-6 h-6  flex items-center justify-center  relative mt-2"
        >
          <div className="w-[15px] h-[10px]  absolute bottom-0 -left-2  flex justify-center items-center">
            <Image
              src={segments[1] == "en" ? "/assets/en.svg" : "/assets/th.svg"}
              fill
              unoptimized
              alt="lang"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </button>
      </Link>
    </>
  );
}
