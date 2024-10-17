import { ArrowCircleLeft, ArrowCircleRight } from "@/public/icons";
import { CardContainer, CardImage, Container } from "./components";

const courseHubList = [
  {
    tag: "Business",
    name: "ณัฐกานต์ สิทธิชัยอนันต์ CEO Y.I.M Corporation",
    img: "/image/Rectangle15.png",
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    desc: "รู้และเข้าใจปัจจัยที่ส่งผลกระทบต่อราคาหุ้น",
    bgColor: "#FCFF8B",
    textColor: "#000",
  },
  {
    tag: "Data",
    name: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี Google Developers",
    img: "/image/Rectangle32.png",
    title: "Progressive Web Application",
    desc: "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    bgColor: "#000D2E",
    textColor: "#fff",
  },
  {
    tag: "Science",
    name: "วรัทธน์ วงศ์มณีกิจ Co-Founder",
    img: "/image/Rectangle15.png",
    title: "React Hooks in Action",
    desc: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    bgColor: "#95FFE5",
    textColor: "#000",
  },
  {
    tag: "Tech",
    name: "ทัศน์พล รัชตะสัมฤทธิ์ Software Engineer",
    img: "/image/Rectangle15.png",
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    bgColor: "#06002E",
    textColor: "#fff",
  },
];

export default function CourseHub() {
  return (
    <div className="relative">
      <Container>
        <CardContainer
          isButton
          title="คอร์สออนไลน์"
          children={
            <div className="flex flex-row space-x-4">
              {courseHubList.map((item, key) => (
                <div key={key} className="w-[304px] h-[548px]">
                  <CardImage
                    isCourseHub
                    courseTag={item.tag}
                    courseName={item.name}
                    url={item.img}
                    title={item.title}
                    desc={item.desc}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                  />
                </div>
              ))}
            </div>
          }
        />
      </Container>
      <div className="absolute top-[19rem] left-[18rem] right-[18rem] mx-auto max-w-[1382px] flex flex-row justify-between transform -translate-y-1/2">
        <ArrowCircleLeft />
        <ArrowCircleRight />
      </div>
    </div>
  );
}
