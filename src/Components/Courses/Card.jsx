import "../Styles/CourseContainer.css";

const Card = ({ course }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4 shadow-sm">
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
