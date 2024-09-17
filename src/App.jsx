import Slider from "./Components/Slider/Slider";
import CourseContainer from "./Components/Carousel/CourseContainer";
import WelcomeSection from "./Components/WellcomeSection";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Styles/App.css";
import EventSection from "./components/EventSection/EventSection";
import StatsSection from "./components/StatsSection/StatsSection";
import ContactForm from "./Components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <Slider />
      </section>

      <section id="wellcomeSection">
        <WelcomeSection></WelcomeSection>
      </section>
      <section id="coursesSection">
        <CourseContainer></CourseContainer>
      </section>
      <EventSection />
      <StatsSection />
      <section id="contactSection">
        <ContactForm />
      </section>
    </>
  );
}

export default App;
