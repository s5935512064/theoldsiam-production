import Image from "next/image";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Link from "next/link";
import dynamic from "next/dynamic";
import { absUrl } from "../../core/absUrl";
import { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import { BiBell } from "react-icons/bi";
import FloorDetail from "./components/FloorDetail";

export const metadata: Metadata = {
  title:
    "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
  description:
    "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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
  authors: [{ name: "ดิ โอลด์ สยาม ช้อปปิ้ง พลาซ่า" }],
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
      "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    description:
      "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    siteName:
      "ดิโอลด์ สยาม ช้อปปิ้ง พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    locale: "th_TH",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

const HomeHero = dynamic(() => import("./components/SwipeeSlide/HomeHero"), {
  ssr: false,
});

const ZoneCarousel = dynamic(() => import("./components/Carousel/Zone"), {
  ssr: false,
});

const zone_info = [{ id: 1, name: "Ming Muang Market" }];

export default function Index() {
  // const t = useTranslations("Index");

  return (
    <>
      <main className="w-full relative h-full flex flex-col ">
        <section className="h-screen w-full relative flex justify-center items-center ">
          <div className="max-w-[1440px] flex flex-col gap-1  z-20 w-full h-full items-center justify-center ">
            <p className="text-white text-6xl font-semibold drop-shadow uppercase">
              30<span className="align-top text-sm lowercase">th</span>{" "}
              Anniversary
            </p>
            <p className="text-white text-2xl ">
              The Old Siam Plaza ,the center of silk, lace, premium jewelry, and
              delectable Thai food.
            </p>

            <button
              type="button"
              className="text-white outline-none border-none shadow hover:scale-110 duration-200  uppercase rounded-full  px-7 py-2 mt-4 bg-[#0a3254] flex items-center tracking-wider"
            >
              {/* <BiBell className="w-5 h-5 shrink-0 mr-2" /> */}
              Meet the upcoming Renovation
            </button>
          </div>

          <div className="absolute w-full h-full">
            <HomeHero />
          </div>

          <div className="absolute w-full h-full bg-black/40 z-10" />

          <div className="absolute w-28 h-fit bottom-[9%] z-20 cursor-pointer">
            <SmoothScroll linkTo={"section1"} />
            {/* <Link href="#section1">
              <button
                type="button"
                className="arrow-exp text-white drop-shadow-2xl  h-full outline-none text-xs sm:text-sm "
              >
                SCROLL
              </button>
            </Link> */}
          </div>
        </section>

        <section
          id="section1"
          className="w-full bg-[#f8f8f8]  flex flex-col pt-10 justify-center items-center"
        >
          <div className="max-w-[1440px] w-full h-fit  grid grid-cols-3 gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-1 col-span-3 items-center ">
              {/* <p className="italic">The Old Siam Plaza</p> */}

              {/* <div className="flex items-center gap-1">
                <div>
                  <p className="text-[#0a3254] text-9xl font-semibold pr-2 uppercase font-kings_caslon">
                    T
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-[#0a3254] text-3xl font-semibold pr-2 uppercase font-kings_caslon">
                    he Old Siam Plaza
                  </p>
                  <p className="text-sm max-w-lg">
                    is a unique business district. It is a gold business center,
                    jewelry, diamonds, weapons, Thai fabric center, the
                    country's largest center of imported lace from abroad, a
                    food center, famous Thai desserts and a comfortable
                    residence in the city center, adjacent to Sam Yot Station,
                    It is the first mixed-use project on Rattanakosin Island,
                    and is the largest plaza in this location.
                  </p>
                </div>
              </div> */}

              <div className="flex items-start justify-center  divide-x divide-[#0a3254]">
                <p className=" text-slate-900 ">
                  <span className="italic text-[#0a3254] text-3xl font-semibold pr-2 uppercase font-kings_caslon">
                    The Old Siam Plaza
                  </span>{" "}
                  is a unique business district. It is a gold business center,
                  jewelry, diamonds, weapons, Thai fabric center, the country's
                  largest center of imported lace from abroad, a food center,
                  famous Thai desserts and a comfortable residence in the city
                  center, adjacent to Sam Yot Station, It is the first mixed-use
                  project on Rattanakosin Island, and is the largest plaza in
                  this location.
                </p>
              </div>
            </div>

            <div className="col-span-3 grid grid-cols-2 w-full mt-10">
              <div className="bg-white p-10 flex flex-col justify-center shadow">
                <div className="flex items-center gap-4">
                  {/* <div>
                    <p className="text-9xl tracking-tight text-[#0a3254] font-semibold">
                      1F
                    </p>
                  </div> */}

                  <div className="flex flex-col items-center">
                    <p className="flex items-center gap-1 italic font-kings_caslon text-sm ">
                      {" "}
                      <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                      Mixed-Use Experience
                      <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                    </p>
                    <p className="text-3xl font-semibold text-[#0a3254] font-kings_caslon uppercase ">
                      Mingmuang Market
                    </p>
                    <p className="text-center mt-2">
                      1st floor of plaza, The center of diamond shops, leading
                      gold shops imported lace fabric, jewelry shops and ancient
                      Thai desserts that are famous for a long time.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2 mt-5 ">
                  {/* <div>
                    <p>#ผ้าไหม #ผ้าไทย</p>
                  </div> */}

                  <div className="flex gap-2">
                    <button
                      type="button"
                      id="button_next"
                      className=" w-10 h-10 rounded-full border border-black flex justify-center items-center "
                    >
                      <HiChevronLeft
                        id="item_right"
                        className="w-8 h-8 hover:scale-125 duration-200 "
                      />
                    </button>
                    <button
                      type="button"
                      id="button_next"
                      className="w-10 h-10 rounded-full border border-black flex justify-center items-center"
                    >
                      <HiChevronRight
                        id="item_right"
                        className="w-8 h-8  hover:scale-125 duration-200 translate-x-[2px]"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full relative h-[400px]">
                <Image
                  src={"/assets/3.webp"}
                  alt="store"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>

            <FloorDetail />

            <div className="col-span-3 flex flex-col justify-center items-center w-full mt-10 my-5">
              {/* <div className="flex items-center gap-1">
                <div>
                  <p className="text-8xl font-semibold text-[#0a3254] uppercase font-kings_caslon">
                    C
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="text-3xl font-semibold text-[#0a3254] uppercase font-kings_caslon">
                    harme Of The Old Siam
                  </p>
                  <p className="text-sm max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam officiis excepturi necessitatibus.
                  </p>
                </div>
              </div> */}

              <p className="flex items-center gap-1 italic font-kings_caslon text-sm ">
                {" "}
                <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
                Alongside for a long time
                <span className="w-6 h-[1px] border-t border-[#0a3254] "></span>
              </p>

              <p className="text-3xl font-semibold text-[#0a3254] uppercase font-kings_caslon">
                Charme Of The Old Siam
              </p>

              <p className="text-center mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                nobis vero esse quam facilis officia veritatis quasi alias
                aperiam accusantium? Totam doloremque quae harum aspernatur
                itaque officiis iusto recusandae placeat.
              </p>

              {/* <p className="text-center  uppercase">
                The first mixed-use project on Rattanakosin Island
              </p> */}
            </div>
          </div>

          <div className="w-full h-[400px] relative">
            <ZoneCarousel />
          </div>
          {/* <h1>{t("title")}</h1>; */}
        </section>

        <section className="w-full bg-white flex justify-center  ">
          <div className="max-w-[1440px] w-full h-fit  grid grid-cols-3 gap-6 p-6 md:p-10">
            <div className="col-span-3 grid grid-cols-2 w-full mt-5">
              <div className="w-full relative h-[400px]">
                <Image
                  src={"/assets/image_01.png"}
                  alt="old-theold"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              <div className="bg-white p-10 flex flex-col gap-2 justify-center">
                <p className="text-2xl font-semibold -mt-2">The Old Siam </p>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima minus dicta facilis neque provident consequatur,
                  dignissimos molestiae ab ipsa temporibus.
                </p>

                <p className="mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  exercitationem debitis corporis asperiores eaque aliquam sunt
                  eligendi, consequuntur vero numquam totam optio ipsum
                  consectetur deserunt ad est! Omnis, quo suscipit?
                </p>

                <div className="flex justify-between items-center gap-2 mt-2">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full border border-black px-5 py-1 text-sm"
                  >
                    อ่านต่อ
                    <span>
                      <HiChevronRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full grid grid-cols-3 gap-4 mt-5">
              <div className="w-full h-96 relative bg-slate-400"></div>
              <div className="w-full h-96 relative bg-slate-400"></div>
              <div className="w-full h-96 relative bg-slate-400"></div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[400px] md:min-h-[500px] h-full py-10 flex justify-center items-center  relative">
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
