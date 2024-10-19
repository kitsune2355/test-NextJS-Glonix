import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@/public/icons";
import Container from "./Container";
import React from "react";

type detailType = {
  title: string;
  desc: descType[];
};

type descType = {
  label: string;
  icon?: React.ReactNode;
};

const details: detailType[] = [
  {
    title: "คอร์สของเรา",
    desc: [
      { label: "Data" },
      { label: "Science" },
      { label: "Tech" },
      { label: "Business" },
    ],
  },
  {
    title: "เกี่ยวกับเรา",
    desc: [
      { label: "สอนกับเรา" },
      { label: "ติดต่อสอบถามเพิ่มเติม" },
      { label: "แจ้งปัญหาเกี่ยวกับระบบ" },
      { label: "ช่องทางการร้องเรียน" },
    ],
  },
  {
    title: "ความปลอดภัย",
    desc: [
      { label: "Privacy Policy" },
      { label: "Terms and Conditions" },
      { label: "Data Protection Policy Six" },
      { label: "Cookie Policy" },
    ],
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing .",
    desc: [{ label: "199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230" }],
  },
  {
    title: "ติดต่อเรา",
    desc: [
      {
        label: "Youtube",
        icon: <YouTube />,
      },
      {
        label: "Facebook",
        icon: <Facebook />,
      },
      {
        label: "Twitter",
        icon: <Twitter />,
      },
      {
        label: "Instagram",
        icon: <Instagram />,
      },
      {
        label: "LinkedIn",
        icon: <LinkedIn />,
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-[#00665E] bottom-0 text-white mt-14">
      <Container isFooter>
        <div className="text-6xl font-bold">LOGO</div>
        <hr className="w-full my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {details.slice(0, 3).map((item, key) => (
            <div
              key={key}
              className="w-full overflow-wrap break-words space-y-3"
            >
              <div className="font-bold text-xl py-3">{item.title}</div>
              {item.desc.map((desc, key) => (
                <div key={key}>{desc.label}</div>
              ))}
            </div>
          ))}

          <div className="w-[284px] overflow-wrap break-words">
            {details.slice(3, 4).map((item, key) => (
              <div key={key} className="pb-6">
                <div className="font-bold text-xl py-3">{item.title}</div>
                <div>{item.desc[0].label}</div>
              </div>
            ))}
            {details.slice(4, 5).map((item, key) => (
              <div key={key}>
                <div className="font-bold text-xl py-3">{item.title}</div>
                <div className="flex flex-row space-x-4">
                  {item.desc.map((desc, key) => (
                    <div key={key}>{desc.icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full my-8" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between">
          <p>Y.I.M Corporation @ 2023. All rights reserved.</p>
          <p className="text-start md:text-end lg:text-end">
            0-3835-4580-4 , 0-3835-2611-6
          </p>
        </div>
      </Container>
    </div>
  );
}
