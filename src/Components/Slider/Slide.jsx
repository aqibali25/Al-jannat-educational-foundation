const Slide = ({ src, label, description, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img src={src} className="d-block w-100" alt={label} />
      <div className="carousel-caption d-md-block">
        <h1 className="heading">{label}</h1>
        <p className="paraText">{description}</p>
      </div>
    </div>
  );
};

export default Slide;
