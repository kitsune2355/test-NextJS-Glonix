import { VideoVertical } from "@/public/icons";
import React from "react";

interface CardContainerProps {
  title: string;
  children: React.ReactNode;
  isButton?: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  children,
  isButton,
}) => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row items-center space-x-4">
          <VideoVertical />
          <p className="text-2xl font-bold py-8">{title}</p>
        </div>
        {isButton && (
          <button
            type="button"
            className="w-[135px] h-[42px] text-[#A8AD00] border border-[#A8AD00] rounded-[59px] items-center"
          >
            ดูทั้งหมด
          </button>
        )}
      </div>
      {children}
    </React.Fragment>
  );
};

export default CardContainer;
