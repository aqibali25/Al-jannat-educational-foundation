import Slide from "../../Components/Slider/Slide";
import CarouselIndicators from "../../Components/Slider/CarouselIndicators";
import "./slider.css";

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";

const slides = [
  {
    id: 0,
    src: slider1,
    label: "Al Jannat Scholarship",
    description: `Empowering Education, Enriching Futures


The Al Jannat Scholarship is a prestigious award designed to support and empower talented students in pursuing their academic dreams. 
Established by the Al Jannat Education Foundation, this scholarship aims to provide financial assistance and recognition to deserving 
individuals who demonstrate academic excellence, leadership potential, and a commitment to making a positive impact in their communities.
`,
    isActive: true,
  },
  {
    id: 1,
    src: slider2,
    label: "Our Vision:",
    description: `To create a world where every individual has the opportunity to reach their full potential, regardless of their background or financial circumstances.`,
    isActive: false,
  },
  {
    id: 2,
    src: slider3,
    label: "Our Mission",
    description: `Al Jannat Education Foundation aims to provide quality education, resources, 
    and opportunities to deserving students, bridging the gap between talent and financial constraints.
     We strive to foster a community of scholars, leaders, and change-makers, empowering them to excel academically, 
     personally, and professionally
`,
    isActive: false,
  },
];

const Slider = () => {
  const SliderStyles = {
    marginTop: "80px",
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide imageSlider"
      style={SliderStyles}
    >
      <CarouselIndicators slides={slides} />
      <div className="carousel-inner">
        {slides.map((slide) => (
          <Slide key={slide.id} {...slide} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
