import React, { useState } from "react";
import AcademicDetails from "../../Components/AdimissionForm/AcademicDetails";
import ApplicationDetails from "../../Components/AdimissionForm/ApplicationDetails";
import StudentSSCDetails from "../../Components/AdimissionForm/StudentSSCDetails";
import StudentPrequalifyingDetails from "../../Components/AdimissionForm/StudentPrequalifyingDetails";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    applicantName: "",
    fathersName: "",
    dateOfBirth: "",
    residentOf: "",
    fathersCnic: "",
    caste: "",
    religion: "",
    gender: "",
    age: "",
    disabled: false,
    address: "",
    mobileNo: "",
    annualIncome: "",
    maritalStatus: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/applicants/applicant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
        alert("Application submitted successfully!");
      } else {
        console.error("Error submitting form");
        alert("Failed to submit application");
      }
    } catch (error) {
      console.error("Error in submission:", error);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <>
      <div className="admissionFormSection">
        <form onSubmit={handleSubmit}>
          <h1 className="mainHeading text-center mt-5">
            SCHOLARSHIP APPLICATION FORM
          </h1>

          {/* Add input fields here to capture the necessary form data */}
          <section className="AdmissionFormSections">
            <AcademicDetails onChange={handleChange} />
          </section>

          <h2 className="heading2 text-center">Student SSC/HSC Details</h2>
          <section className="AdmissionFormSections">
            <StudentSSCDetails onChange={handleChange} />
          </section>

          <h2 className="heading2 text-center">Application Details</h2>
          <section className="AdmissionFormSections">
            <ApplicationDetails onChange={handleChange} />
          </section>

          <h2 className="heading2 text-center">
            Student Prequalifying Details
          </h2>
          <section className="AdmissionFormSections">
            <StudentPrequalifyingDetails onChange={handleChange} />
          </section>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary submitButton"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdmissionForm;
