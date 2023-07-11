import "../globals.css";
import "../cookieconsent.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Transition from "./components/Transition";
import React, { FC, useEffect, useState, useRef } from "react";
import axios from "axios";
import AOS from "aos";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "next/navigation";

import { i18n } from "../../i18n-config";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body className="min-h-screen w-full h-full flex flex-col items-center  ">
        <Navbar />
        <Transition>{children}</Transition>
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
