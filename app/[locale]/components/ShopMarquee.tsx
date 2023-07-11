"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const shopList = [
  { id: 0, name: "amorn", cover_image: "/assets/shoplist/amorn.jpg" },
  { id: 1, name: "dtac", cover_image: "/assets/shoplist/dtac-01.png" },
  { id: 2, name: "elitis", cover_image: "/assets/shoplist/elitis-01.png" },
  { id: 3, name: "gateaux-01", cover_image: "/assets/shoplist/gateaux-01.png" },
  {
    id: 4,
    name: "kasikorn-01",
    cover_image: "/assets/shoplist/kasikorn-01.png",
  },
  { id: 5, name: "KHL-01", cover_image: "/assets/shoplist/KHL-01.png" },
  {
    id: 6,
    name: "khrongkarn-01",
    cover_image: "/assets/shoplist/khrongkarn-01.png",
  },
  {
    id: 7,
    name: "krungsri-01",
    cover_image: "/assets/shoplist/krungsri-01.png",
  },

  { id: 8, name: "lhbank-01", cover_image: "/assets/shoplist/lhbank-01.png" },
  {
    id: 9,
    name: "Starbucks-logo",
    cover_image: "/assets/shoplist/Starbucks-logo.png",
  },
  {
    id: 10,
    name: "swensen-01",
    cover_image: "/assets/shoplist/swensen-01.png",
  },
  { id: 11, name: "uob-01", cover_image: "/assets/shoplist/uob-01.png" },
  { id: 12, name: "waco", cover_image: "/assets/shoplist/waco.png" },
  { id: 13, name: "watson-01", cover_image: "/assets/shoplist/watson-01.png" },
];

const ShopMarquee: FC<Props> = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <Marquee speed={45}>
        <div className="flex items-center gap-4">
          {shopList.map((item, index) => (
            <div key={index} className="w-32 h-28 md:w-48 md:h-40 relative ">
              <Image
                fill
                src={item.cover_image}
                alt={item.name}
                unoptimized
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ShopMarquee;
