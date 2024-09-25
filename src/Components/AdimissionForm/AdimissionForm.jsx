import "../Styles/AdmissionForm.css";
import AcademicDetails from "./AcademicDetails";
import StudentSSCDetails from "./StudentSSCDetails";
import ApplicationDetails from "./ApplicationDetails";
import StudentPrequalifyingDetails from "./StudentPrequalifyingDetails";

const AdimissionForm = () => {
  return (
    <section className="admissionFormSection">
      <form action="">
        <h1 className="mainHeading">Scholarship Application Form</h1>
        <AcademicDetails />
        <h2 className="heading2 text-center">Student SSC Details</h2>
        <StudentSSCDetails />
        <h2 className="heading2 text-center">Application Details</h2>
        <ApplicationDetails />
        <h2 className="heading2 text-center">Student Prequalifying Details</h2>
        <StudentPrequalifyingDetails />
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AdimissionForm;
