import { useNavigate } from "react-router-dom";
import Card from "./Card";

const CourseCards = ({ courses }) => {
  const navigate = useNavigate();

  const handleClick = (course) => {
    if (course.available) {
      navigate(`/Al-Jannat-Educational-Foundation/admission`);
    }
  };

  return (
    <div className="row">
      {courses.map((course) => (
        <Card
          key={course.id}
          course={course}
          onClick={() => handleClick(course)} // Pass the course to handleClick
        />
      ))}
    </div>
  );
};

export default CourseCards;
