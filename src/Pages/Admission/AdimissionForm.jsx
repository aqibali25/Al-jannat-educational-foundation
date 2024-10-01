import React, { useState } from "react";
import FormField from "../../Components/AdimissionForm/FormField";
import ImageInput from "../../Components/AdimissionForm/ImageInput";
import DropdownField from "../../Components/AdimissionForm/DropdownField";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    uploadedImage: "",
    academicYear: "",
    applicationDate: "",
    collegeName: "",
    class: "",
    sscBoard: "",
    passingYear: "",
    sscSeatNumber: "",
    marksObtained: "",
    applicantName: "",
    fatherName: "",
    dob: "",
    residentOf: "",
    fatherCnic: "",
    caste: "",
    religion: "",
    gender: "",
    age: "",
    disabled: "",
    address: "",
    mobile: "",
    annualIncome: "",
    maritalStatus: "",
    lastSchool: "",
    lastExamPassed: "",
    lastExamYear: "",
    lastExamMarks: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Submitted!!", formData);

    const previewWindow = window.open("", "_blank");

    const previewHtml = `
  <html>
    <head>
      <title>Scholarship Application Preview</title>
      <style>
           @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <style>
      body {
          font-family: "Poppins", system-ui;
        }
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 40px;
        }
        .preview-container {
          padding: 20px;
          max-width: 700px;
          margin: 0 auto;
          background-color: #ffffff
        }
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .form-details {
          flex: 1;
          margin-right: 20px;
        }
        .form-details p {
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
          margin-bottom: 30px;
        }
        .image-input-container {
          width: 150px; /* Adjusted size */
          height: 200px;
          border: 2px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-input-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .section-title {
          text-align: center;
          background-color: #e0e0e0;
          padding: 8px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .row {
          margin-bottom: 20px;
        }
        .row p {
          border-bottom: 1px solid #ccc;
          padding-bottom: 10px;
        }
        .signature-container {
          width: 100%;
          text-align: right;
          margin-top: 40px;
        }
        .signature-container p {
          display: inline-block;
          border-top: 1px solid #000;
          padding-top: 10px;
        }
        button {
          display: block;
          margin: 20px auto;
          padding: 10px 30px;
          font-size: 20px;
          font-weight: bold;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
        @media print {
          body * {
            visibility: hidden;
          }
          .preview-container,
          .preview-container * {
            visibility: visible;
          }
          .preview-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
          button {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="preview-container">
        <h1>Scholarship Application Form</h1>

        <div class="preview-header">
          <div class="form-details">
            <p class="input-field"><strong>Academic Year:</strong> ${
              formData.academicYear || "N/A"
            }</p>
            <p class="input-field"><strong>Application Date:</strong> ${
              formData.applicationDate || "N/A"
            }</p>
            <p class="input-field"><strong>College Name:</strong> ${
              formData.collegeName || "N/A"
            }</p>
          </div>
          <div class="image-input-container">
            ${
              formData.uploadedImage
                ? `<img src="${formData.uploadedImage}" alt="Uploaded Image" />`
                : `<p>No Image Uploaded</p>`
            }
          </div>
        </div>

        <div class="section-title">Student SSC Details</div>
        <div class="row">
          <p class="input-field"><strong>SSC Board:</strong> ${
            formData.sscBoard || "N/A"
          }</p>
          <p class="input-field"><strong>Passing Year:</strong> ${
            formData.passingYear || "N/A"
          }</p>
          <p class="input-field"><strong>SSC Seat Number:</strong> ${
            formData.sscSeatNumber || "N/A"
          }</p>
          <p class="input-field"><strong>Marks Obtained:</strong> ${
            formData.marksObtained || "N/A"
          }</p>
        </div>

        <div class="section-title">Applicant Details</div>
        <div class="row">
          <p class="input-field"><strong>Applicant Name:</strong> ${
            formData.applicantName || "N/A"
          }</p>
          <p class="input-field"><strong>Father's Name:</strong> ${
            formData.fatherName || "N/A"
          }</p>
          <p class="input-field"><strong>Date of Birth:</strong> ${
            formData.dob || "N/A"
          }</p>
          <p class="input-field"><strong>Resident Of:</strong> ${
            formData.residentOf || "N/A"
          }</p>
          <p class="input-field"><strong>Father's CNIC:</strong> ${
            formData.fatherCnic || "N/A"
          }</p>
          <p class="input-field"><strong>Caste:</strong> ${
            formData.caste || "N/A"
          }</p>
          <p class="input-field"><strong>Religion:</strong> ${
            formData.religion || "N/A"
          }</p>
          <p class="input-field"><strong>Gender:</strong> ${
            formData.gender || "N/A"
          }</p>
          <p class="input-field"><strong>Age:</strong> ${
            formData.age || "N/A"
          }</p>
          <p class="input-field"><strong>Disabled:</strong> ${
            formData.disabled || "N/A"
          }</p>
          <p class="input-field"><strong>Address:</strong> ${
            formData.address || "N/A"
          }</p>
          <p class="input-field"><strong>Mobile No:</strong> ${
            formData.mobile || "N/A"
          }</p>
          <p class="input-field"><strong>Total Annual Income:</strong> ${
            formData.annualIncome || "N/A"
          }</p>
          <p class="input-field"><strong>Marital Status:</strong> ${
            formData.maritalStatus || "N/A"
          }</p>
        </div>

        <div class="section-title">Student Prequalifying Details</div>
        <div class="row">
          <p class="input-field"><strong>Last Attended School/College/Institute:</strong> ${
            formData.lastSchool || "N/A"
          }</p>
          <p class="input-field"><strong>Last Exam Passed:</strong> ${
            formData.lastExamPassed || "N/A"
          }</p>
          <p class="input-field"><strong>Last Exam Year:</strong> ${
            formData.lastExamYear || "N/A"
          }</p>
          <p class="input-field"><strong>Last Exam Marks:</strong> ${
            formData.lastExamMarks || "N/A"
          }</p>
        </div>

        <div class="signature-container">
          <p>Applicant Signature</p>
        </div>

        <button onclick="window.print()">Print Form</button>
      </div>
    </body>
  </html>
  `;

    previewWindow.document.write(previewHtml);
    previewWindow.document.close();
  };

  const handleInputChange = (key, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [key]: value }));
  };

  return (
    <div className="admissionFormSection">
      <form onSubmit={handleSubmit}>
        <h1 className="mainHeading text-center mb-5">
          SCHOLARSHIP APPLICATION FORM
        </h1>

        {/* Academic Details Section */}
        <section className="mb-5 AdmissionFormSections">
          <div className="row align-items-center mb-4">
            <div
              className="col-md-4 text-center"
              style={{ display: "contents" }}
            >
              <ImageInput />
            </div>
            <div className="col-md-8">
              <FormField
                label="Academic Year"
                type="text"
                value={formData.academicYear}
                onChange={(e) =>
                  handleInputChange("academicYear", e.target.value)
                }
              />
              <FormField
                label="Application Date"
                type="date"
                value={formData.applicationDate}
                onChange={(e) =>
                  handleInputChange("applicationDate", e.target.value)
                }
              />
              <FormField
                label="College Name"
                type="text"
                value={formData.collegeName}
                onChange={(e) =>
                  handleInputChange("collegeName", e.target.value)
                }
              />
              <FormField
                label="Class"
                type="text"
                value={formData.class}
                onChange={(e) => handleInputChange("class", e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Student SSC/HSC Details Section */}
        <section className="mb-5 AdmissionFormSections">
          <h2 className="heading2 text-center mb-4">Student SSC/HSC Details</h2>
          <div className="row">
            <div className="col-md-6">
              <FormField
                label="SSC/HSC Board"
                type="text"
                value={formData.sscBoard}
                onChange={(e) => handleInputChange("sscBoard", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Passing Year (9th, 10th, 11th, 12th)"
                type="text"
                value={formData.passingYear}
                onChange={(e) =>
                  handleInputChange("passingYear", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="SSC/HSC Seat Number"
                type="text"
                value={formData.sscSeatNumber}
                onChange={(e) =>
                  handleInputChange("sscSeatNumber", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Marks Obtained"
                type="text"
                value={formData.marksObtained}
                onChange={(e) =>
                  handleInputChange("marksObtained", e.target.value)
                }
              />
            </div>
          </div>
        </section>

        {/* Application Details Section */}
        <section className="mb-5 AdmissionFormSections">
          <h2 className="heading2 text-center mb-4">Application Details</h2>
          <div className="row">
            <div className="col-md-12">
              <FormField
                label="Applicant Name"
                type="text"
                value={formData.applicantName}
                onChange={(e) =>
                  handleInputChange("applicantName", e.target.value)
                }
              />
            </div>
            <div className="col-md-12">
              <FormField
                label="Father's Name"
                type="text"
                value={formData.fatherName}
                onChange={(e) =>
                  handleInputChange("fatherName", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Date of Birth"
                type="date"
                value={formData.dob}
                onChange={(e) => handleInputChange("dob", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Resident Of"
                type="text"
                value={formData.residentOf}
                onChange={(e) =>
                  handleInputChange("residentOf", e.target.value)
                }
              />
            </div>
            <div className="col-md-12">
              <FormField
                label="Father's CNIC"
                type="text"
                value={formData.fatherCnic}
                onChange={(e) =>
                  handleInputChange("fatherCnic", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Caste"
                type="text"
                value={formData.caste}
                onChange={(e) => handleInputChange("caste", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Religion"
                type="text"
                value={formData.religion}
                onChange={(e) => handleInputChange("religion", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <DropdownField
                label="Gender"
                value={formData.gender}
                options={["Male", "Female", "Other"]}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <FormField
                label="Age"
                type="text"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <DropdownField
                label="Disabled"
                value={formData.disabled}
                options={["Yes", "No"]}
                onChange={(e) => handleInputChange("disabled", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Mobile No."
                type="text"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Total Annual Income"
                type="text"
                value={formData.annualIncome}
                onChange={(e) =>
                  handleInputChange("annualIncome", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <DropdownField
                label="Marital Status"
                value={formData.maritalStatus}
                options={["Single", "Married"]}
                onChange={(e) =>
                  handleInputChange("maritalStatus", e.target.value)
                }
              />
            </div>
          </div>
        </section>

        {/* Student Prequalifying Details Section */}
        <section className="mb-5 AdmissionFormSections">
          <h2 className="heading2 text-center mb-4">
            Student Prequalifying Details
          </h2>
          <div className="row">
            <div className="col-md-12">
              <FormField
                label="Last Attended School/College/Institute"
                type="text"
                value={formData.lastSchool}
                onChange={(e) =>
                  handleInputChange("lastSchool", e.target.value)
                }
              />
            </div>
            <div className="col-md-12">
              <FormField
                label="Last Exam Passed"
                type="text"
                value={formData.lastExamPassed}
                onChange={(e) =>
                  handleInputChange("lastExamPassed", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Last Exam Passed Year"
                type="text"
                value={formData.lastExamYear}
                onChange={(e) =>
                  handleInputChange("lastExamYear", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Last Exam Marks"
                type="text"
                value={formData.lastExamMarks}
                onChange={(e) =>
                  handleInputChange("lastExamMarks", e.target.value)
                }
              />
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="text-center col-md-12">
          <button type="submit" className="submitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
