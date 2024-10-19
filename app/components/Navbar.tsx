"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";

const menu = [
  {
    label: "รายวิชา",
    path: "/",
  },
  {
    label: "ถ่ายทอดสด",
    path: "/",
  },
  {
    label: "กระทู้คำถาม",
    path: "/",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="relative w-full flex items-center justify-between">
        <div className="flex items-center justify-between space-x-8">
          <h1 className="text-[#00665E] text-3xl font-semibold">LOGO</h1>
          {/* Desktop */}
          <div className="hidden lg:flex space-x-8">
            {menu.map((item, key) => (
              <Link
                key={key}
                href={item.path}
                className="hover:underline text-[#6A6A6A] text-xl hover:text-[#00665E]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-row space-x-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6h18M3 12h18m-18 6h18"
                stroke="#6A6A6A"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
                />
              </g>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-between space-x-4">
          <button
            type="button"
            className="w-[139px] h-[62px] bg-[#EFEFEF] hover:text-white hover:bg-[#f00]/90 rounded-[18px] py-4 px-6 text-center inline-flex items-center"
          >
            ออกจากระบบ
          </button>
          <button
            type="button"
            className="w-[243px] h-[62px] text-white bg-[#1C1C29] hover:bg-[#00665E]/90 rounded-[18px] py-4 px-6 inline-flex items-center"
          >
            <Image
              src="/image/Ellipse.png"
              alt="Globe icon"
              width={30}
              height={30}
            />
            <span className="px-2">Siriwat Rachanon</span>
            <svg
              width="19"
              height="9"
              viewBox="0 0 19 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.50099 8.80304C9.14249 8.80315 8.78748 8.73255 8.45631 8.59528C8.12513 8.458 7.82428 8.25675 7.57099 8.00304L1.05099 1.48004C0.921222 1.33739 0.851387 1.15024 0.855988 0.957458C0.860588 0.764671 0.939271 0.581065 1.07569 0.44477C1.21212 0.308475 1.3958 0.229966 1.58859 0.225547C1.78138 0.221129 1.96846 0.29114 2.11099 0.421042L8.63299 6.94004C8.86381 7.17063 9.17673 7.30015 9.50299 7.30015C9.82925 7.30015 10.1422 7.17063 10.373 6.94004L16.893 0.420042C17.0352 0.287562 17.2232 0.215439 17.4175 0.218867C17.6118 0.222295 17.7972 0.301007 17.9346 0.43842C18.072 0.575833 18.1507 0.761218 18.1542 0.955519C18.1576 1.14982 18.0855 1.33787 17.953 1.48004L11.433 8.00304C11.1795 8.25699 10.8783 8.45838 10.5467 8.59566C10.2152 8.73294 9.85983 8.80342 9.50099 8.80304Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="absolute w-[100vw] top-20 flex flex-col lg:hidden bg-[#1C1C29] shadow-lg rounded-b-lg ">
          {menu.map((item, key) => (
            <Link
              key={key}
              href={item.path}
              className="text-center text-white text-xl hover:bg-[#00665E]/90 p-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
