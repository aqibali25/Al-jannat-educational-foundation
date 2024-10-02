const Card = ({ course, onClick }) => {
  return (
    <div className="col-md-3 courseCard" onClick={onClick}>
      <div className="card mb-4 shadow-sm">
        <div className="availableBox">
          <span>{course.available ? "Available" : "Available Soon"}</span>
        </div>
        <img src={course.imgSrc} className="card-img-top" alt={course.title} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
