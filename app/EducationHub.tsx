import { ArrowCircleLeft, ArrowCircleRight } from "@/public/icons";
import { CardContainer, Container } from "./components";

const Education = [
  {
    img: "/image/Rectangle28.png",
    title: `Generative AI and ChatGPT: Design Thinking Edition`,
    desc: "Generative AI and ChatGPT: Design Thinking Edition",
    percent: "0%",
    bgColor: "#3974CCCC",
  },

  {
    img: "/image/Rectangle29.png",
    title: "Generative ChatGPT: UX Design Edition",
    desc: "Generative ChatGPT: UX Design Edition",
    percent: "10%",
    bgColor: "#2A005FCC",
  },
  {
    img: "/image/Rectangle30.png",
    title: "เทคนิคการจัดทำบัญชี จัดการภาษีด้วยเทคโนโลยีดิจิทัล",
    desc: "เทคนิคการจัดทำบัญชี จัดการภาษีด้วยเทคโนโลยีดิจิทัล",
    percent: "40%",
    bgColor: "#00123FCC",
  },
  {
    img: "/image/Rectangle31.png",
    title: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    desc: "องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ",
    percent: "80%",
    bgColor: "#007077CC",
  },
];

export default function EducationHub() {
  return (
    <div className="relative">
      <Container>
        <CardContainer
          isButton
          title="คอร์สของฉัน"
          children={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Education.map((item, key) => (
                <div
                  key={key}
                  className="w-full h-full bg-white border border-gray-200 rounded-3xl shadow-lg"
                >
                  <div className="relative h-[152px] overflow-hidden rounded-t-3xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.img}')` }}
                    ></div>
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${item.bgColor}` }}
                    ></div>
                    <div className="p-6 absolute  text-white font-semibold">
                      {item.title}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between space-y-8">
                    <div>{item.desc}</div>
                    <div className="space-y-2">
                      <div>
                        เรียนไปแล้ว{" "}
                        <span className="text-black font-bold">
                          {item.percent}
                        </span>
                      </div>
                      <div className="w-full bg-[#EEEEEE] rounded-full h-2.5">
                        <div
                          className="bg-[#A8AD00] h-2.5 rounded-full"
                          style={{ width: `${item.percent}` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </Container>
      <div className="absolute top-[18rem] left-[16rem] right-[16rem] mx-auto max-w-[75vw] hidden lg:flex flex-row justify-between transform -translate-y-1/2">
        <ArrowCircleLeft />
        <ArrowCircleRight />
      </div>
    </div>
  );
}
