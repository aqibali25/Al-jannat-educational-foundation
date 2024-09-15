import Slide from "./Slide";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControls from "./CarouselControls";

import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";

const slides = [
  {
    id: 0,
    src: slider1,
    label: "First slide label",
    description: "Some representative placeholder content for the first slide.",
    isActive: true,
  },
  {
    id: 1,
    src: slider2,
    label: "Second slide label",
    description:
      "Some representative placeholder content for the second slide.",
    isActive: false,
  },
  {
    id: 2,
    src: slider3,
    label: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
    isActive: false,
  },
];

const Slider = () => {
  const SliderStyles = {
    marginTop: "60px",
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
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
