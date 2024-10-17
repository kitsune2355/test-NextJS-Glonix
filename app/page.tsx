import { Navbar, Footer, Container, MainContent } from "./components";
import CourseHub from "./CourseHub";
import EducationHub from "./EducationHub";
import LearningCenter from "./LearningCenter";

export default function Home() {
  return (
    <div>
      <Container>
        <Navbar />
        <div className="flex flex-col space-y-24">
          <MainContent />
          <LearningCenter />
        </div>
      </Container>
      <EducationHub />
      <CourseHub />
      <Footer />
    </div>
  );
}
