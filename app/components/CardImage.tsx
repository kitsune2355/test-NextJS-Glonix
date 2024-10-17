import Image from "next/image";
import React from "react";

interface CardImageProps {
  url: string;
  title: string;
  desc?: string;
  bgColor?: string;
  textColor?: string;
  isRotate?: boolean;
  avatar?: string;
  isCourseHub?: boolean;
  courseTag?: string;
  courseName?: string;
}

const CardImage: React.FC<CardImageProps> = ({
  url,
  title,
  desc,
  bgColor,
  textColor,
  isRotate,
  avatar,
  isCourseHub,
  courseTag,
  courseName,
}) => {
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
  };

  const backgroundColorStyle = {
    background: `${bgColor}`,
    opacity: 0.9,
  };

  const textColorStyle = {
    color: `${textColor}`,
  };

  return (
    <div className="w-full h-full relative">
      <div
        style={backgroundStyle}
        className="w-full h-full bg-no-repeat rounded-[32px]"
      >
        <div style={backgroundColorStyle} className="h-full rounded-[32px]">
          {isRotate && (
            <div
              style={textColorStyle}
              className="p-12 h-full flex flex-col justify-between"
            >
              <div className="h-[150px] relative top-[4rem] right-[7rem] w-[279px]">
                <p className="text-[26px] text-start font-bold transform -rotate-90 origin-center overflow-wrap break-words">
                  {title}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <Image
                  src="/image/Ellipse3.png"
                  alt="Globe icon"
                  width={55.45}
                  height={55.45}
                />
              </div>
            </div>
          )}

          {isCourseHub && (
            <div
              style={textColorStyle}
              className="p-8 h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                <button
                  type="button"
                  className="px-4 py-2 text-[#7B7B7B] border border-[#7B7B7B] rounded-[59px] items-center"
                >
                  {courseTag}
                </button>
                <p className="text-[24px] font-bold">{title}</p>
                <p className="text-xl ">{desc}</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <Image
                  src="/image/Ellipse.png"
                  alt="Globe icon"
                  width={55}
                  height={55}
                />
                <div>
                  <p> {courseName} </p>
                </div>
              </div>
            </div>
          )}

          {!isRotate && !isCourseHub && (
            <div
              style={textColorStyle}
              className="p-12 h-full flex flex-col justify-between"
            >
              <div>
                <p className="text-[32px] font-bold">{title}</p>
                <p className="text-2xl ">{desc}</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <Image
                  key={avatar}
                  src={avatar ?? "/image/Ellipse2.png"}
                  alt="Avatar"
                  width={55.45}
                  height={55.45}
                />
                <div>
                  <p>ณัฐกานต์ สิทธิชัยอนันต์</p>
                  <p>CEO Y.I.M Corporation</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardImage;
