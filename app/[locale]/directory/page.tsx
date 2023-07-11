import Image from "next/image";
import Link from "next/link";
import FadeTransition from "../components/FadeTransition";
import dynamic from "next/dynamic";
import { absUrl } from "../../../core/absUrl";
import { Metadata } from "next";
import ShopList from "../components/ShopDirectory/ShopList";

export const metadata: Metadata = {
  title:
    "ไดเรคทอรี่ - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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
      "ไดเรกทอรี่ - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    description:
      "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    siteName:
      "ไดเรคทอรี่ - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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

export default function Directory({ params }: Props) {
  const t = params.locale;

  return (
    <>
      <div className="w-full h-full min-h-max bg-[#f8f8f8]  flex flex-col  justify-center items-center pt-16 gap-6 ">
        <div className="max-w-[1300px] w-full h-full flex flex-col items-center gap-4 md:gap-6 px-6 md:px-10 mt-6 lg:mt-10 pb-20">
          <FadeTransition>
            <div className="flex flex-col items-center h-full  gap-1">
              <p
                className={classNames(
                  t == "en" ? "font-kings_caslon " : "",
                  "text-2xl md:text-3xl font-semibold text-[#0a3254] uppercase text-center tracking-wider"
                )}
              >
                {t == "en" ? "DIRECTORY" : "ไดเรกทอรี่"}
              </p>

              <div className="w-20 h-[2px] bg-[#0a3254]" />

              {/* <p className="text-center text-sm md:text-base -mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti quaerat quod corrupti eum iure eius.
              </p> */}
            </div>
          </FadeTransition>

          <section className="min-h-[500px]  flex flex-col  gap-6 w-full relative ">
            <ShopList lang={t} />
          </section>
        </div>
      </div>
    </>
  );
}
