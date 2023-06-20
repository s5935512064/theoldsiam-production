import "../globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Transition from "./components/Transition";
import React, { FC, useEffect, useState, useRef } from "react";

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
        <Transition children={children} />

        <Footer />
      </body>
    </html>
  );
}
