import Image from "next/image";
import React from "react";

interface CardImageProps {
  url: string;
  title: string;
  desc?: string;
  bgColor?: string;
  textColor?: string;
  isRotate?: boolean;
}

const CardImage: React.FC<CardImageProps> = ({
  url,
  title,
  desc,
  bgColor,
  textColor,
  isRotate,
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
      <div style={backgroundStyle} className="w-full h-full bg-no-repeat">
        <div style={backgroundColorStyle} className="h-full rounded-[32px]">
          {isRotate ? (
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
                  src="/image/Ellipse.png"
                  alt="Globe icon"
                  width={55.45}
                  height={55.45}
                />
              </div>
            </div>
          ) : (
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
                  src="/image/Ellipse.png"
                  alt="Globe icon"
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
