// `app` directory

import Image from "next/image";
import Link from "next/link";
import {
  HiChevronRight,
  HiChevronLeft,
  HiOutlineXCircle,
} from "react-icons/hi";
import FadeTransition from "../components/FadeTransition";
import dynamic from "next/dynamic";
import { absUrl } from "../../../core/absUrl";
import BlogList from "../components/BlogList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "โปรโมชั่น - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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
      "โปรโมชั่น - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    description:
      "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    siteName:
      "โปรโมชั่น - ดิโอลด์ สยาม   พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const NewsHighlight = dynamic(
  () => import("../components/Carousel/NewsHighlight"),
  { ssr: false }
);

const temp_news = [
  {
    id: 0,
    cover_image: "/assets/promotions/01_eifel.jpg",
    title:
      "วันนี้ Café Eiffel on tour พร้อมเสิร์ฟความอร่อย ที่ดิโอลด์ สยาม พลาซ่า",
    date: "April 27, 2023",
    tag: ["#promotion", "#desserts"],
    highlight: true,
  },
  {
    id: 1,
    cover_image: "/assets/promotions/02_theold.jpg",
    title: "What’s your favourite Food",
    date: "April 27, 2023",
    tag: ["#promotion", "#food"],
    highlight: true,
  },
  {
    id: 2,
    cover_image: "/assets/promotions/03_kohlangwang.jpg",
    title: "ขอเชิญชมการประกวดขับร้องเพลงสากล ยุค“โก๋หลังวัง”",
    date: "May 20, 2023",
    tag: ["#event"],
    highlight: true,
  },
  {
    id: 3,
    cover_image: "/assets/promotions/04_theoldresidence.jpg",
    title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
    date: "May 15, 2023",
    tag: ["#news", "#residence"],
    highlight: true,
  },
  {
    id: 4,
    cover_image: "/assets/promotions/02_osp_apichai/01.webp",
    title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
    date: "May 15, 2023",
    tag: ["#news", "#residence"],
    highlight: true,
  },
  {
    id: 5,
    cover_image: "/assets/promotions/01_eifel.jpg",
    title:
      "วันนี้ Café Eiffel on tour พร้อมเสิร์ฟความอร่อย ที่ดิโอลด์ สยาม พลาซ่า",
    date: "May 27, 2023",
    tag: ["#promotion", "#desserts"],
    highlight: true,
  },
  {
    id: 6,
    cover_image: "/assets/promotions/02_theold.jpg",
    title: "What’s your favourite Food",
    date: "June 27, 2023",
    tag: ["#promotion", "#food"],
    highlight: true,
  },
  {
    id: 7,
    cover_image: "/assets/promotions/03_kohlangwang.jpg",
    title: "ขอเชิญชมการประกวดขับร้องเพลงสากล ยุค“โก๋หลังวัง”",
    date: "June 20, 2023",
    tag: ["#event"],
    highlight: true,
  },
  {
    id: 8,
    cover_image: "/assets/promotions/04_theoldresidence.jpg",
    title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
    date: "June 15, 2023",
    tag: ["#news", "#residence"],
    highlight: false,
  },
  {
    id: 9,
    cover_image: "/assets/promotions/02_osp_apichai/01.webp",
    title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
    date: "June 15, 2023",
    tag: ["#news", "#residence"],
    highlight: false,
  },
  {
    id: 10,
    cover_image: "/assets/promotions/01_eifel.jpg",
    title:
      "วันนี้ Café Eiffel on tour พร้อมเสิร์ฟความอร่อย ที่ดิโอลด์ สยาม พลาซ่า",
    date: "June 27, 2023",
    tag: ["#promotion", "#desserts"],
    highlight: false,
  },
  {
    id: 11,
    cover_image: "/assets/promotions/02_theold.jpg",
    title: "What’s your favourite Food",
    date: "July 27, 2023",
    tag: ["#promotion", "#food"],
    highlight: false,
  },
  {
    id: 12,
    cover_image: "/assets/promotions/03_kohlangwang.jpg",
    title: "ขอเชิญชมการประกวดขับร้องเพลงสากล ยุค“โก๋หลังวัง”",
    date: "July 20, 2023",
    tag: ["#event"],
    highlight: false,
  },
  {
    id: 13,
    cover_image: "/assets/promotions/04_theoldresidence.jpg",
    title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
    date: "July 15, 2023",
    tag: ["#news", "#residence"],
    highlight: false,
  },
  {
    id: 14,
    cover_image: "/assets/promotions/02_osp_apichai/01.webp",
    title: "ครบรอบ 30 ปี เตรียมพบกับ ดิโอลด์ สยาม พลาซ่า โฉมใหม่เร็วๆนี้",
    date: "July 15, 2023",
    tag: ["#news", "#residence"],
    highlight: false,
  },
];

export default function PromotionEvent({ params }: Props) {
  const t = params.locale;

  return (
    <>
      <div className="w-full bg-[#f8f8f8]  flex flex-col  justify-center items-center pt-16 gap-6">
        <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-4 md:gap-6 px-6 md:px-10 mt-6 lg:mt-10 pb-20">
          <FadeTransition>
            <div className="flex flex-col items-center h-full  gap-1  ">
              {t == "en" ? (
                <p className="text-2xl md:text-3xl font-semibold text-[#0a3254] font-kings_caslon uppercase text-center tracking-wider ">
                  PROMOTIONS <span className="font-serif">&</span> EVENT
                </p>
              ) : (
                <p className="text-2xl md:text-3xl font-semibold text-[#0a3254]  uppercase   ">
                  โปรโมชั่น ข่าวสาร และกิจกรรม
                </p>
              )}

              <div className="w-20 h-[2px] bg-[#0a3254]" />

              {/* <p className="text-center text-sm md:text-base -mt-2">
                
              </p> */}
            </div>
          </FadeTransition>

          <section className=" flex flex-col items-center justify-center gap-6 w-full mt-4">
            <div className=" w-full h-[250px]  lg:min-h-[300px] ">
              <NewsHighlight data={temp_news} />
            </div>

            <BlogList data={temp_news} />
          </section>
        </div>
      </div>
    </>
  );
}
