import { Navbar, Footer, Container, MainContent } from "./components";
import LearningCenter from "./LearningCenter";

export default function Home() {
  return (
    <div>
      <Container>
        <Navbar />
        <MainContent />
        <LearningCenter />
      </Container>
      <Footer />
    </div>
  );
}
