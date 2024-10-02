import { useNavigate } from "react-router-dom";
import Card from "./Card";

const CourseCards = ({ courses }) => {
  const navigate = useNavigate();

  const handleEnrollBtn = (course) => {
    if (course.available) {
      navigate(`/Al-Jannat-Educational-Foundation/admission`);
    }
  };
  const handleAdvBtn = (course) => {
    if (course.available) {
      const link = document.createElement("a");
      link.href = course.advertisement;
      link.download = course.advertisement.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="row">
      {courses.map((course) => (
        <Card
          key={course.id}
          course={course}
          handleEnrollBtn={() => handleEnrollBtn(course)}
          handleAdvBtn={() => handleAdvBtn(course)}
        />
      ))}
    </div>
  );
};

export default CourseCards;
