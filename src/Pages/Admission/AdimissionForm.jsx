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
  const handleImageSelect = (imageData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      uploadedImage: imageData,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Submitted!!", formData);

    const previewWindow = window.open("", "_blank");

    const previewHtml = `
  <html>
    <head>
      <title>Scholarship Application Preview</title>
      <style>
           @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
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
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;  
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 10px 0px !important;
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
      
      label {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      
      label strong {
        flex-shrink: 0;
        margin-right: 20px;
      }
      
      label p {
        flex: 1;
        margin: 0;
        border-bottom: 2px solid black;
        padding-bottom: 5px;
      }
      .form-details label{
        margin-bottom: 20px;
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
      
      .signature-container {
        width: 100%;
        text-align: right;
        margin-top: 40px;
      }
      
      .signature-container p {
        display: inline-block;
        border-top: 1px solid #000;
        padding-top: 15px;
      }
      
      button {
        display: block;
        margin: 20px auto;
        padding: 10px 30px;
        font-size: 20px;
        font-weight: bold;
        background-color: #4caf50;
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
        .preview-container, .preview-container * {
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
            <label><strong>Academic Year:</strong> <p class="input-field">${
              formData.academicYear || "N/A"
            }</p></label>
            <label><strong>Application Date:</strong> <p class="input-field">${
              formData.applicationDate || "N/A"
            }</p></label>
            <label><strong>College Name:</strong> <p class="input-field">${
              formData.collegeName || "N/A"
            }</p></label>
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
          <label><strong>SSC Board:</strong> <p class="input-field">${
            formData.sscBoard || "N/A"
          }</p></label>
          <label><strong>Passing Year:</strong> <p class="input-field">${
            formData.passingYear || "N/A"
          }</p></label>
          <label><strong>SSC Seat Number:</strong> <p class="input-field">${
            formData.sscSeatNumber || "N/A"
          }</p></label>
          <label><strong>Marks Obtained:</strong> <p class="input-field">${
            formData.marksObtained || "N/A"
          }</p></label>
        </div>

        <div class="section-title">Applicant Details</div>
        <div class="row">
          <label><strong>Applicant Name:</strong> <p class="input-field">${
            formData.applicantName || "N/A"
          }</p></label>
          <label><strong>Father's Name:</strong> <p class="input-field">${
            formData.fatherName || "N/A"
          }</p></label>
          <label><strong>Date of Birth:</strong> <p class="input-field">${
            formData.dob || "N/A"
          }</p></label>
          <label><strong>Resident Of:</strong> <p class="input-field">${
            formData.residentOf || "N/A"
          }</p></label>
          <label><strong>Father's CNIC:</strong> <p class="input-field">${
            formData.fatherCnic || "N/A"
          }</p></label>
          <label><strong>Caste:</strong> <p class="input-field">${
            formData.caste || "N/A"
          }</p></label>
          <label><strong>Religion:</strong> <p class="input-field">${
            formData.religion || "N/A"
          }</p></label>
          <label><strong>Gender:</strong> <p class="input-field">${
            formData.gender || "N/A"
          }</p></label>
          <label><strong>Age:</strong> <p class="input-field">${
            formData.age || "N/A"
          }</p></label>
          <label><strong>Disabled:</strong> <p class="input-field">${
            formData.disabled || "N/A"
          }</p></label>
          <label><strong>Address:</strong> <p class="input-field">${
            formData.address || "N/A"
          }</p></label>
          <label><strong>Mobile No:</strong> <p class="input-field">${
            formData.mobile || "N/A"
          }</p></label>
          <label><strong>Total Annual Income:</strong> <p class="input-field">${
            formData.annualIncome || "N/A"
          }</p></label>
          <label><strong>Marital Status:</strong> <p class="input-field">${
            formData.maritalStatus || "N/A"
          }</p></label>
        </div>

        <div class="section-title">Student Prequalifying Details</div>
        <div class="row">
          <label><strong>Last Attended School/College/Institute:</strong> <p class="input-field">${
            formData.lastSchool || "N/A"
          }</p></label>
          <label><strong>Last Exam Passed:</strong> <p class="input-field">${
            formData.lastExamPassed || "N/A"
          }</p></label>
          <label><strong>Last Exam Year:</strong> <p class="input-field">${
            formData.lastExamYear || "N/A"
          }</p></label>
          <label><strong>Last Exam Marks:</strong> <p class="input-field">${
            formData.lastExamMarks || "N/A"
          }</p></label>
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
              <ImageInput onImageSelect={handleImageSelect} />
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
