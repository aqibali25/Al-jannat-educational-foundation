const CarouselIndicators = ({ slides }) => {
  return (
    <div className="carousel-indicators">
      {slides.map((slide) => (
        <button
          key={slide.id}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={slide.id}
          className={slide.isActive ? "active" : ""}
          aria-current={slide.isActive ? "true" : "false"}
          aria-label={`Slide ${slide.id + 1}`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
