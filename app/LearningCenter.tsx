import {
  ArrowRight,
  Book,
  CloudConnection,
  Glass,
  Hierarchy,
} from "@/public/icons";
import { CardContainer, Container } from "./components";

const Learning = [
  {
    title: "Data",
    desc: "เรียนรู้และฝึกฝนกระบวนการคิด สร้างมูลค่าให้ธุรกิจด้วยข้อมูล",
    icon: <Hierarchy />,
  },
  {
    title: "Science",
    desc: "เรียนรู้และฝึกฝนกระบวนการคิดด้วยกระบวนการทางวิทยาศาสตร์",
    icon: <Glass />,
  },
  {
    title: "Tech",
    desc: "พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม",
    icon: <CloudConnection />,
  },
  {
    title: "Business",
    desc: "พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทางและเวลาที่เหมาะ",
    icon: <Book />,
  },
];

export default function LearningCenter() {
  return (
    <Container>
      <CardContainer
        title="เลือกเรียนตามหัวข้อที่สนใจ"
        children={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Learning.map((item, key) => (
              <div
                key={key}
                className="w-full p-6 bg-white border-gray-200 rounded-3xl shadow-lg"
              >
                <div className="flex flex-col justify-between space-y-4">
                  <div className="w-full h-[9rem]">
                    <div className="flex flex-row space-x-4 items-center">
                      <div>{item.icon}</div>
                      <div className="py-4 text-[22px] font-semibold">
                        {item.title}
                      </div>
                    </div>
                    <div className="text-lg text-[#6A6A6A]">{item.desc}</div>
                  </div>
                  <div className="flex justify-end">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </Container>
  );
}
