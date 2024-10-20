import { ArrowCircleLeft, ArrowCircleRight } from "@/public/icons";
import { CardContainer, CardImage, Container } from "./components";

const courseHubList = [
  {
    tag: "Business",
    name: "ณัฐกานต์ สิทธิชัยอนันต์",
    position: "CEO Y.I.M Corporation",
    avatar: "/image/Ellipse5.png",
    img: "/image/Rectangle15.png",
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    desc: "รู้และเข้าใจปัจจัยที่ส่งผล กระทบต่อราคาหุ้น",
    bgColor: "#FCFF8B",
    textColor: "#000",
    opacity: "90%",
  },
  {
    tag: "Data",
    name: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี",
    position: "Google Developers",
    avatar: "/image/Ellipse6.png",
    img: "/image/Rectangle32.png",
    title: "Progressive Web Application",
    desc: "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    bgColor: "#000D2E",
    textColor: "#fff",
    opacity: "90%",
  },
  {
    tag: "Science",
    name: "วรัทธน์ วงศ์มณีกิจ",
    position: "Co-Founder",
    avatar: "/image/Ellipse7.png",
    img: "/image/Rectangle34.png",
    title: "React Hooks in Action",
    desc: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    bgColor: "#95FFE5",
    textColor: "#000",
    opacity: "90%",
  },
  {
    tag: "Tech",
    name: "ทัศน์พล รัชตะสัมฤทธิ์",
    position: "Software Engineer",
    avatar: "/image/Ellipse8.png",
    img: "/image/Rectangle36.png",
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    bgColor: "#06002E",
    textColor: "#fff",
    opacity: "69%",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courseHubList.map((item, key) => (
                <div key={key} className="w-[19rem] h-[34.25rem]">
                  <CardImage
                    isCourseHub
                    courseTag={item.tag}
                    courseName={item.name}
                    coursePosition={item.position}
                    avatar={item.avatar}
                    url={item.img}
                    title={item.title}
                    desc={item.desc}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                    opacity={item.opacity}
                  />
                </div>
              ))}
            </div>
          }
        />
      </Container>
      <div className="absolute top-[22rem] left-[16rem] right-[16rem] mx-auto max-w-[75vw] hidden lg:flex flex-row justify-between transform -translate-y-1/2">
        <ArrowCircleLeft />
        <ArrowCircleRight />
      </div>
    </div>
  );
}
