import { SearchNormal } from "@/public/icons";
import React from "react";
import CardImage from "./CardImage";
import Container from "./Container";

const data = [
  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    desc: "ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI",
    url: "/image/Rectangle2.png",
    avatar: "/image/Ellipse3.png",
    bgColor: "#002E2A",
    textColor: "#fff",
  },
  {
    title: "Generative ChatGPT: UX Design Edition",
    url: "/image/Rectangle3.png",
    avatar: "/image/Ellipse3.png",
    bgColor: "#95FFE5",
    textColor: "#000",
  },
  {
    title: "UX Accelerator Bundle",
    url: "/image/Rectangle9.png",
    avatar: "/image/Ellipse4.png",
    bgColor: "#FCFF8B",
    textColor: "#000",
  },
];

const MainContent: React.FC = () => {
  return (
    <Container>
      <div className="w-full flex flex-col lg:flex-row justify-between space-y-4 lg:space-x-12">
        <div className="w-full lg:max-w-md">
          <p className="text-lg text-[#00665E] font-medium ">
            Lorem Ipsum is simply dummy .
          </p>
          <div className="space-y-20">
            <p className="text-[52px] text-black font-semibold ">
              learn anytime, anywhere <br /> with{" "}
              <span className="relative text-[52px] text-[#00665E] font-semibold ">
                Lorem
                <svg
                  className="absolute top-16 left-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="258"
                  height="27"
                  viewBox="0 0 258 27"
                  fill="none"
                >
                  <path
                    d="M3.99997 22.7138C49.0067 10.9946 116.007 -6.15131 254.607 10.9946"
                    stroke="#A8AD00"
                    stroke-width="6"
                    stroke-linecap="square"
                  />
                </svg>
              </span>
            </p>
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <SearchNormal />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-[#D9D9D9]"
                  placeholder="ค้นหาหลักสูตร"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium w-[143px] h-full text-white bg-[#A8AD00] rounded-e-lg border "
                >
                  ค้นหา
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-[34.25rem] flex justify-between space-x-4">
          {data.slice(0, 1).map((item, key) => (
            <div key={key} className="w-[25.75rem]">
              <CardImage
                key={key}
                url={item.url}
                title={item.title}
                desc={item.desc}
                bgColor={item.bgColor}
                textColor={item.textColor}
              />
            </div>
          ))}
          {data.slice(1, 3).map((item, key) => (
            <div
              key={key}
              className="relative w-[9.375rem] h-full flex-shrink-0"
            >
              <CardImage
                url={item.url}
                title={
                  key === 1 ? (
                    <>
                      UX Accelerator <br /> Bundle
                    </>
                  ) : (
                    item.title
                  )
                }
                bgColor={item.bgColor}
                textColor={item.textColor}
                isRotate
                avatar={item.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MainContent;
