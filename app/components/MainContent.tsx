import { SearchNormal } from "@/public/icons";
import React from "react";
import CardImage from "./CardImage";
import Container from "./Container";

const data = [
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
      <div className="flex justify-around space-x-6">
        <div className="max-w-md">
          <p className="text-lg text-[#00665E] font-medium ">
            Lorem Ipsum is simply dummy .
          </p>
          <p className="text-[52px] text-black font-semibold ">
            learn anytime, anywhere with{" "}
            <span className="text-[52px] text-[#00665E] font-semibold ">
              Lorem
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
        <div className="w-full flex flex-row justify-end space-x-6">
          <div className="w-[412px] h-[548px]">
            <CardImage
              url="/image/Rectangle2.png"
              title="Generative AI and ChatGPT: Design Thinking Edition"
              desc="ปลดล็อกขีดจำกัดการทำงาน ด้วยพลัง AI"
              bgColor="#002E2A"
              textColor="#fff"
            />
          </div>
          <div className="flex flex-row space-x-4">
            {data.map((item, key) => (
              <div
                key={key}
                className="relative w-[150px] h-full flex-shrink-0"
              >
                <CardImage
                  url={item.url}
                  title={item.title}
                  bgColor={item.bgColor}
                  textColor={item.textColor}
                  isRotate
                  avatar={item.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainContent;
