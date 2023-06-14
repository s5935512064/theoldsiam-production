import "../globals.css";

import React, { FC, useEffect, useState, useRef } from "react";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface Props {
  children: React.ReactNode;
  params: any;
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="min-h-screen w-full h-full flex flex-col items-center ">
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
