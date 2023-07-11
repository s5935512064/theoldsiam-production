// `app` directory

import Image from "next/image";
import Link from "next/link";
import FadeTransition from "../components/FadeTransition";
import dynamic from "next/dynamic";
import { absUrl } from "../../../core/absUrl";

import th from "../../../messages/th.json";
import en from "../../../messages/en.json";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ติดต่อเรา - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
  description:
    "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
  keywords: [
    "ดิโอลด์",
    "ห้างสรรพสินค้า",
    "theoldsiam",
    "ลานมิ่งเมือง",
    "ลานเฟื่องนคร",
    "แหล่งอาหารอร่อยใจกลางกรุง",
    "ห้างติดคลองถม",
    "อมร",
    "ห้างสรรพสินค้าย่านเยาวราช",
    "ผ้าไหม",
    "ผ้าไหมไทย",
    "ขนมไทย",
    "ขนมไทยอร่อย",
    "ผ้าไหมสวย",
    "เครื่องประดับ",
    "เพชร",
    "ทอง",
    "เงิน",
    "plaza",
    "themall",
    "thaimarket",
    "rattanakosin",
  ],
  authors: [{ name: "ดิ โอลด์ สยาม พลาซ่า" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title:
      "ติดต่อเรา - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    description:
      "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    siteName:
      "ติดต่อเรา - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    locale: "th_TH",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

interface Props {
  params: { locale: string };
}

// const HomeHero = dynamic(() => import("./components/SwipeeSlide/HomeHero"), {
//   ssr: false,
// });

const distance = [
  {
    id: "01",
    name: "Yodpiman River Walk",
    name_th: "ท่าเรือยอดพิมาน",
    drive: "7",
    walk: "11",
  },
  {
    id: "02",
    name: "MRT Sam Yot",
    name_th: "สถานีสามยอด",
    drive: "2",
    walk: "4",
  },
  {
    id: "03",
    name: "Memorial Bridge Pier",
    name_th: "ท่าน้ำสะพานพุธ",
    drive: "3",
    walk: "9",
  },
  {
    id: "04",
    name: "Chaina Town",
    name_th: "ไชน่าทาวน์",
    drive: "9",
    walk: "22",
  },
  {
    id: "05",
    name: "Saranrom Park",
    name_th: "สวนสราญรมย์",
    drive: "3",
    walk: "10",
  },
  {
    id: "06",
    name: "Suankularb Wittayalai School",
    name_th: "โรงเรียนสวนกุหลาบวิทยาลัย",
    drive: "1",
    walk: "4",
  },
  {
    id: "07",
    name: "Klang Hospital",
    name_th: "โรงพยาบาลกลาง",
    drive: "8",
    walk: "17",
  },
];

export default function ContactUs({ params }: Props) {
  const t = params.locale;
  const data = t == "en" ? en : th;

  return (
    <>
      <div className="w-full bg-[#f8f8f8] bg-[url('/assets/map_vector.png')] bg-fixed bg-cover bg-no-repeat bg-center flex flex-col  justify-center items-center pt-16 gap-6">
        <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-4 md:gap-6 px-6 md:px-10 mt-6 md:mt-10">
          <FadeTransition>
            <div className="flex flex-col items-center h-full gap-1">
              {t == "en" ? (
                <p className="text-2xl md:text-3xl font-semibold text-[#0a3254] font-kings_caslon uppercase text-center tracking-wider ">
                  {data.Contact.title}
                </p>
              ) : (
                <p className="text-2xl md:text-3xl font-semibold text-[#0a3254]  uppercase text-center  ">
                  {data.Contact.title}
                </p>
              )}

              {/* <p className="text-center text-sm md:text-base -mt-2">
                {data.Contact.subtitle}
              </p> */}

              <div className="w-20 h-[2px] bg-[#0a3254]" />
            </div>
          </FadeTransition>

          <section className=" md:mt-6 flex flex-col items-center gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FadeTransition>
                <div className="flex flex-col gap-4 w-full">
                  <div className=" w-full rounded-md shadow py-4 px-4 flex gap-3 lg:gap-6 relative items-center bg-white">
                    <div className="w-14 h-14 rounded-md relative overflow-hidden drop-shadow bg-[#1f6197]/25 flex-shrink-0 justify-center items-center flex">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 96 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48 8C32.52 8 20 20.52 20 36C20 57 48 88 48 88C48 88 76 57 76 36C76 20.52 63.48 8 48 8ZM48 46C42.48 46 38 41.52 38 36C38 30.48 42.48 26 48 26C53.52 26 58 30.48 58 36C58 41.52 53.52 46 48 46Z"
                          fill="#083050"
                        />
                      </svg>
                    </div>
                    <div className="px-2">
                      {t == "en" ? (
                        <p className="text-[#083050] text-lg font-semibold uppercase font-kings_caslon">
                          {data.Contact.name}
                        </p>
                      ) : (
                        <p className="text-[#083050] text-lg font-semibold uppercase">
                          {data.Contact.name}
                        </p>
                      )}

                      <p className="text-sm md:text-base">
                        {data.Contact.address}
                      </p>
                    </div>
                  </div>

                  <div className=" w-full rounded-md shadow py-4 px-4 items-center flex gap-3 lg:gap-6 relative bg-white">
                    <div className="w-14 h-14 rounded-md relative overflow-hidden drop-shadow bg-[#1f6197]/25 flex-shrink-0 justify-center items-center flex">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 96 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47.96 8C25.88 8 8 25.92 8 48C8 70.08 25.88 88 47.96 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 47.96 8ZM48 80C30.32 80 16 65.68 16 48C16 30.32 30.32 16 48 16C65.68 16 80 30.32 80 48C80 65.68 65.68 80 48 80Z"
                          fill="#083050"
                        />
                        <path
                          d="M50 28H44V52L65 64.6L68 59.68L50 49V28Z"
                          fill="#083050"
                        />
                      </svg>
                    </div>
                    <div className="px-2 ">
                      {t == "en" ? (
                        <p className="text-[#083050] text-lg font-semibold uppercase font-kings_caslon">
                          Opening hours
                        </p>
                      ) : (
                        <p className="text-[#083050] text-lg font-semibold uppercase">
                          เวลาทำการ
                        </p>
                      )}

                      <p className="text-sm md:text-base">
                        {data.Contact.openning_detail}
                      </p>
                      {/* <p className="text-sm md:text-base">
                      เสาร์-อาทิตย์ และ วันหยุดนักขัตฤกษ์ 10.00 – 19.00 น.
                    </p> */}
                    </div>
                  </div>

                  <div className=" w-full rounded-md shadow py-4 px-4 items-center flex gap-3 lg:gap-6 relative bg-white">
                    <div className="w-14 h-14 rounded-md relative overflow-hidden drop-shadow bg-[#1f6197]/25 flex-shrink-0 justify-center items-center flex">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 96 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.48 43.16C32.24 54.48 41.52 63.72 52.84 69.52L61.64 60.72C62.72 59.64 64.32 59.28 65.72 59.76C70.2 61.24 75.04 62.04 80 62.04C82.2 62.04 84 63.84 84 66.04V80C84 82.2 82.2 84 80 84C42.44 84 12 53.56 12 16C12 13.8 13.8 12 16 12H30C32.2 12 34 13.8 34 16C34 21 34.8 25.8 36.28 30.28C36.72 31.68 36.4 33.24 35.28 34.36L26.48 43.16Z"
                          fill="#083050"
                        />
                      </svg>
                    </div>
                    <div className="px-2">
                      {t == "en" ? (
                        <p className="text-[#083050] text-lg font-semibold uppercase font-kings_caslon">
                          CALL
                        </p>
                      ) : (
                        <p className="text-[#083050] text-lg font-semibold uppercase">
                          เบอร์โทรติดต่อ
                        </p>
                      )}

                      <div className="flex gap-1">
                        <a
                          href={`tel:+66991945497`}
                          className="text-sm md:text-base"
                        >
                          099-194-5497,
                        </a>
                        <a
                          href={`tel:+66222601568`}
                          className="text-sm md:text-base"
                        >
                          02-226-0156-8
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className=" w-full rounded-md shadow p-4 items-center flex gap-3 lg:gap-6 relative bg-white">
                    <div className="w-14 h-14 rounded-md relative overflow-hidden drop-shadow bg-[#1f6197]/25 flex-shrink-0 justify-center items-center flex">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 96 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48 8C30.32 8 16 10 16 24V62C16 69.72 22.28 76 30 76L24 82V84H72V82L66 76C73.72 76 80 69.72 80 62V24C80 10 65.68 8 48 8ZM30 68C26.68 68 24 65.32 24 62C24 58.68 26.68 56 30 56C33.32 56 36 58.68 36 62C36 65.32 33.32 68 30 68ZM44 44H24V24H44V44ZM66 68C62.68 68 60 65.32 60 62C60 58.68 62.68 56 66 56C69.32 56 72 58.68 72 62C72 65.32 69.32 68 66 68ZM72 44H52V24H72V44Z"
                          fill="#083050"
                        />
                      </svg>
                    </div>
                    <div className="px-2 ">
                      {t == "en" ? (
                        <p className="text-[#083050] text-lg font-semibold uppercase font-kings_caslon">
                          transportation
                        </p>
                      ) : (
                        <p className="text-[#083050] text-lg font-semibold uppercase">
                          การเดินทางรถประจำทาง
                        </p>
                      )}

                      <p className="text-sm md:text-base">
                        {" "}
                        <span className="text-[#0A3255] font-medium">
                          {t == "en" ? "Tri Phet Road :" : "ด้านถนนตรีเพชร :"}
                        </span>{" "}
                        สาย 8, 8Air, 12, 42 และ 53
                      </p>
                      <p className="text-sm md:text-base">
                        {" "}
                        <span className="text-[#0A3255] font-medium">
                          {t == "en"
                            ? "Charoen Krung Road :"
                            : "ด้านถนนเจริญกรุง :"}
                        </span>{" "}
                        สาย 1, 8, 10, 25, 42, 43, 48, 53, 73, ปอ.1, ปอ.7 และ
                        ปอ.8
                      </p>
                      <p className="text-sm md:text-base">
                        {" "}
                        <span className="text-[#0A3255] font-medium">
                          {t == "en" ? "Burapha Road :" : "ด้านถนนเจริญกรุง :"}
                        </span>{" "}
                        สาย 42
                      </p>
                      <p className="text-sm md:text-base">
                        {" "}
                        <span className="text-[#0A3255] font-medium">
                          {t == "en" ? "Phahurat Road :" : "ด้านถนนเจริญกรุง :"}
                        </span>{" "}
                        สาย 53
                      </p>
                    </div>
                  </div>
                </div>
              </FadeTransition>

              <FadeTransition>
                <div className="mt-4 md:mt-0">
                  {t == "en" ? (
                    <p className="text-[#083050] font-semibold text-2xl text-center mb-2 uppercase font-kings_caslon">
                      Nearby Places
                    </p>
                  ) : (
                    <p className="text-[#083050] font-semibold text-2xl text-center mb-2">
                      สถานที่ใกล้เคียง
                    </p>
                  )}

                  <div className="w-full relative max-w-7xl px-4 md:px-8 xxl:px-0 grid grid-cols-1 md:grid-cols-2 overflow-hidden justify-items-center gap-4 lg:gap-10">
                    {distance.map((item, index) => (
                      <div
                        key={index}
                        className="relative ml-8 distance-br max-w-sm w-full"
                      >
                        <div className="text-sm opacity-50 absolute top-2 -left-8">
                          {item.id} /
                        </div>
                        <p className=" font-semibold text-[#0A3255] uppercase ">
                          {t == "en" ? item.name : item.name_th}
                        </p>

                        <div className="inline-flex justify-center items-center flex-wrap uppercase text-sm distance">
                          <p className="drive text-xs">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"
                                />
                              </svg>
                            </span>{" "}
                            {item.drive} {t == "en" ? "MIN DRIVE" : "นาที"}
                          </p>

                          <p className="walk text-xs">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"
                                ></path>
                              </svg>
                            </span>{" "}
                            {item.walk} {t == "en" ? "MIN WALK" : "นาที"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeTransition>

              {/* <div data-aos="zoom-in" data-aos-delay="300">
                <h1 className="text-[#083050] font-bold text-xl ">
                  เส้นทางเดินรถมายัง ดิ โอลด์ สยาม   พลาซ่า
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2  md:mt-4 gap-4 ">
                  <div className=" rounded-md shadow p-4 bg-white">
                    <p className="text-[#0A3255] font-bold">เส้นทางที่ 1</p>
                    <p className="text-sm md:text-base">
                      จากสนามหลวงขับตรงมายังวังสราญรมย์
                      เลี้ยวซ้ายที่หน้ากรมการรักษาดินแดง แล้วขับตรงไปยัง
                      โรงภาพยนตร์เฉลิมกรุง เลี้ยวขวาอีกครั้งที่สี่แยกอุณากรรณ
                      ก็จะพบทางเข้าที่จอดรถ ดิ โอลด์ สยาม พลาซ่า
                      อยู่ด้านหลังเฉลิมกรุง
                    </p>
                  </div>

                  <div className="rounded-md shadow p-4 bg-white">
                    <p className="text-[#0A3255] font-bold">เส้นทางที่ 2</p>
                    <p className="text-sm md:text-base">
                      จากฝั่งธนบุรีมายังฝั่งกรุงเทพฯ ข้ามสะพานพุทธฯ
                      และขับชิดขวาตามถนนเพื่อตรงเข้าถนนตรี เพชร
                      ผ่านโรงเรียนสวนกุหลาบวิทยาลัย สี่แยกพาหุรัด
                      และกองบังคับการตำรวจจราจร ก็จะพบ ทางเข้าที่จอดรถดิ โอลด์
                      สยาม พลาซ่า อยู่ตรงข้ามกับจราจรกลาง
                    </p>
                  </div>

                  <div className="rounded-md shadow p-4 bg-white">
                    <p className="text-[#0A3255] font-bold">เส้นทางที่ 3</p>
                    <p className="text-sm md:text-base">
                      จากเยาวราชขับตรงตามถนน ผ่านสี่แยกวัดตึก สี่แยกสะพานหัน
                      ตรงเข้าถนนพีรพงษ์ ขับตามถนน ก็จะพบกับถนนบูรพา
                      ซึ่งมีทางเข้าที่จอดรถดิ โอลด์ สยาม   พลาซ่า
                    </p>
                  </div>

                  <div className="rounded-md shadow p-4 bg-white">
                    <p className="text-[#0A3255] font-bold">เส้นทางที่ 4</p>
                    <p className="text-sm md:text-base">
                      จากสี่แยกคอกวัว ขับตรงไปศาลเจ้าพ่อเสือ
                      ผ่านแยกกระทรวงมหาดไทย แล้วเลี้ยวซ้ายสี่แยก หน้า
                      ตรงไปจนถึงโรงภาพยนตร์เฉลิมกรุง
                      แล้วเลี้ยวขวาที่สี่แยกอุณากรรณไปด้านหลังเฉลิมกรุง
                      ก็จะพบทางเข้าที่จอดรถ ดิ โอลด์ สยาม   พลาซ่า
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </section>

          {/* <section className="w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[450px] h-full py-10 flex justify-center items-center  relative mt-10">
            <div className="w-full h-full absolute">
              <iframe
                // @ts-ignore
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.549843262008!2d100.500017!3d13.745682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991a1564e2fb%3A0x1804332db6dbcd22!2z4LiU4Li04LmC4Lit4Lil4LiU4LmM4Liq4Lii4Liy4Lih4Lie4Lil4Liy4LiL4LmI4Liy!5e0!3m2!1sth!2sth!4v1683016578360!5m2!1sth!2sth"
                width={"100%"}
                height={"100%"}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="contactMapFrame"
              ></iframe>
            </div>
          </section> */}
        </div>

        <section className="w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[480px] h-full py-10 flex justify-center items-center  relative mt-6 lg:mt-10">
          <div className="w-full h-full absolute">
            <iframe
              // @ts-ignore
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.549843262008!2d100.500017!3d13.745682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2991a1564e2fb%3A0x1804332db6dbcd22!2z4LiU4Li04LmC4Lit4Lil4LiU4LmM4Liq4Lii4Liy4Lih4Lie4Lil4Liy4LiL4LmI4Liy!5e0!3m2!1sth!2sth!4v1683016578360!5m2!1sth!2sth"
              width={"100%"}
              height={"100%"}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="contactMapFrame"
            ></iframe>
          </div>
        </section>
      </div>
      {/* <section className="w-full bg-red-400 flex flex-col pt-8 md:pt-10 justify-center items-center">

      </section> */}
    </>
  );
}
