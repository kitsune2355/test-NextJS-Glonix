import { Clock, Eye } from "@/public/icons";
import { CardContainer, Container } from "./components";
import Image from "next/image";

const KnowledgeList = [
  {
    title: "profit / loss of stocks in the portfolio",
    subTitle: "กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?",
    desc: "เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้นในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือ ขาดทุนมากน้อยเท่าใด?",
    tag: "Business",
    img: "/image/Rectangle5.png",
    icon: "/image/Rectangle47.png",
    bgColor: "#081631E5",
  },
  {
    title: "What is a Data Engineer",
    subTitle: "Data Engineer คืออะไร?",
    desc: "Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือ เพื่อรวบรวมข้อมูลจัดการข้อมูลและเปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst ",
    tag: "Data",
    img: "/image/Rectangle54.png",
    icon: "/image/Isolation_Mode.png",
    bgColor: "#002E3DE5",
  },
  {
    title: "สารแทนน้ำตาลไม่อันตราย",
    subTitle: "สารแทนน้ำตาลไม่อันตราย",
    desc: "สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล",
    tag: "Science",
    img: "/image/Rectangle46.png",
    icon: "",
    bgColor: "#0D2E6DCC",
  },
  {
    title: "Data Pipelines with Airflow",
    subTitle: "Data Pipelines with Airflow",
    desc: "เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม",
    tag: "Tech",
    img: "/image/Rectangle53.png",
    icon: "",
    bgColor: "#151C59CC",
  },
  {
    title: "ร่างกายสามารถย้อนวัย “อายุชีวภาพ” ",
    subTitle: "ร่างกายสามารถย้อนวัย “อายุชีวภาพ”",
    desc: "ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย “อายุชีวภาพ” (biological age) ซึ่งอาจจะแตกต่างจากอายุจริง",
    tag: "Science",
    img: "/image/Rectangle60.png",
    icon: "",
    bgColor: "#052D43CC",
  },
];

export default function KnowledgeCenter() {
  return (
    <Container>
      <CardContainer
        isButton
        title="บทความและข่าวสารล่าสุด"
        children={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full grid grid-cols-1 gap-4">
              {KnowledgeList.slice(0, 2).map((item, key) => (
                <div
                  key={key}
                  className="grid grid-cols-1 gap-1 md:grid-cols-7 bg-white border border-gray-200 rounded-3xl shadow-sm"
                >
                  <div className="col-span-3 relative overflow-hidden md:rounded-l-3xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${item.img}')`,
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${item.bgColor}` }}
                    />
                    <div className="pt-10 px-10 h-full absolute text-white flex flex-col justify-between items-center space-y-4">
                      <div className="text-[26px] font-bold">
                        <p
                          className={`md:line-clamp-5 ${
                            key === 1 ? "md:w-[8.3rem]" : ""
                          } `}
                        >
                          {item.title.toUpperCase()}
                        </p>
                      </div>
                      <Image
                        className={`h-auto object-cover overflow-hidden ${
                          key === 0 ? "w-[160px]" : "w-full"
                        } ${key === 1 ? "absolute left-4 bottom-12" : ""}`}
                        src={item.icon}
                        alt=""
                        width={key === 0 ? 160 : 100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="col-span-4 p-6 md:h-[413px]">
                    <div className="h-full flex flex-col justify-between space-y-12">
                      <div className="space-y-4">
                        <button
                          type="button"
                          className="px-4 py-2 text-[#00665E] border border-[#00665E] rounded-[59px] items-center"
                        >
                          {item.tag}
                        </button>
                        <div className="space-y-2">
                          <div className="text-xl font-bold md:line-clamp-2 md:w-[15rem]">
                            {item.subTitle}
                          </div>
                          <div
                            className={`text-[#313131] md:line-clamp-6 ${
                              key === 0 ? "md:w-[15rem]" : "md:w-[17rem]"
                            } `}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Clock />
                          <p className="text-[#313131]">29 กรกฎาคม 2023</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye />
                          <p className="text-[#313131]">เข้าชม 240 ครั้ง</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-full grid grid-cols-1 gap-4">
              {KnowledgeList.slice(2, 6).map((item, key) => (
                <div
                  key={key}
                  className="grid grid-cols-1 md:grid-cols-6 gap-1 bg-white border border-gray-200 rounded-3xl shadow-sm"
                >
                  <div className="col-span-2 relative overflow-hidden rounded-l-3xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${item.img}')`,
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${item.bgColor}` }}
                    />
                    <div className="p-6 h-full absolute text-white flex justify-between items-center">
                      <div className="text-[24px] font-bold text-center md:line-clamp-3 md:w-[10rem]">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 p-6 md:h-[269px]">
                    <div className="space-y-4">
                      <button
                        type="button"
                        className="px-4 py-2 text-[#00665E] items-center"
                      >
                        {item.tag}
                      </button>
                      <div className="space-y-2">
                        <div className="text-xl font-bold">{item.subTitle}</div>
                        <div className="text-[#313131]">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </Container>
  );
}
