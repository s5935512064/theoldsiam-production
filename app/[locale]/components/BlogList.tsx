"use client";

import React, {
  FC,
  useEffect,
  useState,
  useRef,
  Fragment,
  useMemo,
} from "react";
import Image from "next/image";
import {
  HiChevronRight,
  HiChevronLeft,
  HiOutlineXCircle,
  HiOutlineChevronDown,
  HiOutlineCheck,
} from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import Pagination from "./Pagination";
import Link from "next/link";
import DotLoader from "react-spinners/DotLoader";
import moment from "moment";

type MonthType = {
  id: string;
  name: string;
  value: string;
};

type MyGroupType = {
  [key: string]: MonthType;
};

type News = {
  id: number;
  cover_image: string;
  title: string;
  date: string;
  tag: Array<string>;
  highlight: boolean;
};

interface Props {
  data: Array<News>;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const input_month = [
  { id: "0", name: "January 2023", value: "January 2023" },
  { id: "1", name: "February 2023", value: "February 2023" },
  { id: "2", name: "March 2023", value: "March 2023" },
  { id: "3", name: "April 2023", value: "April 2023" },
  { id: "4", name: "May 2023", value: "May 2023" },
  { id: "5", name: "June 2023", value: "June 2023" },
  { id: "6", name: "July 2023", value: "July 2023" },
  { id: "7", name: "August 2023", value: "August 2023" },
  { id: "8", name: "September 2023", value: "September 2023" },
  { id: "9", name: "October 2023", value: "October 2023" },
  { id: "10", name: "November 2023", value: "November 2023" },
  { id: "11", name: "December 2023", value: "December 2023" },
];

const input_type = [
  { id: "0", name: "Promotion", value: "#promotion" },
  { id: "1", name: "Event", value: "#event" },
  { id: "2", name: "News", value: "#news" },
];

const input_shoptype = [
  { id: "0", name: "Accessories", value: "accessories" },
  { id: "1", name: "Bank", value: "bank" },
  { id: "2", name: "Fashion", value: "fashion" },
  { id: "3", name: "Food", value: "food" },
  { id: "4", name: "Electronic", value: "electronic" },
  { id: "5", name: "Education", value: "education" },
  { id: "6", name: "Firearm", value: "firearm" },
  { id: "7", name: "Glasses", value: "glasses" },
];

let PageSize = 10;

const BlogList: FC<Props> = ({ data }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [allFilter, setAllFilter] = useState([]);
  const [checkedModelList, setCheckedModelList] = useState([]);
  const [checkedTypeList, setCheckedTypeList] = useState([]);
  const [checkedShopType, setCheckedShopType] = useState([]);
  const [filterData, setFilterData] = useState<Array<News>>();

  let newArr: Array<News> = [];
  let resultfilter_type: any = [];
  let resultfilter_shops: any = [];
  let resultfilter_month: any = [];

  const clearFilter = () => {
    setAllFilter([]);
    setCheckedModelList([]);
    setCheckedTypeList([]);
    setCheckedShopType([]);

    setCurrentPage(1);
    setIsLoad(true);
  };

  const deleteFilter = (filterItem: any) => {
    const item = filterItem;

    const resultfilter = allFilter.filter((d, index) => {
      return d !== item;
    });

    setAllFilter(resultfilter);

    const resultfilter_1 = checkedModelList.filter((d, index) => {
      return d !== item;
    });
    setCheckedModelList(resultfilter_1);

    const resultfilter_2 = checkedTypeList.filter((d, index) => {
      return d !== item;
    });
    setCheckedTypeList(resultfilter_2);

    const resultfilter_3 = checkedShopType.filter((d, index) => {
      return d !== item;
    });
    setCheckedShopType(resultfilter_3);

    setCurrentPage(1);
  };

  const onChangeModel = (e: any) => {
    const ischecked = e.target.checked;
    const dataid = e.target.dataset.id;

    if (ischecked === true) {
      // @ts-ignore
      setCheckedModelList((prevalue) => [...prevalue, dataid]);
    } else {
      const resultfilter = checkedModelList.filter((d, index) => {
        return d !== dataid;
      });
      setCheckedModelList(resultfilter);
    }
  };

  const onChangeType = (e: any) => {
    const ischecked = e.target.checked;
    const dataid = e.target.dataset.id;

    if (ischecked === true) {
      // @ts-ignore
      setCheckedTypeList((prevalue) => [...prevalue, dataid]);
    } else {
      const resultfilter = checkedTypeList.filter((d, index) => {
        return d !== dataid;
      });
      setCheckedTypeList(resultfilter);
    }
  };

  const onChangeShopType = (e: any) => {
    const ischecked = e.target.checked;
    const dataid = e.target.dataset.id;

    if (ischecked === true) {
      // @ts-ignore
      setCheckedShopType((prevalue) => [...prevalue, dataid]);
    } else {
      const resultfilter = checkedShopType.filter((d, index) => {
        return d !== dataid;
      });
      setCheckedShopType(resultfilter);
    }
  };

  const formSubmitEvent = (e: any) => {
    e.preventDefault();
  };

  const mergeFilter = () => {
    setAllFilter([...checkedModelList, ...checkedShopType, ...checkedTypeList]);
    setCurrentPage(1);
  };

  function haveSameValue(a: Array<string>, b: Array<string>) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
          return true;
        }
      }
    }
    return false;
  }

  function sortDate() {
    newArr.sort(function (a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      // @ts-ignore
      return d - c;
    });
    setFilterData(newArr);
  }

  useEffect(() => {
    if (allFilter.length == 0) {
      newArr = data;
      sortDate();
    } else {
      if (checkedModelList.length != 0) {
        const temp = data.filter((d, index) => {
          const dataCheck = moment(d.date).format("MMMM YYYY");
          // @ts-ignore
          return checkedModelList.indexOf(dataCheck) !== -1;
        });

        // @ts-ignore
        resultfilter_month = temp;
      } else {
        // @ts-ignore
        resultfilter_month = data;
      }

      if (checkedTypeList.length != 0) {
        const temp_type = data.filter((d, index) => {
          // @ts-ignore
          return haveSameValue(d.tag, checkedTypeList);
        });

        // @ts-ignore
        resultfilter_type = temp_type;
      } else {
        // @ts-ignore
        resultfilter_type = data;
      }

      if (checkedShopType.length != 0) {
        const temp_shops = data.filter((d, index) => {
          // @ts-ignore
          return haveSameValue(d.tag, checkedShopType);
        });

        // @ts-ignore
        resultfilter_shops = temp_shops;
      } else {
        // @ts-ignore
        resultfilter_shops = data;
      }

      if (
        resultfilter_month.length != 0 &&
        resultfilter_type.length != 0 &&
        resultfilter_shops.length != 0
      ) {
        const arrs = [
          resultfilter_month,
          resultfilter_type,
          resultfilter_shops,
        ].filter((a) => a.length);
        const map = new Map();
        for (let o of arrs.flat()) {
          map.has(o.id)
            ? (map.get(o.id).count += 1)
            : map.set(o.id, { ...o, count: 1 });
        }

        const result = [];
        // @ts-ignore
        for (let [, obj] of map) {
          const { count, ...rest } = obj;
          if (count === arrs.length) result.push(rest);
        }

        newArr = result;
        sortDate();
      } else {
        const result: any = [];

        newArr = result;
        sortDate();
      }
    }
  }, [allFilter]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filterData && filterData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterData]);

  if (!currentTableData) {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <DotLoader color="#0a3254" />
      </div>
    );
  }

  return (
    <>
      <div id="section_blog" className=" flex flex-col gap-2 w-full lg:mt-6">
        <div className="border-b py-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div className="flex items-center w-full gap-1">
            <div className="flex-1 w-full h-full flex items-center gap-1 ">
              <Popover className="relative w-1/2 h-full">
                <Popover.Button
                  className={
                    "bg-white border !pl-2 px-4 py-1 text-xs w-full  border-black outline-none flex justify-between items-center"
                  }
                >
                  CATAGORY
                  <HiOutlineChevronDown className="w-3 h-3" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute  z-10 mt-2  transform md:px-4 sm:px-0 w-full min-w-[250px] ">
                    <div className="overflow-hidden border border-black  shadow-lg w-full ">
                      <div className="bg-white p-3 py-4 flex flex-col gap-2 w-full">
                        <div className="w-full flex justify-between">
                          <p className="text-xs font-semibold">CATAGORY</p>
                          <button
                            type="button"
                            onClick={() => setCheckedTypeList([])}
                            className="text-xs "
                          >
                            Clear All
                          </button>
                        </div>

                        <form
                          onSubmit={formSubmitEvent}
                          className="grid grid-cols-2 gap-x-4 gap-y-1 pb-2 border-b"
                        >
                          {input_type.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <input
                                id={item.value}
                                type="checkbox"
                                data-id={item.value}
                                name={item.name}
                                value={item.value}
                                // @ts-ignore
                                checked={checkedTypeList.includes(item.value)}
                                onChange={onChangeType}
                                // checked={monthFilter.find(
                                //   // @ts-ignore
                                //   (p) => p.value === item.value
                                // )}
                                // onChange={(e) => onChange(e)}
                                className="bg-white border w-3 h-3"
                              />
                              <label htmlFor={item.value} className="text-xs ">
                                {" "}
                                {item.name}
                              </label>
                            </div>
                          ))}
                        </form>

                        <div className="w-full flex justify-between">
                          <p className="text-xs font-semibold">STORE</p>
                          <button
                            type="button"
                            onClick={() => setCheckedShopType([])}
                            className="text-xs "
                          >
                            Clear All
                          </button>
                        </div>

                        <div className="">
                          <form
                            onSubmit={formSubmitEvent}
                            className="grid grid-cols-2 gap-x-4 gap-y-1"
                          >
                            {input_shoptype.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1"
                              >
                                <input
                                  id={item.value}
                                  type="checkbox"
                                  data-id={item.value}
                                  name={item.name}
                                  value={item.value}
                                  // @ts-ignore
                                  checked={checkedShopType.includes(item.value)}
                                  onChange={onChangeShopType}
                                  className="bg-white border w-3 h-3"
                                />
                                <label
                                  htmlFor={item.value}
                                  className="text-xs "
                                >
                                  {item.name}
                                </label>
                              </div>
                            ))}
                          </form>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

              <Popover className="relative w-1/2">
                <Popover.Button
                  className={
                    "bg-white border !pl-2 px-4 py-1 text-xs w-full  border-black outline-none flex justify-between items-center"
                  }
                >
                  MONTH
                  <HiOutlineChevronDown className="w-3 h-3" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute  z-10 mt-2 -translate-x-20 md:translate-x-0  transform md:px-4 sm:px-0 w-full min-w-[250px]">
                    <div className="overflow-hidden border border-black  shadow-lg ">
                      <div className="bg-white p-3 py-4 flex flex-col gap-2">
                        <div className="w-full flex justify-between">
                          <p className="text-xs font-semibold">MONTH</p>
                          <button
                            type="button"
                            onClick={() => setCheckedModelList([])}
                            className="text-xs "
                          >
                            Clear All
                          </button>
                        </div>

                        <div className="">
                          <form
                            onSubmit={formSubmitEvent}
                            className="grid grid-cols-2 gap-x-4 gap-y-1"
                          >
                            {input_month.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1"
                              >
                                <input
                                  id={item.value}
                                  type="checkbox"
                                  data-id={item.value}
                                  name={item.name}
                                  value={item.value}
                                  checked={checkedModelList.includes(
                                    // @ts-ignore
                                    item.value
                                  )}
                                  onChange={onChangeModel}
                                  className="bg-white border w-3 h-3"
                                />
                                <label
                                  htmlFor={item.value}
                                  className="text-xs "
                                >
                                  {" "}
                                  {item.name}
                                </label>
                              </div>
                            ))}
                          </form>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>

            <button
              type="button"
              onClick={() => mergeFilter()}
              className="text-xs  bg-[#0a3254] w-fit px-2 py-[2.5px] h-auto md:py-[5px] md:px-4  text-white flex justify-center items-center uppercase "
            >
              <span className="block md:hidden">
                <HiOutlineCheck className="w-5 h-5" />
              </span>
              <span className="hidden md:block">Submit</span>
            </button>
          </div>

          {allFilter && allFilter.length != 0 ? (
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-start ">
              <p className="text-xs font-semibold shrink-0">FILTERED BY</p>

              <div className="flex items-center gap-1 lg:gap-x-4  flex-wrap ">
                {allFilter.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => deleteFilter(item)}
                    className=" pr-1 gap-[2px] py-1 text-xs rounded-full flex justify-center items-center uppercase "
                  >
                    <span>
                      <HiOutlineXCircle className="w-4 h-4" />
                    </span>
                    {item}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={clearFilter}
                  className=" gap-[2px] py-1 px-4 text-[#0a3254]  text-xs rounded-full flex justify-center items-center uppercase bg-[#0a3254]/25 outline-none hover:bg-[#0a3254]/80 hover:text-white duration-200 transition-all"
                >
                  Clear All
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {currentTableData.length != 0 ? (
            currentTableData.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 md:gap-6 md:items-center h-full relative w-full border-b py-2 pb-4 md:py-4"
              >
                <div
                  id="bussiness_card"
                  className="w-36 h-36 md:w-44 md:h-44  relative shrink-0 bg-[#fff] loading overflow-hidden"
                >
                  <Link legacyBehavior href={`/promotionevent/ssd202316062026`}>
                    <a
                      aria-label="news"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="image w-full h-full relative cursor-pointer"
                    >
                      <Image
                        src={item.cover_image}
                        alt={item.title}
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="w-full h-full"
                      />
                    </a>
                  </Link>
                </div>

                <div className="flex flex-col gap-2  w-full h-full">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm md:text-base font-semibold">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm ">
                      Lorem ipsum dolor sit amet consectetur adipisicing..
                    </p>

                    <p className="text-xs md:text-sm "> {item.date}</p>
                  </div>

                  <Link legacyBehavior href={`/promotionevent/ssd202316062026`}>
                    <a
                      aria-label="news"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1  border border-[#0a3254] px-4 py-1 text-xs md:text-sm  hover:bg-[#0a3254] hover:text-white duration-300 w-fit mt-2"
                    >
                      More Detail
                      <span>
                        <HiChevronRight className="w-6 h-6" />
                      </span>
                    </a>
                  </Link>

                  <div className="flex items-center flex-wrap gap-1">
                    {item.tag.map((item, index) => (
                      <p key={index} className="text-xs">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-2 flex items-center justify-center min-h-[200px]">
              <p className="text-xs md:text-sm ">ไม่มีรายการที่จะแสดง</p>
            </div>
          )}
        </div>

        <div className="w-full mt-5 flex justify-center">
          <Pagination
            linkTo={"section_blog"}
            currentPage={currentPage}
            totalCount={filterData ? filterData.length : 0}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default BlogList;
