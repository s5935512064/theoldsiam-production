import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import DotLoader from "react-spinners/DotLoader";
import ReactShared from "../../components/ReactShared";

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
      "ดิโอลด์ สยาม   พลาซ่า ศูนย์การค้าใจกลางกรุง  ย่านเยาวราช  แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
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

type Product = {
  id: string;
  created_time: string;
  from: Array<{ id: string; name: string }>;
  permalink_url: string;
  full_picture: string;
  message: string;
  message_tags: Array<{
    id: string;
    name: string;
    length: number;
    offset: number;
  }>;
};

interface PropductProps {
  productSelect: Product;
}

const news_input = [
  {
    id: "ssd202305111528",
    created_time: "2023-05-14T05:25:34+0000",
    from: [
      {
        id: "117222022987893",
        name: "Living in Sindhorn Village on Langsuan road.",
      },
    ],
    permalink_url: "/news/ssd202305111528",
    full_picture: "/assets/News/01_village/01 Living in Sindhorn Village.webp",
    message:
      "You can be surrounding environment that makes rest and relaxation the most discernible experience when living in Sindhorn Village.",
    message_tags: [
      {
        id: "4866705043406587",
        length: 10,
        name: "#BKKDW2023",
        offset: 269,
      },
    ],
  },
  {
    id: "ssd202316062026",
    created_time: "2023-06-16T05:25:34+0000",
    from: [
      {
        id: "117222022987893",
        name: "จากอดีตถึงปัจจุบันของ ‘ดิโอลด์สยาม’ และ ‘เสน่ห์’ ในวันที่ปรับโฉมใหญ่ในรอบ 30 ปี",
      },
    ],
    permalink_url: "/news/ssd202316062026",
    full_picture: "/assets/News/02_osp_apichai/01.webp",
    message:
      "จากอดีตถึงปัจจุบันของ ‘ดิโอลด์สยาม’ และ ‘เสน่ห์’ ในวันที่ปรับโฉมใหญ่ในรอบ 30 ปี",
    message_tags: [
      {
        id: "4866705043406587",
        length: 10,
        name: "#BKKDW2023",
        offset: 269,
      },
    ],
  },
];

const CHILD_VARIANTS_SCALE = {
  visible: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 1, scale: 1 },
};

export default function Page({ productSelect }: PropductProps) {
  //   const searchParams = useSearchParams();

  let temp = "ssd202316062026";

  //   const { query } = useRouter();

  const Blogs = () => {
    if (temp == "ssd202316062026") {
      return (
        <>
          <div className="h-[75vh] md:h-[85vh] w-full flex justify-center items-center relative">
            <Image
              src={"/assets/promotions/02_osp_apichai/slide_03.webp"}
              fill={true}
              priority={true}
              unoptimized
              alt="background"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute w-full h-full  bg-gradient-to-t from-black/50" />

            <div className="max-w-[1280px] w-full h-full px-5 md:px-10 py-10 flex flex-col gap-2 items-center justify-end relative z-10">
              <div className="flex flex-col gap-2 justify-center items-center -mt-4 ">
                <p
                  data-aos="zoom-in"
                  className="text-2xl sm:text-3xl md:text-5xl  text-white  w-full text-center font-semibold tracking-wider"
                >
                  จากอดีตถึงปัจจุบันของ &quot;ดิโอลด์สยาม&quot; และ
                  &quot;เสน่ห์&quot; ในวันที่ปรับโฉมใหญ่ในรอบ 30 ปี
                </p>
                {/* <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-lg sm:text-xl md:text-2xl text-white  w-full text-center font-light -mt-1"
                >
                  on LANGSUAN ROAD
                </p> */}
              </div>
            </div>
          </div>

          <div className="h-fit w-full bg-white relative flex flex-col justify-center items-center pb-28 md:pb-40">
            <div className="max-w-[1280px] w-full h-full px-5 md:px-10 pt-5 md:pt-10 py-5 flex flex-col gap-4 items-center justify-center relative z-10">
              <div className="flex flex-col gap-1">
                <p className="text-lg sm:text-xl md:text-2xl  text-black  w-full  font-medium ">
                  เมื่อไม่นานมานี้ ‘ดิโอลด์สยาม’
                  ศูนย์การค้าที่ยังคงกลิ่นอายของความเก่าแก่
                  และเสน่ห์ของสินค้าที่สะท้อนความเป็นไทยทั้งผ้าไหม เครื่องเพชร
                  และขนมไทย ได้ประกาศโฉมครั้งใหญ่ในรอบ 30 ปี ทำให้หลายคนสงสัยว่า
                  การปรับโฉมครั้งนี้จะเป็นอย่างไร
                  และเสน่ห์ต่อจากนี้จะคงเอกลักษณ์เดิมไป
                  หรือจะแปลงร่างเน้นความทันสมัยเหมือนกับศูนย์การค้าอื่น
                </p>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-9 ">
                <div className="flex flex-col  items-center ">
                  <p className="text-sm md:text-base text-start ">
                    เพื่อให้ได้คำตอบดังกล่าว
                    ในช่วงสายของวันหนึ่งเราจึงได้มีนัดพูดคุยกับ{" "}
                    <span className="font-semibold px-1">
                      คุณอภิชัย สิริดำรงพันธุ์
                    </span>
                    ผู้ช่วยกรรมการผู้จัดการกลุ่มธุรกิจอาคารพาณิชย์ บริษัท
                    สยามสินธร จำกัด ผู้บริหารดิโอลด์สยาม ที่ศูนย์การค้าแห่งนี้
                  </p>
                  <p className="text-sm md:text-base text-start mt-4 ">
                    เมื่อเราไปถึงก็ได้เห็นอาคารสไตล์โคโรเนียลที่ภายนอกมีการปรับปรุงซ่อมแซม
                    ขณะที่ภายในร้านค้าต่างๆ
                    ยังคงเปิดให้บริการตามปกติทั้งร้านผ้าไหม
                    ร้านเครื่องประดับเพชร
                    และลานมิ่งเมืองที่รวบรวมอาหารและขนมไทยชื่อดังไว้ให้เลือกมากมาย
                  </p>

                  <p className="text-base md:text-lg text-center md:text-start bg-[#0a3254] text-white p-4 mt-4 w-full ">
                    “การปรับโฉมที่นี้เราจะไม่ปิดให้บริการ
                    ยังคงเปิดตามปกติให้คนมาจับจ่ายเหมือนเดิม”
                    คุณอภิชัยเริ่มต้นการสนทนากับเรา
                  </p>
                </div>

                <div className="col-span-2 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] relative overflow-hidden mt-4 md:mt-0">
                  <div className="image w-full absolute">
                    <Image
                      src={"/assets/promotions/02_osp_apichai/01.webp"}
                      fill
                      unoptimized
                      alt="logo"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3 md:gap-4 md:mt-5">
                <p className="text-lg sm:text-xl md:text-2xl  text-black  w-full  font-medium ">
                  จาก “ตลาดมิ่งเมือง” สู่ “ดิโอลด์สยาม”
                </p>

                <p className="text-sm md:text-base text-start ">
                  <span className="font-semibold pr-2">คุณอภิชัย :</span>
                  เดิมทีที่นี้เป็นตลาดมิ่งเมืองที่ก่อตั้งมาตั้งแต่ปี พ.ศ. 2475
                  มีพื้นที่ประมาณ 14 ไร่
                  และมีชื่อเสียงในเรื่องช่างตัดเย็บเสื้อผ้า
                  เพราะสมัยก่อนไม่มีชุดตัดสำเร็จ ทุกคนจะไปซื้อผ้าที่พาหุรัด
                  ที่สำเพ็ง แล้วนำตัดเสื้อที่ตลาดมิ่งเมือง และรอบๆ
                  พื้นที่ตรงนี้ก็มีร้านเพชร ร้านทอง และร้านปืนต่างๆ อยู่แล้ว
                </p>

                <p className="text-sm md:text-base text-start ">
                  เมื่อเวลาผ่านไปเมืองพัฒนาขึ้น
                  ทางเราเองก็ต้องการพัฒนาพื้นที่ให้เจริญตามเมือง
                  จึงพัฒนาเป็นดิโอลด์สยาม เปิดอย่างเป็นทางการวันที่ 30 เม.ย.
                  พ.ศ. 2536 โดยดีไซน์ตัวอาคารเป็นตึกย้อนยุคกลับไปสมัย ร.5
                  ในสไตล์โคโรเนียล
                </p>

                <p className="text-sm md:text-base text-start">
                  ส่วนเสน่ห์ของที่นี้ คือ สินค้าที่ขายอยู่ในพื้นที่เป็นตัว
                  represent ศิลปะวัฒนธรรมไทย ไม่ว่าจะเป็นผ้าไหม การทำอัญมณี
                  เครื่องเพชร ขนมต่างๆ พวกนี้โชว์ความเป็นไทย
                  ซึ่งเป็นจุดประสงค์ของการทำที่นี้ตั้งแต่ต้นจนถึงตอนนี้
                  เราอยู่ใกล้ศาลาเฉลิมกรุงเคยเป็นโรงหนังสมัยก่อน
                  ใกล้พระบรมมหาราชวังอะไรต่างๆ
                  และสิ่งเหล่านี้ทำให้ดิโอลด์สยามมีความยูนีค ไม่เหมือนใคร
                </p>

                <div className="min-h-[300px] sm:min-h-[350px] md:min-h-[450px] relative w-full mt-4">
                  <Image
                    src={"/assets/promotions/02_osp_apichai/osp_new03.webp"}
                    fill={true}
                    priority={true}
                    unoptimized
                    alt="background"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-3 md:gap-4 md:mt-5">
                <p className="text-lg sm:text-xl md:text-2xl  text-black  w-full  font-medium ">
                  ปรับโฉมใหญ่เพื่อรักษาจุดแข็ง ปิดจุดอ่อนแบบไม่แข่งกับใคร
                </p>

                <p className="text-sm md:text-base text-start ">
                  <span className="font-semibold pr-2">คุณอภิชัย :</span>
                  ปีนี้เป็นปีที่เราเปิดมาครบ 30 ปี รวมถึงสัญญาเช่าก็หมดอายุพอดี
                  จึงเป็นจังหวะที่เหมาะมากในการปรับโฉม
                  อย่างที่ทราบธุรกิจรีเทลแข่งขันกันสูงมาก
                  และก่อนจะปรับปรุงครั้งนี้เราเคยคิดจะปลี่ยนแบบพลิกโฉมเป็นรีเทลสมัยใหม่เลย
                  แต่หลังจากพิจารณาถี่ถ้วนแล้ว เรามั่นใจว่า
                  การที่ไปแข่งขันในธุรกิจรีเทลซึ่งปัจจุบันที่ออนไลน์เปลี่ยนพฤติกรรมคน
                  ขณะที่สินค้าที่เรามีตอนนี้มันส่งเสริมศิลปะวัฒนธรรม
                  และบางชิ้นมีมูลค่าสูง ลูกค้าอาจจะต้องมาถึงพื้นที่
                  เพื่อดูผ้าไหม มาดูเพชร ดูทอง มาเช็กดูผ้าไหม
                </p>

                <div className="min-h-[300px] sm:min-h-[350px] md:min-h-[450px] relative w-full my-2 md:my-4 ">
                  <Image
                    src={"/assets/promotions/02_osp_apichai/03.webp"}
                    fill={true}
                    priority={true}
                    unoptimized
                    alt="background"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                <p className="text-sm md:text-base text-start">
                  จุดนี้ เรามองเป็นจุดแข็งที่เรามีและต้องรักษาไว้
                  ขณะเดียวกันเราจะเสริมจุดอ่อนให้ดียิ่งขึ้น
                  ดังนั้นการเปลี่ยนแปลงครั้งนี้
                  อาคารเราจะปรับปรุงให้ดูดีแต่ยังคงสถาปัตยกรรมเดิมแบบอาคารยุคโคโลเนียลไว้
                  พร้อมกับเพิ่มรีเทล มิกซ์ ที่จะเสริมเข้าไป
                  ส่วนหนึ่งเพื่อรักษากลุ่มลูกค้าเดิม
                  ซึ่งเรายอมรับส่วนใหญ่จะเป็นคนมีอายุ(หัวเราะ)
                  ให้ใช้เวลากับเรามากขึ้น เช่น ชวนร้านค้าใหญ่ๆ อย่าง Starbucks
                  มาเสริม เพื่อเป็นพื้นที่นั่งเล่น เพิ่มร้านขายยา
                  เพราะคนที่จะมาดิโอลด์สยามอยากจะซื้อยา ก็มาหาซื้อยาได้
                </p>

                <p className="text-sm md:text-base text-start">
                  อีกส่วนเราต้องการลูกค้ากลุ่มใหม่ จะเป็นลักษณะ B2C
                  หรือคนที่จะมาเดินชอปปิงและนักท่องเที่ยวต่างชาติ
                  ด้วยการเพิ่มสินค้าแฟชั่น สินค้าสุขภาพและความงามให้คนมาเดินชิลๆ
                  ได้ มาพบปะพูดคุยกัน ส่วนนักท่องเที่ยวต่างชาติ
                  ด้วยความที่เราอยู่ใกล้ศาลาเฉลิมกรุง ใกล้พระบรมมหาราชวัง
                  เป็นพื้นที่ที่ท่องเที่ยวเชิงวัฒนธรรม
                  เราจะทำอย่างไรให้ดิโอลด์สยามเป็นที่รู้จักของต่างชาติ
                  อันนี้เป็นอีกโจทย์หนึ่งที่เราพยายามทำอยู่
                </p>

                <p className="text-sm md:text-base text-start">
                  ที่สำคัญที่สุดเลยคือ คนส่วนใหญ่ไม่รู้ว่า
                  เรามีที่พักอาศัยชั้นเยี่ยมอยู่บนชั้น 4 เกือบ 130 ยูนิต
                  เป็นลักษณะดู duplex มีพื้นที่ประมาณ 100 ตารางเมตร 2 ห้องนอน 2
                  ห้องน้ำ อยู่ใกล้ตัว Mass transportation
                  อย่างตัวรถไฟฟ้าใต้ดินสามยอด เป็นอีกจุดหนึ่งที่เราจะโปรโมท
                  ทำให้ทราบว่า จริงๆ โครงการดิโอลด์สยามไม่ใช่รีเทลอย่างเดียว
                  แต่เป็น Mixed used เป็นพื้นที่ที่สามารถอยู่อาศัย ทำมาหากินได้
                </p>
              </div>

              <div className="w-full flex flex-col gap-3 md:gap-4 md:mt-5">
                <p className="text-lg sm:text-xl md:text-2xl  text-black  w-full  font-medium ">
                  แก้โจทย์ “ห้างของคนสูงวัย”
                </p>

                <p className="text-sm md:text-base text-start ">
                  <span className="font-semibold pr-2">คุณอภิชัย :</span>
                  ถูกครับ (ยิ้ม)
                  คือลูกค้ากลุ่มเดิมที่เราพูดถึงส่วนใหญ่จะค่อนข้างมีอายุ ถามว่า
                  ลูกค้ากลุ่มนี้ยังสำคัญกับเราไหม คำตอบ คือ ใช่
                  ขณะเดียวกันเราก็อยากดึงลูกค้ากลุ่มใหม่ที่เป็นวัยรุ่นมากขึ้นอาจจะเป็น
                  second priority นะ แต่การจะไปดึงวัยรุ่นที่เดินที่อื่น
                  แล้วบอกว่ามาเดินดิโอลด์สยามนะ มันก็คงหลอกตัวเอง
                </p>

                <div className="min-h-[300px] sm:min-h-[350px] md:min-h-[450px] relative w-full my-4 ">
                  <Image
                    src={"/assets/promotions/02_osp_apichai/slide_02.webp"}
                    fill={true}
                    priority={true}
                    unoptimized
                    alt="background"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                <p className="text-sm md:text-base text-start">
                  ฉะนั้นสิ่งที่เราทำได้ที่ดีที่สุด
                  เราจ้องรักษาลูกค้ากลุ่มเดิมไว้ให้มีความสุขในการเดินห้างเรามากที่สุด
                  ส่วนลูกค้ากลุ่มใหม่เราพยายามอย่างเต็มที่ในการหารีเทล
                  หาร้านอาหาร หาสินค้าแฟชั่น หาสินค้าสุขภาพและความงามเข้าเสริม
                </p>

                <p className="text-sm md:text-base text-start">
                  Challenge ของการเปลี่ยนแปลงครั้งนี้ของเราคืออะไร ก็ต้องบอกว่า
                  ดึงลูกค้ากลุ่มใหม่ เราต้องคิดถึง retail mix ที่ถูกต้อง เช่น
                  Starbucks หรือจะอะไรก็แล้วแต่
                  เรื่องพวกนี้เป็นโจทย์ที่สำคัญที่เราครุ่นคิดอยู่ทุกวัน
                  ต้องปรับให้มีร้านที่น่าสนใจมากขึ้น สร้าง movement ตลอดเวลา
                  เราเลือกร้านค้าเข้ามา ถ้าไม่ใช่ เราต้องปรับ
                  มันไม่ได้เป็นกลยุทธ์ ที่ว่าเราวางปุ๊บ จะใช่เลย
                  เป็นความท้าทายที่เราอยากลองดู สู้กับมัน
                </p>
              </div>

              <div className="w-full flex flex-col gap-3 md:gap-4 md:mt-5">
                <p className="text-lg sm:text-xl md:text-2xl  text-black  w-full  font-medium ">
                  ถ้าเปรียบดิโอลด์สยามเป็นคน ต่อจากนี้จะมีคาแรคเตอร์อย่างไร
                </p>

                <p className="text-sm md:text-base text-start ">
                  <span className="font-semibold pr-2">คุณอภิชัย :</span>
                  คำถามนี้น่าสนใจมาก โอเค ผมให้ภาพที่ผมเห็นนะ จริงๆ ดิโอลด์สยาม
                  จะเป็น ‘คนที่ทันยุค’ แบบสูงอายุแต่ยังวัยรุ่นและทันสมัย
                  จากนี้ภาพของดิโอลด์สยามก็คงจะเป็นคนที่มีวัยวุฒิ แต่ทันสมัย
                  เป็นคนหัวใหม่พร้อมจะปรับเปลี่ยน พร้อมลองอะไรใหม่ ๆ นั่นเป็น
                  representative ของดิโอลด์สยาม
                </p>

                <p className="text-sm md:text-base text-start">
                  เราโชคดีที่อยู่ในทำเลดี
                  ซึ่งเรื่องทำเลเป็นจุดเริ่มต้นของทุกอย่าง
                  เมื่อเรามีสิ่งของที่อยู่ในทำเลดี เราต้องปรับปรุงพัฒนา
                  หยุดนิ่งไม่ได้ ถ้าเราหยุดนิ่งทุกอย่างก็ถดถอย
                  ฉะนั้นการพัฒนาดิโอลด์สยามครั้งนี้เป็นอีกครั้งหนึ่งที่เราขยับ
                  จริงๆ เมื่อประมาณสักปี 7-8 ปีที่แล้ว
                  เราพัฒนาแล้วรอบนึงปรับปรุงค่อนข้างเยอะ
                </p>

                <p className="text-sm md:text-base text-start">
                  ดิโอลด์สยามมีเสน่ห์ในแบบของตัวเอง
                  แต่เสน่ห์นี้เราต้องทำให้ยั่งยืน ให้ดู attractive มากขึ้น
                  เพราะถ้าเราไม่ขยับอะไรเลย มันก็ไม่ได้ เราอยากได้ wide range
                  นี่คือโจทย์ที่เรากำลังแก้ไข กำลังปรับปรุงให้เกิดสิ่งนี้ขึ้นมา
                  โดยการปรับโฉมจะใช้เวลาประมาณ 1 ปี ตั้งแต่เม.ย.ปีนี้ จนถึงมี.ค.
                  ปีหน้า
                </p>

                <p className="text-sm md:text-base text-start italic">
                  “ส่วนจะ wow แค่ไหน ขอให้รอติดตามต่อไป
                  แต่ทั้งนี้ทั้งนั้นทุกอย่างขอบอกว่า จะต้องปรับปรุงไปเรื่อยๆ
                  เพราะถ้าเราบอกว่าสิ่งที่ทำอยู่ คือสูตรที่ใช่ เรามั่นใจเกินไป
                  แต่ด้วยความตั้งใจของทีม ผมมั่นใจว่า
                  จะพัฒนาดิโอลด์สยามให้เป็นห้างของคนร่วมยุคที่มี wide range
                  ไม่ใช่คนมีอายุอย่างเดียว”
                </p>

                <p className="text-sm md:text-base text-start mt-10">
                  <span className="font-semibold pr-2">ภาพ :</span>
                  ดำรงฤทธิ์ สถิตดำรงธรรม, ดิโอลด์สยาม
                </p>
                {/* <p className="text-sm md:text-base text-start -mt-3">
                  <span className="font-semibold pr-2">โดย :</span>
                  ณัฐสุดา เพ็งผล
                </p> */}

                <p className="text-sm md:text-base text-start -mt-3">
                  <span className="font-semibold pr-2">แหล่งอ้างอิง :</span>
                  <Link
                    legacyBehavior
                    href={
                      "https://www.thepeople.co/business/game-changer/51827"
                    }
                  >
                    <a
                      aria-label="news"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.thepeople.co/business/game-changer/51827
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="min-h-screen  w-full flex flex-col justify-center items-center  ">
        <ReactShared />
        <Blogs />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params || typeof context.params.id !== "string") {
    return { notFound: true };
  }

  const productId = parseInt(context.params?.id as string) || 1;
  const product = news_input;

  const productSelect = product.find((p) => p.id === context.params?.id);

  if (!productSelect) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <DotLoader color="#A08A58" />
      </div>
    );
  }

  return {
    props: {
      productSelect,
    },
  };
};
