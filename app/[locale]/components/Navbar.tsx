"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Turn as Hamburger } from "hamburger-react";
import { Transition, Dialog } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import { i18n } from "../../../i18n-config";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const menu_en = [
  { id: 1, name: "Home", active: "/en", slug: "/en" },
  {
    id: 2,
    name: "Promotion&Event",
    active: "/en/promotionevent",
    slug: "/en/promotionevent",
  },
  { id: 3, name: "Residence", active: "/en/residence", slug: "/en/residence" },
  { id: 4, name: "Directory", active: "/en/directory", slug: "/en/directory" },
  { id: 5, name: "Contact Us", active: "/en/contactus", slug: "/en/contactus" },
];

const menu_th = [
  { id: 1, name: "หน้าหลัก", active: "/th", slug: "/th" },
  {
    id: 2,
    name: "โปรโมชั่นและกิจกรรม",
    active: "/th/promotionevent",
    slug: "/th/promotionevent",
  },
  { id: 3, name: "เรสซิเดนซ์", active: "/th/residence", slug: "/th/residence" },
  { id: 4, name: "ไดเรกทอรี่", active: "/th/directory", slug: "/th/directory" },
  { id: 5, name: "ติดต่อเรา", active: "/th/contactus", slug: "/th/contactus" },
];

const Navbar: FC<Props> = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathname = usePathname();
  const segments = pathname.split("/");
  const t = segments[1] === "en" ? menu_en : menu_th;

  const [isOpen, setOpen] = useState(false);
  const [navbarOffset, setNavbarOffset] = useState(false);
  const [navbarOffset2, setNavbarOffset2] = useState(true);
  const [isResidence, setIsResidence] = useState(false);

  const [isShow, setIsShow] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function toggleNavbar() {
    setOpen(!isOpen);
  }

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
        if (
          pathname == `/${segments[1]}` ||
          pathname == `/${segments[1]}/residence` ||
          segments.length == 4
        ) {
          setNavbarOffset(false);
        }
        // setTextColor(colorText == "black" ? "#000" : "#FFF");
      }

      prevScrollpos = currentScrollPos;
    };
  });

  useEffect(() => {
    if (
      pathname == `/${segments[1]}` ||
      pathname == `/${segments[1]}/residence` ||
      segments.length == 4
    ) {
      setNavbarOffset(false);
    } else {
      setNavbarOffset(true);
    }
  }, [pathname]);

  useEffect(() => {
    closeModal();
    if (pathname == `/${segments[1]}/residence`) {
      setIsResidence(true);
    } else {
      setIsResidence(false);
    }
  }, [pathname]);

  return (
    <>
      <div className="fixed bottom-0 w-full h-2 z-50">
        <motion.div
          className="inset-0 fixed h-[5px] bg-[#0a3254] origin-[0%]"
          style={{ scaleX }}
        />
      </div>

      <div
        id="navbar"
        className={classNames(
          navbarOffset ? "bg-white shadow " : "bg-transparent text-white",

          navbarOffset2 ? "top-0" : "-top-16",
          "w-full fixed  h-16  px-6 py-4 md:py-2 flex items-center justify-center z-30 "
        )}
      >
        <div className="absolute lg:hidden left-3 w-fit h-full  flex gap-2 items-center -mt-2">
          <Hamburger
            label="menu"
            rounded
            color={navbarOffset ? "#000" : "#fff"}
            size={18}
            toggled={isOpen}
            toggle={toggleNavbar}
          />
        </div>

        <div className="w-32 h-full relative lg:absolute lg:left-6 shrink-0">
          <Link href={`/${segments[1]}`}>
            <div className="w-full h-full relative">
              <Image
                src={
                  navbarOffset ? "/assets/LOGO-CI.png" : "/assets/LOGO-W.png"
                }
                fill
                alt="logo"
                priority
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {t.map((item, index) => (
            <Link key={index} href={item.slug}>
              <button
                type="button"
                className={classNames(
                  pathname == item.active
                    ? "font-semibold underline underline-offset-4"
                    : "",
                  navbarOffset
                    ? isResidence
                      ? "text-[#0a3254]"
                      : "text-[#0a3254]"
                    : "text-white",
                  isResidence ? "hover:text-[#0a3254]" : "hover:text-[#0a3254]",
                  "min-w-[100px] p-2 hover:text-base hover:opacity-100 !transition-all duration-200  hover:font-semibold outline-none border-none "
                )}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        <div className="absolute right-6 w-fit h-full  flex gap-2 items-center justify-center -mt-2">
          <LocaleSwitcher />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full max-w-[350px] min-h-screen h-full transform overflow-y-visible p-4 bg-white shadow-xl transition-all flex flex-col gap-4 relative py-6">
                  <div className="absolute right-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border   flex items-center justify-center text-black "
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <span className="sr-only">close</span>
                    </button>
                  </div>

                  <div className="w-48 h-12 relative ml-3">
                    <Link href={`/${segments[1]}`}>
                      <Image
                        src={"/assets/OSP-Logo.webp"}
                        fill
                        unoptimized
                        alt="logo"
                        style={{ objectFit: "contain", objectPosition: "left" }}
                      />
                    </Link>
                  </div>

                  <div className="divide-y divide-gray-100 w-full flex flex-col ">
                    {t.map((item, index) => (
                      <Link key={index} href={item.slug}>
                        <button
                          type="button"
                          className={classNames(
                            pathname == item.active
                              ? "bg-[#0a3254] !text-white font-semibold"
                              : "",
                            "group flex w-full items-center rounded-full px-4 py-2 text-sm duration-300 hover:bg-[#0a3254] hover:text-white"
                          )}
                        >
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Navbar;
