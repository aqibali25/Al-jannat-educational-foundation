import Slider from "./Components/Slider/Slider";
import CourseContainer from "./Components/Carousel/CourseContainer";
import WelcomeSection from "./Components/WellcomeSection";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Styles/App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <Slider />
      </section>

      <section>
        <WelcomeSection></WelcomeSection>
      </section>
      <section>
        <CourseContainer></CourseContainer>
      </section>
    </>
  );
}

export default App;
