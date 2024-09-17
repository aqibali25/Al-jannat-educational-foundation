import Slide from "./Slide";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControls from "./CarouselControls";
import "../Styles/slider.css";

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";

const slides = [
  {
    id: 0,
    src: slider1,
    label: "Creative Thinking & Innovations",
    description: `Proactively utilize open-source users for process-centric total linkage.
Energistically reinvent web-enabled initiatives with premium
processes. Proactively drive.`,
    isActive: true,
  },
  {
    id: 1,
    src: slider2,
    label: "We foster wisdom",
    description: `Proactively utilize open-source users for process-centric total linkage.
Energistically reinvent web-enabled initiatives with premium
processes. Proactively drive.`,
    isActive: false,
  },
  {
    id: 2,
    src: slider3,
    label: "Campus life @ Unisco",
    description: `Proactively utilize open-source users for process-centric total linkage.
Energistically reinvent web-enabled initiatives with premium
processes. Proactively drive.`,
    isActive: false,
  },
];

const Slider = () => {
  const SliderStyles = {
    marginTop: "70px",
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
      <CarouselControls />
    </div>
  );
};

export default Slider;
