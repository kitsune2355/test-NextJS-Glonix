import Image from "next/image";
import React from "react";

interface CardImageProps {
  url: string;
  title: string | React.ReactNode;
  desc?: string;
  bgColor?: string;
  textColor?: string;
  isRotate?: boolean;
  avatar?: string;
  isCourseHub?: boolean;
  courseTag?: string;
  courseName?: string;
  coursePosition?: string;
  opacity?: string;
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
  coursePosition,
  opacity,
}) => {
  const backgroundStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const overlayStyle = {
    backgroundColor: bgColor,
    opacity: opacity || "90%",
  };

  const textColorStyle = {
    color: `${textColor}`,
  };

  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden">
      <div style={backgroundStyle} className="absolute inset-0 w-full h-full" />
      <div style={overlayStyle} className="absolute inset-0 w-full h-full" />
      {isRotate && (
        <div
          className="relative p-12 h-full flex flex-col justify-between"
          style={textColorStyle}
        >
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative transform md:-rotate-90 origin-center md:top-[4rem] md:right-[7.5rem] md:w-[279px]">
              <p className="text-[26px] text-start font-bold md:w-[270px] md:line-clamp-2">
                {title}
              </p>
            </div>
            <div className="flex flex-row md:justify-center items-center space-x-2">
              <Image
                src={avatar ?? "/image/Ellipse2.png"}
                alt="Globe icon"
                width={55.45}
                height={55.45}
              />
            </div>
          </div>
        </div>
      )}

      {isCourseHub && (
        <div
          className="relative p-8 h-full flex flex-col justify-between"
          style={textColorStyle}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-6">
              <button
                type="button"
                className="px-4 py-2 text-[#7B7B7B] dark:text-[#B6B6B6] border border-[#7B7B7B] dark:border-[#D9D9D9] rounded-[59px] items-center"
              >
                {courseTag}
              </button>
              <p className="text-[24px] font-bold md:line-clamp-4 md:w-[11.7rem]">
                {title}
              </p>
              <p className="text-xl md:line-clamp-4 md:w-[14rem]">{desc}</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <Image
                className=""
                src={avatar ?? "/image/Ellipse2.png"}
                alt="Globe icon"
                width={50}
                height={50}
              />
              <div>
                <p className="font-bold">{courseName}</p>
                <p>{coursePosition}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isRotate && !isCourseHub && (
        <div
          className="relative p-12 h-full flex flex-col justify-between"
          style={textColorStyle}
        >
          <div className="space-y-4">
            <p className="text-[32px] font-bold line-clamp-4 w-[16rem]">
              {title}
            </p>
            <p className="text-2xl md:line-clamp-2 md:w-[18rem]">{desc}</p>
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
              <p className="font-bold">ณัฐกานต์ สิทธิชัยอนันต์</p>
              <p>CEO Y.I.M Corporation</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardImage;
