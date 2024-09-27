import EventSection from "./EventSection/EventSection";
import StatsSection from "./StatsSection/StatsSection";
import ContactForm from "./ContactForm/ContactForm";
import Slider from "./Slider/Slider";
import CourseContainer from "./Courses/CourseContainer";
import WelcomeSection from "./WellcomeSection";

const Home = () => {
  return (
    <>
      <section>
        <Slider />
      </section>
      <section id="about">
        <WelcomeSection></WelcomeSection>
      </section>
      <section id="academics">
        <CourseContainer></CourseContainer>
      </section>
      <EventSection />
      <StatsSection />
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
};
export default Home;
