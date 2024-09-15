import Card from "./Card";
import "../Styles/CourseContainer.css";

const CourseCards = ({ courses }) => {
  return (
    <div className="row">
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseCards;
