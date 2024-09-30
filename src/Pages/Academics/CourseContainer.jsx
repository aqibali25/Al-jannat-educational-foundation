import CourseCards from "../../Components/Courses/CourseCards";
import "./CourseContainer.css";

import courseImage1 from "../../assets/CoursesImage/coursesImage1.jpg";
import courseImage2 from "../../assets/CoursesImage/coursesImage2.jpg";
import courseImage3 from "../../assets/CoursesImage/coursesImage3.jpg";
import courseImage4 from "../../assets/CoursesImage/coursesImage4.jpg";
import courseImage5 from "../../assets/CoursesImage/coursesImage5.jpg";
import courseImage6 from "../../assets/CoursesImage/coursesImage6.jpg";
import courseImage7 from "../../assets/CoursesImage/coursesImage7.jpg";
import courseImage8 from "../../assets/CoursesImage/coursesImage8.jpg";
import courseImage9 from "../../assets/CoursesImage/coursesImage9.jpg";
import courseImage10 from "../../assets/CoursesImage/coursesImage10.jpg";

const CourseContainer = () => {
  const courses = [
    {
      id: 1,
      title: "Merit Scholarship",
      description:
        "Awarded to students with outstanding academic achievements.",
      imgSrc: courseImage1,
    },
    {
      id: 2,
      title: "Need-Based Scholarship",
      description: "Provided to students who demonstrate financial need.",
      imgSrc: courseImage2,
    },
    {
      id: 3,
      title: "Leadership Scholarship",
      description:
        "Recognizes students who exhibit exceptional leadership skills.",
      imgSrc: courseImage3,
    },
    {
      id: 4,
      title: "Community Service Scholarship",
      description:
        "Honors students who demonstrate a strong commitment to community service.",
      imgSrc: courseImage4,
    },
    {
      id: 5,
      title: "Talent Scholarship",
      description:
        "Supports students with exceptional talents in arts, sports, or other areas",
      imgSrc: courseImage5,
    },
    {
      id: 6,
      title: " International Student Scholarship",
      description:
        "Assists international students in pursuing their education.",
      imgSrc: courseImage6,
    },
    {
      id: 7,
      title: "Graduate Scholarship",
      description:
        "Helps students pursuing higher education or postgraduate studies.",
      imgSrc: courseImage7,
    },
    {
      id: 8,
      title: "Undergraduate Scholarship",
      description: "Supports students pursuing their undergraduate degree.",
      imgSrc: courseImage8,
    },
    {
      id: 9,
      title: "Vocational Scholarship",
      description:
        "Provides funding for students pursuing vocational or technical education.",
      imgSrc: courseImage9,
    },
    {
      id: 10,
      title: "Disability Scholarship",
      description:
        "Assists students with disabilities in achieving their educational goals.",
      imgSrc: courseImage10,
    },
  ];
  return (
    <div className="container">
      <h1>Courses</h1>
      <CourseCards courses={courses} />
      <button className="btnCourses">See All Courses</button>
    </div>
  );
};

export default CourseContainer;
