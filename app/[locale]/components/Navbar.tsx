"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next-intl/client";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const menu_en = [
  { id: 1, name: "Home", active: "/", slug: "/" },
  {
    id: 2,
    name: "Promotion&Event",
    active: "/promotionevent",
    slug: "/promotionevent",
  },
  { id: 3, name: "Residence", active: "/residence", slug: "/residence" },
  { id: 4, name: "Directory", active: "/directory", slug: "/directory" },
  { id: 5, name: "Contact Us", active: "/contactus", slug: "/contactus" },
];

const Navbar: FC<Props> = (): JSX.Element => {
  const pathname = usePathname();

  const [navbarOffset, setNavbarOffset] = useState(false);
  const [navbarOffset2, setNavbarOffset2] = useState(true);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const navbar = document.querySelector("#navbar");
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      // if (prevScrollpos > currentScrollPos) {
      //     navbar.style.top = "0";

      // } else {
      //     navbar.style.top = "-64px";
      // }

      if (prevScrollpos >= currentScrollPos) {
        setNavbarOffset2(true);
      } else {
        setNavbarOffset2(false);
      }

      if (window.pageYOffset >= 20) {
        setNavbarOffset(true);
        // setTextColor("#000");
      } else {
        setNavbarOffset(false);
        // setTextColor(colorText == "black" ? "#000" : "#FFF");
      }

      prevScrollpos = currentScrollPos;
    };
  });

  useEffect(() => {
    console.log({ pathname });
  });

  return (
    <>
      <div
        id="navbar"
        className={classNames(
          navbarOffset ? "bg-white shadow" : "bg-transparent text-white",
          navbarOffset2 ? "top-0" : "-top-16",
          "w-full fixed   h-14  px-6 py-1 flex items-center justify-center  z-20 "
        )}
      >
        <div className="w-32 h-full  absolute left-6 shrink-0">
          <Link href={"/"}>
            <Image
              src={"/assets/LOGO-CI.png"}
              fill
              alt="logo"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </Link>
        </div>

        <div className="flex items-center ">
          {menu_en.map((item, index) => (
            <Link key={index} href={item.slug}>
              <button
                type="button"
                className={classNames(
                  pathname == item.active
                    ? " text-[#0a3254] font-semibold underline underline-offset-4"
                    : "opacity-75 text-sm",
                  "min-w-[100px] p-2 hover:text-base hover:opacity-100 transition-all duration-200 hover:text-[#0a3254] hover:font-semibold outline-none border-none "
                )}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        <div className="absolute right-6 w-fit h-full  flex gap-2 items-center justify-center">
          {/* <div className="w-6 h-6 relative">
            <Image
              src={"/assets/translation.png"}
              fill
              unoptimized
              alt="lang"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          <div className="h-5 overflow-hidden flex items-center divide-x-[2px] divide-black gap-1">
            <button type="button" className="text-sm font-semibold">
              EN
            </button>
            <button
              type="button"
              className="pl-1 text-sm font-semibold opacity-40"
            >
              TH
            </button>
          </div> */}

          <button
            type="button"
            className="w-6 h-6    flex items-center justify-center  relative mt-2"
          >
            <div className="w-[15px] h-[10px]  absolute bottom-0 -left-2  flex justify-center items-center">
              <Image
                src={"/assets/en.svg"}
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
