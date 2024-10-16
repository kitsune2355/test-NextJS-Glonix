import Image from "next/image";
import Link from "next/link";

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
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between space-x-8">
          <h1 className="text-[#00665E] text-3xl font-semibold">LOGO</h1>
          {menu.map((item, key) => (
            <div key={key}>
              <Link
                href={item.path}
                className="hover:underline text-[#6A6A6A] text-xl hover:text-[#00665E]"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between space-x-4">
          <button
            type="button"
            className="w-[139px] h-[62px] bg-[#EFEFEF] hover:text-white hover:bg-[#f00]/90 rounded-[18px]   py-4 px-6 text-center inline-flex items-center"
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
    </div>
  );
}
