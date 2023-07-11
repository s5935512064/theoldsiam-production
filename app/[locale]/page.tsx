import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import SmoothScroll from "./components/SmoothScroll";
import { BiBell } from "react-icons/bi";
import FloorDetail from "./components/FloorDetail";
import FadeTransition from "./components/FadeTransition";
import ShopMarquee from "./components/ShopMarquee";

import th from "../../messages/th.json";
import en from "../../messages/en.json";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { absUrl } from "../../core/absUrl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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
      "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    description:
      "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    siteName:
      "ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    locale: "th_TH",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  params: { locale: string };
}

const HomeHero = dynamic(() => import("./components/SwipeeSlide/HomeHero"), {
  ssr: false,
});

const ZoneCarousel = dynamic(() => import("./components/Carousel/Zone"), {
  ssr: false,
});

const KeyFact = dynamic(() => import("./components/Carousel/KeyFact"), {
  ssr: false,
});

const zone_info = [{ id: 1, name: "Ming Muang Market" }];

export default function Index({ params }: Props) {
  const t = params.locale;
  const data = t == "en" ? en : th;

  return (
    <>
      <main className="w-full relative h-full flex flex-col  ">
        <section className="h-[85vh] md:h-screen w-full relative flex justify-center items-center">
          <div className="max-w-[1300px] flex flex-col gap-1  z-20 w-full h-full items-center justify-center px-6 md:px-10">
            {t == "en" ? (
              <p className="tracking-wider text-white text-3xl lg:text-5xl font-semibold drop-shadow uppercase text-center font-kings_caslon">
                30<span className="align-top text-sm lowercase">th</span>{" "}
                Anniversary
              </p>
            ) : (
              <p className=" text-white text-3xl lg:text-5xl font-semibold drop-shadow uppercase text-center flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="">ครบรอบ 30 ปี </span>{" "}
                <span className="break-after-column flex flex-nowrap ">
                  ดิ โอลด์ สยาม พลาซ่า
                </span>
              </p>
            )}

            <p className="text-white text-sm sm:text-base lg:text-2xl text-center uppercase mt-1">
              {t == "en"
                ? " The Old Siam Plaza ,the center of silk, lace, premium jewelry, and delectable Thai food."
                : "แหล่งรวมผ้าไหม ผ้าลูกไม้ ทอง เครื่องประดับ สินค้าคุณภาพ และอาหารไทยเลิศรส"}
            </p>

            <button
              type="button"
              className="text-sm md:text-base  text-white outline-none  shadow hover:scale-110 duration-200  uppercase rounded-full  px-7 py-2 mt-4 border border-white hover:bg-[#0a3254] hover:border-none flex items-center tracking-wider"
            >
              {t == "en"
                ? "Meet the upcoming Renovation"
                : "เตรียมพบกับ โฉมใหม่ เร็วๆนี้"}
            </button>
          </div>

          <div className="absolute w-full h-full">
            <HomeHero />
          </div>

          <div className="absolute w-full h-full bg-black/40 z-10" />

          <div className="absolute w-28 h-fit bottom-[9%] z-20 cursor-pointer">
            <SmoothScroll linkTo={"section1"} />
          </div>
        </section>

        <section
          id="section1"
          className="w-full bg-[#f8f8f8]  flex flex-col  justify-center items-center pt-10 md:pt-20"
        >
          <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-7 md:gap-20 px-6 md:px-10 ">
            <div className="flex flex-col gap-1  items-center pb-4 md:pb-0">
              <FadeTransition>
                <div className="flex items-start justify-center  divide-x divide-[#0a3254]">
                  <p className="text-sm md:text-base">
                    {t == "en" ? (
                      <span className="italic text-[#0a3254] text-2xl md:text-3xl font-semibold pr-2 uppercase font-kings_caslon">
                        The Old Siam Plaza
                      </span>
                    ) : (
                      <span className=" text-[#0a3254] text-2xl md:text-3xl font-semibold pr-2 uppercase">
                        ดิ โอลด์ สยาม พลาซ่า
                      </span>
                    )}
                    {data.Index.section1}
                  </p>
                </div>
              </FadeTransition>
            </div>

            <FloorDetail lang={t} />

            <div className=" py-4 pb-10 lg:pb-10 ">
              <FadeTransition>
                <div className="flex flex-col gap-1 justify-center items-center w-full">
                  <p
                    className={classNames(
                      t == "en" ? "font-kings_caslon" : "",
                      "flex items-center gap-1 italic  text-sm"
                    )}
                  >
                    {" "}
                    <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                    {t == "en"
                      ? "Alongside for a long time"
                      : "เคียงข้างมาอย่างยาวนาน"}
                    <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                  </p>

                  <p
                    className={classNames(
                      t == "en" ? "font-kings_caslon" : "",
                      "text-2xl md:text-3xl text-center font-semibold text-[#0a3254] uppercase "
                    )}
                  >
                    {t == "en"
                      ? "Charm Of The Old Siam"
                      : "มนต์เสน่ห์แห่ง ดิ โอลด์ สยาม"}
                  </p>

                  <p className="text-sm md:text-base text-center mt-1 .">
                    {t == "en"
                      ? "A unique product with exceptional quality. We want to offer that as an experience to customers who come here to use the service."
                      : "ผลิตภัณฑ์ที่เป็นเอกลักษณ์ คัดสรรคุณภาพที่ดีเยี่ยม เพื่อมอบให้กับลูกค้าที่มาใช้บริการที่นี่"}
                  </p>
                </div>
              </FadeTransition>
            </div>
          </div>

          <div className="w-full h-[300px] md:h-[400px] relative ">
            <ZoneCarousel lang={t} />
          </div>
        </section>

        <section className="w-full  flex justify-center my-10 md:my-16 lg:my-24">
          <div className="max-w-[1300px] w-full h-fit  flex flex-col gap-10 md:gap-16 lg:gap-24 items-center  px-6  md:px-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
              <div className="w-full relative min-h-[300px] md:min-h-[400px] bg-[#fff] loading overflow-hidden">
                <div className="image w-full h-full relative">
                  <Image
                    src={"/assets/image_01.png"}
                    alt="old-theold"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              <FadeTransition>
                <div className="bg-white pt-5 md:py-5 md:pl-5 lg:p-10 flex flex-col gap-1 justify-center h-full">
                  <p className="flex items-center gap-1 italic font-kings_caslon text-sm ">
                    <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                    {t == "en" ? "Relive the legends" : "Relive the legends"}
                    {/* <span className="w-6 h-[1px] border-t border-[#0a3254] "></span> */}
                  </p>

                  <p
                    className={classNames(
                      t == "en" ? "font-kings_caslon" : "",
                      "text-2xl md:text-3xl font-semibold text-[#0a3254] uppercase inline whitespace-nowrap"
                    )}
                  >
                    {t == "en" ? "The Old Siam Plaza" : "ดิ โอลด์ สยาม พลาซ่า"}
                  </p>

                  <p className="text-[#0a3254] uppercase text-sm md:text-[15px]">
                    {t == "en"
                      ? "the classic shopping mall on rattanakosin island delights shoppers and foodies with extensive selection of silk and authentic thai sweets."
                      : "ศูนย์การค้าสุดคลาสสิกแห่งเกาะรัตนโกสินทร์ แหล่งรวมผ้าไหมและขนมไทยต้นตำรับ สวรรค์ของนักชิมและนักช้อปใจกลางกรุง"}
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    {t == "en"
                      ? "The large shopping mall was built in an architectural style popular during the reign of King Rama V. The design brilliantly blends Thai style with Western traditions of the time."
                      : "ศูนย์การค้าขนาดใหญ่ สร้างขึ้นในรูปแบบสถาปัตยกรรมสมัยรัชกาลที่ 5 ที่ผสมผสานความเป็นไทย และ ศิลปะตะวันตกเข้าด้วยกันอย่างงดงามและโดดเด่น"}
                  </p>

                  <div className="flex justify-between items-center gap-2 mt-4">
                    <button
                      type="button"
                      className="flex items-center gap-1  border border-[#0a3254] px-5 py-2 text-sm hover:bg-[#0a3254] hover:text-white duration-300"
                    >
                      {t == "en" ? " Read More" : "อ่านเพิ่มเติม"}

                      <span>
                        <HiChevronRight className="w-6 h-6" />
                      </span>
                    </button>
                  </div>
                </div>
              </FadeTransition>
            </div>

            <div className=" w-full flex flex-col gap-10">
              <FadeTransition>
                <div className="flex flex-col justify-center  w-full">
                  <p
                    className={classNames(
                      t == "en" ? "font-kings_caslon" : "",
                      "text-2xl md:text-3xl  md:text-start font-semibold text-[#0a3254] uppercase "
                    )}
                  >
                    {t == "en"
                      ? "become a strengths based location"
                      : "ทำเลที่ตั้งเป็นจุดแข็งของเรา"}
                  </p>

                  <p className="text-sm md:text-base md:text-start mt-2">
                    {t == "en"
                      ? "Prime location adjacent to the trade routes on all four sides, namely Phahurat, Triphet, Charoen Krung and Burapha, has resulted in people flocking to use the service constantly. This includes foreign tourists visiting nearby attractions such as the Grand Palace and Wat Phra Kaew or watching a Khon performance at the Sala Chalermkrung, Stopped off at the mall for some food and Thai desserts."
                      : "ด้วยความโดดเด่นของทำเลที่ตั้ง อยู่ติดกับถนนสายการค้าทั้ง 4 ด้าน คือ พาหุรัด ตรีเพชร เจริญกรุง บูรพา ทำให้มีผู้คนไหลเวียนเข้ามาใช้บริการอย่างต่อเนื่อง รวมถึงนักท่องเที่ยวชาวต่างชาติที่เข้ามาเที่ยวชมสถานที่สำคัญใกล้เคียง อาทิ พระบรมมหาราชวัง วัดพระแก้ว ชมการแสดงโขนที่ศาลาเฉลิมกรุง แวะทานอาหารและขนมไทยที่ศูนย์การค้า"}
                  </p>
                </div>
              </FadeTransition>
              <div className=" w-full h-[300px] md:min-h-[400px] relative">
                <KeyFact lang={t} />
              </div>
            </div>

            <div className="  w-full min-h-[700px]  sm:min-h-[500px] relative grid grid-cols-1 md:grid-cols-5">
              <div className="sm:col-span-2 w-full h-full relative">
                <Image
                  src={"/assets/rental_1.png"}
                  fill
                  alt="banner"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>

              <div className="sm:col-span-3 w-full h-full relative">
                <Image
                  src={"/assets/rental_2.png"}
                  fill
                  alt="banner"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </div>

              {/* <FadeTransition>
                <div className="flex flex-col justify-center   w-full">
                  <p className="text-center text-2xl md:text-3xl font-semibold text-[#0a3254] uppercase font-kings_caslon">
                    OUR PARTNERSHIP
                  </p>

                  <div className="my-4 lg:my-6">
                    <ShopMarquee />
                  </div>
                </div>
              </FadeTransition> */}
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] sm:min-h-[350px] lg:min-h-[450px] h-full py-10 flex justify-center items-center  relative">
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
      </main>
    </>
  );
}
