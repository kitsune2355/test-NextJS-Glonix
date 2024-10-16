import { CardContainer } from "./components";

export default function EducationHub() {
  return (
    <div>
      <CardContainer
        isButton
        title="คอร์สของฉัน"
        children={<div className="flex flex-row space-x-4"></div>}
      />
    </div>
  );
}
