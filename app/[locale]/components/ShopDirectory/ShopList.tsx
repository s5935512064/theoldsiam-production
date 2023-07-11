"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import DotLoader from "react-spinners/DotLoader";
import { HiPlay, HiOutlineXCircle } from "react-icons/hi2";
import shops from "../../../../messages/shops.json";

interface Props {
  lang: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const filterList = [
  { id: 0, name: "ALL", name_th: "ALL", value: "all", type: "all" },

  { id: 1, name: "G FL.", name_th: "G FL.", value: "gfloor", type: "floor" },
  { id: 2, name: "1 FL.", name_th: "1 FL.", value: "1floor", type: "floor" },
  { id: 3, name: "2 FL.", name_th: "2 FL.", value: "2floor", type: "floor" },
  { id: 4, name: "3 FL.", name_th: "3 FL.", value: "3floor", type: "floor" },
  { id: 5, name: "4 FL.", name_th: "4 FL.", value: "4floor", type: "floor" },

  {
    id: 6,
    name: "Fashion",
    name_th: "แฟชั่น",
    value: "fashion",
    type: "category",
  },
  {
    id: 7,
    name: "Lifestyles",
    name_th: "ไลฟ์สไตล์",
    value: "lifestyles",
    type: "category",
  },
  {
    id: 8,
    name: "Watch & Jewelry",
    name_th: "นาฬิกา / เครื่องประดับ",
    value: "watchandjewelry",
    type: "category",
  },
  {
    id: 9,
    name: "Firearm & Equipment",
    name_th: "อาวุธปืน / อุปกรณ์",
    value: "firearm",
    type: "category",
  },
  {
    id: 10,
    name: "Electronics",
    name_th: "เครื่องใช้ไฟฟ้า / อิเล็กทรอนิกส์",
    value: "electronic",
    type: "category",
  },
  {
    id: 11,
    name: "Beauty & Spa",
    name_th: "ความงาม / สปา",
    value: "beauty",
    type: "category",
  },
  {
    id: 12,
    name: "Property Consultants",
    name_th: "ที่ปรึกษาทางด้านอสังหาริมทรัพย์",
    value: "property",
    type: "category",
  },
  {
    id: 13,
    name: "Banking",
    name_th: "สถาบันการเงิน",
    value: "banking",
    type: "category",
  },
  {
    id: 14,
    name: "Optics & Eyewear",
    name_th: "แว่นตา",
    value: "Eyewear",
    type: "category",
  },
  {
    id: 15,
    name: "Café & Restaurant",
    name_th: "ร้านอาหาร / คาแฟ่",
    value: "food",
    type: "category",
  },
  {
    id: 16,
    name: "Tutoring Institute",
    name_th: "สถาบันกวดวิชา",
    value: "tutoring",
    type: "category",
  },
  {
    id: 17,
    name: "Spacialty shop",
    name_th: "ร้านค้าอื่นๆ ในศูนย์การค้า",
    value: "othershops",
    type: "category",
  },
];

const ShopList: FC<Props> = ({ lang }): JSX.Element => {
  const [isLoad, setIsLoad] = useState(false);
  const [activeFilter, setActiveFilter] = useState(filterList[0]);
  const [allShop, setAllShop] = useState(shops);

  const resultFilter =
    activeFilter &&
    allShop.filter((p) => p.shop_tag.indexOf(activeFilter.value) !== -1);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  }, []);

  if (!isLoad || !allShop) {
    return (
      <div className="w-full h-full flex justify-center items-center absolute">
        <DotLoader color="#0a3254" />
      </div>
    );
  }

  return (
    <>
      <div className="h-full w-full flex flex-col  gap-4 ">
        {/* <p>เตรียมพบกับร้านค้าชั้นนำ ได้ที่ ดิ โอลด์ สยาม พลาซ่า เร็วๆ นี้</p> */}
        <p className="flex gap-2">
          SHOP DIRECTORY{" "}
          <span className="uppercase text-[#0a3254] font-semibold flex gap-1 items-center">
            {activeFilter.name}
            <HiOutlineXCircle
              onClick={() => setActiveFilter(filterList[0])}
              className={classNames(
                activeFilter.id == 0 ? "hidden" : "w-4 h-4 cursor-pointer"
              )}
            />
          </span>
        </p>

        <div className="w-full grid grid-cols-4 gap-6">
          <div className="flex-col flex">
            <div className="hidden md:block">
              <p className="bg-[#0a3254] text-white px-4 py-2 uppercase">
                Shop Directory
              </p>

              <div className="flex flex-col mt-2">
                {filterList
                  .filter((p) => p.type == "floor")
                  .map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setActiveFilter(item)}
                      className={classNames(
                        activeFilter.value == item.value
                          ? "bg-[#0a3254]/25 text-[#0a3254]"
                          : "",
                        "uppercase pl-2 py-2 border-b text-left flex gap-2 items-center hover:text-[#0a3254] hover:bg-[#0a3254]/25  duration-200 transition-all outline-none text-sm border-none"
                      )}
                    >
                      <span>
                        <HiPlay className="w-2 h-2" />
                      </span>
                      {lang == "en" ? item.name : item.name_th}
                    </button>
                  ))}
              </div>
            </div>

            <div className="mt-4 hidden md:block">
              <p className="bg-[#0a3254] text-white px-4 py-2 uppercase ">
                Shop Directory
              </p>

              <div className="flex flex-col mt-2 divide-y-2">
                {filterList
                  .filter((p) => p.type == "category")
                  .map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setActiveFilter(item)}
                      className={classNames(
                        activeFilter.value == item.value
                          ? "bg-[#0a3254]/25 text-[#0a3254]"
                          : "",
                        "uppercase pl-2 py-2 border-b  text-left flex gap-2 items-center hover:text-[#0a3254] hover:bg-[#0a3254]/25 duration-200 transition-all outline-none text-sm border-none"
                      )}
                    >
                      <span>
                        <HiPlay className="w-2 h-2" />
                      </span>
                      {lang == "en" ? item.name : item.name_th}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          {activeFilter.value == "4floor" ? (
            <div className="col-span-4 md:col-span-3 flex justify-center items-center">
              <p>THE OLD SIAM RESIDENCE</p>
            </div>
          ) : (
            <div className="col-span-4 md:col-span-3  gap-2 md:gap-6 grid grid-cols-3 lg:grid-cols-4 md:overflow-scroll max-h-screen scrollbar-hide pb-28 h-fit">
              {resultFilter.map((item, index) => (
                <div
                  key={index}
                  className="h-fit w-full relative  p-3 border  flex flex-col justify-center items-center "
                >
                  <div
                    id="bussiness_card"
                    className="h-[100px]  sm:h-40 md:h-36  lg:h-36 xl:h-44 w-full relative shrink-0 bg-[#fff] loading overflow-hidden"
                  >
                    <Image
                      fill
                      alt={item.shop_name}
                      src={item.shop_logo}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>

                  {/* <div>
                    <p className="uppercase font-semibold"> {item.shop_name}</p>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopList;
