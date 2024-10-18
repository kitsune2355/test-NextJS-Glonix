import { CardContainer, Container } from "./components";

export default function QuestionThread() {
  return (
    <Container>
      <CardContainer
        title="ตั้งกระทู้คำถาม"
        children={
          <div className="w-full h-full bg-white border border-gray-200 rounded-3xl shadow-lg p-12">
            <div className="flex-1 flex flex-col space-y-12">
              <label htmlFor="default-input" className="text-xl font-bold">
                หัวข้อกระทู้
              </label>
              <input
                type="text"
                placeholder="หัวข้อกระทู้"
                className="w-full p-4 text-sm text-gray-900 border border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-[#D9D9D9]"
              />
              <label htmlFor="default-input" className="text-xl font-bold">
                เนื้อหา
              </label>
              <div>Editor</div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#A8AD00] text-white w-[185px] px-[3.69rem] py-[0.63rem] rounded-xl"
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
}
