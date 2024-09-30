import React from "react";
import AcademicDetails from "../../Components/AdimissionForm/AcademicDetails";
import ApplicationDetails from "../../Components/AdimissionForm/ApplicationDetails";
import StudentSSCDetails from "../../Components/AdimissionForm/StudentSSCDetails";
import StudentPrequalifyingDetails from "../../Components/AdimissionForm/StudentPrequalifyingDetails";
import "./AdmissionForm.css";

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted:", formData);

  // Create a new window for the preview
  const previewWindow = window.open("", "_blank");

  // Create a new HTML document for the preview
  const previewHtml = `
    <html>
      <head>
        <title>Registration Preview</title>
        <style>
          body {
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        <h1>Registration Preview</h1>
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <p>Password: ${formData.password}</p>

        <button onClick="window.print()">Print</button>
      </body>
    </html>
  `;

  // Write the HTML to the preview window
  previewWindow.document.write(previewHtml);
  previewWindow.document.close();
};

const AdmissionForm = () => {
  return (
    <>
      <div className="admissionFormSection">
        <form action="">
          <h1 className="mainHeading text-center mt-5">
            SCHOLARSHIP APPLICATION FORM
          </h1>
          <section className="AdmissionFormSections">
            <AcademicDetails />
          </section>

          <h2 className="heading2 text-center">Student SSC/HSC Details</h2>
          <section className="AdmissionFormSections">
            <StudentSSCDetails />
          </section>

          <h2 className="heading2 text-center">Application Details</h2>
          <section className="AdmissionFormSections">
            <ApplicationDetails />
          </section>

          <h2 className="heading2 text-center">
            Student Prequalifying Details
          </h2>
          <section className="AdmissionFormSections">
            <StudentPrequalifyingDetails />
          </section>

          <div className="text-center mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
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
