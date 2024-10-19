"use client";
import { useState } from "react";
import { CardContainer, Container } from "./components";
import TextEditor from "./components/TextEditor";

const QuestionThread: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };
  return (
    <Container>
      <CardContainer
        title="ตั้งกระทู้คำถาม"
        children={
          <div className="w-full h-full bg-white border border-gray-200 rounded-3xl shadow-lg p-12">
            <div className="flex-1 flex flex-col space-y-6">
              <div className="space-y-4">
                <label htmlFor="default-input" className="text-xl font-bold">
                  หัวข้อกระทู้
                </label>
                <input
                  type="text"
                  placeholder="หัวข้อกระทู้"
                  className="w-full p-4 text-sm text-gray-900 border border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-[#D9D9D9]"
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="default-input" className="text-xl font-bold">
                  เนื้อหา
                </label>
                <TextEditor value={content} onChange={handleContentChange} />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#A8AD00] text-white w-full lg:w-[185px] px-[3.69rem] py-[0.63rem] rounded-xl"
                >
                  ส่ง
                </button>
              </div>
            </div>
          </div>
        }
      />
    </Container>
  );
};
export default QuestionThread;
