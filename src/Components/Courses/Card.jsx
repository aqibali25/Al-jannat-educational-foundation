const Card = ({ course, onClick }) => {
  return (
    <div className="col-md-3 courseCard">
      <div className="card mb-4 shadow-sm">
        <div
          className={`availableBox ${
            course.available ? "isAvailable" : "notAcailable"
          }`}
        >
          <span>{course.available ? "Available" : "Available Soon"}</span>
        </div>
        <img src={course.imgSrc} className="card-img-top" alt={course.title} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
        </div>
        <div className="CoursesButtons">
          <button className="btnEnroll" onClick={onClick}>
            Enroll Now
          </button>
          <button className="btnAdv">Advertisement</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
