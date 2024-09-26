import React from "react";
import AcademicDetails from "./AcademicDetails";
import ApplicationDetails from "./ApplicationDetails";
import StudentSSCDetails from "./StudentSSCDetails";
import StudentPrequalifyingDetails from "./StudentPrequalifyingDetails";
import "../Styles/AdmissionForm.css";

const AdmissionForm = () => {
  return (
    <div className="admissionFormSection">
      <form>
        <h1 className="mainHeading text-center mt-5">
          SCHOLARSHIP APPLICATION FORM
        </h1>
        <section className="AdmissionFormSections">
          <AcademicDetails />
        </section>

        <h2 className="heading2 text-center">Student SSC Details</h2>
        <section className="AdmissionFormSections">
          <StudentSSCDetails />
        </section>

        <h2 className="heading2 text-center">Application Details</h2>
        <section className="AdmissionFormSections">
          <ApplicationDetails />
        </section>

        <h2 className="heading2 text-center">Student Prequalifying Details</h2>
        <section className="AdmissionFormSections">
          <StudentPrequalifyingDetails />
        </section>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
