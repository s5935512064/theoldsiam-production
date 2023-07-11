import dynamic from "next/dynamic";
import { absUrl } from "../../../core/absUrl";
import FadeTransition from "../components/FadeTransition";

import { Metadata } from "next";

const KeyFact = dynamic(() => import("../components/Carousel/KeyFact"), {
  ssr: false,
});

export const metadata: Metadata = {
  title:
    "เรสซิเดนซ์ - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const HeroCarousel = dynamic(
  () => import("../components/SwipeeSlide/ResidenceSlide"),
  { ssr: false }
);

const ResidenceDetail = dynamic(() => import("../components/ResidenceDetail"), {
  ssr: false,
});

const ResidencePlan = dynamic(() => import("../components/ResidencePlan"), {
  ssr: false,
});

export default function Residence({ params }: Props) {
  const t = params.locale;

  return (
    <>
      <div className="min-h-screen w-full bg-[#404040] flex flex-col items-center pb-14">
        <section className="overflow-hidden h-[85vh] md:h-screen w-full  relative flex justify-center items-end">
          <div className="absolute w-full h-full">
            <HeroCarousel />
          </div>

          <div className="absolute  w-full h-1/3 bottom-0 bg-gradient-to-t from-[#404040] mt-1" />

          <div className="p-5 max-w-[1300px] w-full h-fit  flex flex-col gap-1 items-center justify-center text-white drop-shadow-sm mb-14 md:mb-[80px] z-10 ">
            <p className="tracking-wider text-white text-3xl lg:text-5xl font-semibold drop-shadow uppercase text-center font-kings_caslon">
              Living in perfect alchemy
            </p>
            <p className=" text-white text-sm sm:text-base lg:text-xl text-center uppercase">
              of the part glory and the shiny future
            </p>
          </div>
        </section>

        <section
          id="section1"
          className="w-full  flex flex-col  md:pt-10 justify-center items-center gap-6 lg:gap-10"
        >
          <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-4 md:gap-6 px-6 md:px-10 ">
            <ResidenceDetail lang={t} />
          </div>

          <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-4 md:gap-6 px-6 md:px-10 ">
            <ResidencePlan lang={t} />
          </div>

          <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-4 md:gap-6 px-6 md:px-10 ">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 min-h-[300px]">
              <div className="w-full h-full bg-white  p-6 flex flex-col">
                <p className="font-semibold text-lg uppercase text-[#BDA27D] mb-2 font-kings_caslon">
                  PROJECT DETAILS
                </p>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Project</p>
                  </div>
                  <div>
                    <p>The Old Siam Residence</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Developer</p>
                  </div>
                  <div>
                    <p>Siam Sindhorn Co., Ltd.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Product Type</p>
                  </div>
                  <div>
                    <p>12-year leasehold residence</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Total Residence Area</p>
                  </div>
                  <div>
                    <p>17,350 sq.m.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Unit Size</p>
                  </div>
                  <div>
                    <p>95-115 sq.m.</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Total Number of Units</p>
                  </div>
                  <div>
                    <p>128 units</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Type of Units</p>
                  </div>
                  <div>
                    <p>2 Bedrooms, 2 Storeys</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[13px] md:text-sm border-b py-1">
                  <div className="w-[100px] shrink-0">
                    <p className="font-semibold">Parking</p>
                  </div>
                  <div>
                    <p>128 Car Parking Spaces (100%)</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-full bg-white  p-6 flex flex-col">
                <p className="font-semibold text-lg uppercase text-[#BDA27D] mb-2 font-kings_caslon">
                  FACILITIES
                </p>

                <ul className="list-inside list-disc grid grid-cols-2 md:grid-cols-1">
                  <li className="text-[13px] md:text-sm">Lobby</li>
                  <li className="text-[13px] md:text-sm">Reception</li>
                  <li className="text-[13px] md:text-sm">Meeting Room</li>
                  <li className="text-[13px] md:text-sm">Social Lounge</li>
                  <li className="text-[13px] md:text-sm">Mailbox</li>
                  <li className="text-[13px] md:text-sm">Fitness Room</li>
                  <li className="text-[13px] md:text-sm">Locker Rooms</li>
                  <li className="text-[13px] md:text-sm">Sky Pavilion</li>
                  <li className="text-[13px] md:text-sm">
                    Outdoor Living Area
                  </li>
                </ul>

                <p className="mt-2 text-[13px] md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus officia quia doloremque nulla ratione mollitia, sit
                  quos eius sint iure a atque vitae maxime laudantium voluptates
                  impedit iste, sed est?
                </p>
              </div>

              <div className="w-full h-full bg-white  p-6 flex flex-col gap-1">
                <p className="font-semibold text-lg uppercase text-[#BDA27D] mb-2 font-kings_caslon">
                  NEIGHBORING PLACES
                </p>

                <div className="flex flex-col -mt-1">
                  <p className="text-[13px] md:text-sm font-bold">
                    Lifestyle Malls
                  </p>

                  <ul className="list-inside list-disc grid grid-cols-1 ml-4">
                    <li className="text-[13px] md:text-sm">
                      The Old Siam Plaza
                    </li>

                    <li className="text-[13px] md:text-sm ">
                      China Town 1.3 km.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col ">
                  <p className="text-[13px] md:text-sm font-bold ">
                    World Class Renowed Attractions
                  </p>

                  <ul className="list-inside list-disc grid grid-cols-1 ml-4">
                    <li className="text-[13px] md:text-sm">The Grand Palace</li>
                    <li className="text-[13px] md:text-sm">
                      The Temple of the Emerald Buddha
                    </li>
                    <li className="text-[13px] md:text-sm">
                      The Chao Phraya River
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col ">
                  <p className="text-[13px] md:text-sm font-bold ">
                    Public Park
                  </p>

                  <ul className="list-inside list-disc grid grid-cols-1 ml-4">
                    <li className="text-[13px] md:text-sm">
                      Rommaneenart Park 0.65 km.
                    </li>
                    <li className="text-[13px] md:text-sm">
                      Saranrom Park 0.80 km.
                    </li>
                    <li className="text-[13px] md:text-sm b ">
                      Chao Phraya Sky Park 0.85 km.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col ">
                  <p className="text-[13px] md:text-sm font-bold ">
                    Academic Institutes
                  </p>

                  <ul className="list-inside list-disc grid grid-cols-1 ml-4">
                    <li className="text-[13px] md:text-sm">
                      Poh-Chang Academy of Arts 0.2 km.
                    </li>
                    <li className="text-[13px] md:text-sm">
                      Suankularb Wittayalai School 0.3 km.
                    </li>
                    <li className="text-[13px] md:text-sm">
                      Rajini School 1.0 km.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col ">
                  <p className="text-[13px] md:text-sm font-bold ">Hospital</p>

                  <ul className="list-inside list-disc grid grid-cols-1 ml-4">
                    <li className="text-[13px] md:text-sm">
                      Klang Hospital 1.6 km.
                    </li>
                    <li className="text-[13px] md:text-sm">
                      Thonburi Bamrungmuang Hospital 2.4 km.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col ">
                  <p className="text-[13px] md:text-sm font-bold ">
                    Transportation
                  </p>

                  <ul className="list-inside list-disc grid grid-cols-1 ml-4">
                    <li className="text-[13px] md:text-sm">
                      MRT Sam Yot 0.28 km.
                    </li>
                    <li className="text-[13px] md:text-sm">
                      Memorial Bridge Pier 0.75 km.
                    </li>
                    <li className="text-[13px] md:text-sm">
                      Si Rat Expressway 2.2 km.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1300px] w-full h-fit flex flex-col items-center gap-2 px-6 md:px-10 ">
            <p className="text-lg font-semibold text-[#BDA27D] font-kings_caslon uppercase tracking-wider">
              Disclaimer
            </p>

            <p className="text-xs -mt-1 text-white">
              All information, plans, specifications, images and perspectives
              contained in this brochure are for general information and
              illustrative purposes only. Illustrations are artist’s impressions
              and have been enhanced by computer graphics for reference. The
              exact construction appearance may differ from the specifications,
              images and perspectives contained in this brochure. The
              information and/or details contained herein are subject to change
              without prior notice and cannot form part of an offer,
              recommendation to purchase or contract. Siam Sindhorn Co., Ltd.
              reserves the right to make revisions of any features and amenities
              denoted in this brochure at any time.
            </p>
            <p className="text-xs  text-white">
              Project owner: Siam Sindhorn Co., Ltd. Registered capital: THB
              15,000,000,000.00 (fifteen billion baht). Registered address:
              Sindhorn Building I, 4th Floor, 130 Wireless Road, Pathumwan,
              Bangkok 10330. Site location: Land title deed No. 1250, 1241,
              1885, Wang Burapha Phirom Subdistrict, Phra Nakhon District,
              Bangkok. Approximately 13-2-42.19 rai of land, leased from the
              Crown Property Bureau for a period of 12 years. Ownership of the
              building belongs to the Project owner. Construction commencement:
              November 2022. Expected completion: march 2024.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
