import { Navbar, Footer, Container, MainContent } from "./components";
import CourseHub from "./CourseHub";
import EducationHub from "./EducationHub";
import KnowledgeCenter from "./KnowledgeCenter";
import LearningCenter from "./LearningCenter";
import QuestionThread from "./QuestionThread";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainContent />
      <LearningCenter />
      <EducationHub />
      <CourseHub />
      <KnowledgeCenter />
      <QuestionThread />
      <Footer />
    </>
  );
}
