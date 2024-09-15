import CourseCards from "./CourseCards";
import "../Styles/CourseContainer.css";

import courseImage1 from "../../assets/courseImage1.jpg";
import courseImage2 from "../../assets/courseImage2.jpg";
import courseImage3 from "../../assets/courseImage3.jpg";
import courseImage4 from "../../assets/courseImage4.jpg";
const CourseContainer = () => {
  const courses = [
    {
      id: 1,
      title: "Card title 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: courseImage1,
    },
    {
      id: 2,
      title: "Card title 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: courseImage2,
    },
    {
      id: 3,
      title: "Card title 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: courseImage3,
    },
    {
      id: 4,
      title: "Card title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: courseImage4,
    },
  ];
  return (
    <div className="container">
      <h1>Courses</h1>
      <CourseCards courses={courses} />
      <button className="btn btn-outline-success">See All Courses</button>
    </div>
  );
};

export default CourseContainer;
