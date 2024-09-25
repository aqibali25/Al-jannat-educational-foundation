import EventSection from "./EventSection/EventSection";
import StatsSection from "./StatsSection/StatsSection";
import ContactForm from "./ContactForm/ContactForm";
import Slider from "./Slider/Slider";
import CourseContainer from "./Carousel/CourseContainer";
import WelcomeSection from "./WellcomeSection";

const Home = () => {
  return (
    <>
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
};
export default Home;
