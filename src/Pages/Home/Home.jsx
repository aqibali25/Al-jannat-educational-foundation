import EventSection from "../ImportantEvents/EventSection";
import StatsSection from "../Stats/StatsSection";
import ContactForm from "../ContactForm/ContactForm";
import Slider from "../Slider/Slider";
import CourseContainer from "../Academics/CourseContainer";
import WelcomeSection from "../About/WellcomeSection";

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
