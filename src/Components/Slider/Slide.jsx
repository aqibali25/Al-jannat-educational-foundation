const Slide = ({ src, label, description, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img src={src} className="d-block w-100" alt={label} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{label}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Slide;
