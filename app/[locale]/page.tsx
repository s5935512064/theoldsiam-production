"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { absUrl } from "../../core/absUrl";

import type { Metadata } from "next";
import { useEffect } from "react";

export const metadata = {
  title:
    "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
  description:
    "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
  icons: {
    icon: "/favicon.svg",
  },
};

const HomeHero = dynamic(() => import("./components/SwipeeSlide/HomeHero"), {
  ssr: false,
});

export default function Index() {
  // const t = useTranslations("Index");

  return (
    <>
      <main className="w-full relative h-full ">
        <section className="h-screen w-full relative bg-[url('/assets/slide/slide_01.webp')] bg-center bg-cover bg-no-repeat"></section>

        <section className="h-screen w-full bg-[#f8f8f8]">
          {/* <h1>{t("title")}</h1>; */}
        </section>
      </main>
    </>
  );
}
