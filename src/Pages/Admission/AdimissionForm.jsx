import React, { useState } from "react";
import { toWords } from "number-to-words";
import FormField from "../../Components/AdimissionForm/FormField";
import ImageInput from "../../Components/AdimissionForm/ImageInput";
import DropdownField from "../../Components/AdimissionForm/DropdownField";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    uploadedImage: "",
    // academicYear: "",
    // applicationDate: "",
    // collegeName: "",
    // class: "",
    sscBoard: "",
    sscSeatNumber: "",
    marksObtained: "",
    applicantName: "",
    fathersName: "",
    dateOfBirth: "",
    residentOf: "",
    fathersCnic: "",
    caste: "",
    religion: "",
    gender: "Male", // Default value
    age: "",
    disabled: "No", // Default value
    address: "",
    mobile_no: "",
    annualIncome: "",
    maritalStatus: "Single", // Default value
    academicDetails: {
      academicYear: "",
      applicationDate: "",
      collegeName: "",
      class: "",
    },
    prequalifyingDetails: {
      last_attended_institute: "",
      last_exam_passed: "",
      last_exam_passed_year: "",
    },
    sscDetails: {
      ssc_hsc_board: "",
      passing_year: "",
      ssc_hsc_seat_number: "",
      marks_obtained: "",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [challanNumber, setChallanNumber] = useState("");

  const handleImageSelect = (imageData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      uploadedImage: imageData,
    }));
  };

  const handleInputChange = (key, value) => {
    if (key in formData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: value,
      }));
    } else if (key in formData.academicDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        academicDetails: {
          ...prevFormData.academicDetails,
          [key]: value,
        },
      }));
    } else if (key in formData.prequalifyingDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        prequalifyingDetails: {
          ...prevFormData.prequalifyingDetails,
          [key]: value,
        },
      }));
    } else if (key in formData.sscDetails) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        sscDetails: {
          ...prevFormData.sscDetails,
          [key]: value,
        },
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Assuming there's a function to generate a challan number
    const newChallanNumber = generateChallanNo();
    setIsSubmitted(true);
    setChallanNumber(newChallanNumber);

    try {
      const response = await fetch(
        "http://localhost:5000/api/applicants/applicant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.message); // Show success message or handle it as needed

      // Reset form data
      setFormData({
        uploadedImage: "",
        academicYear: "",
        applicationDate: "",
        collegeName: "",
        class: "",
        sscBoard: "",
        sscSeatNumber: "",
        marksObtained: "",
        applicantName: "",
        fathersName: "",
        dateOfBirth: "",
        residentOf: "",
        fathersCnic: "",
        caste: "",
        religion: "",
        gender: "Male", // Default value
        age: "",
        disabled: "No", // Default value
        address: "",
        mobile_no: "",
        annualIncome: "",
        maritalStatus: "Single", // Default value
        academicDetails: {
          academicYear: "",
          applicationDate: "",
          collegeName: "",
          class: "",
        },
        prequalifyingDetails: {
          last_attended_institute: "",
          last_exam_passed: "",
          last_exam_passed_year: "",
        },
        sscDetails: {
          ssc_hsc_board: "",
          passing_year: "",
          ssc_hsc_seat_number: "",
          marks_obtained: "",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  // console.log("Key: ", key, "Value: ", value);
  const generateChallanNo = () => {
    let lastChallan = localStorage.getItem("lastChallanNumber");
    if (!lastChallan) {
      lastChallan = 100000; // Starting number
    } else {
      lastChallan = parseInt(lastChallan, 10) + 1;
    }
    localStorage.setItem("lastChallanNumber", lastChallan);
    return `CH${lastChallan}`;
  };

  const printForm = (event) => {
    event.preventDefault();

    // console.log("Form Submitted!!", formData);

    const previewWindow = window.open("", "_blank");

    const previewHtml = `<html>
  <head>
    <title>Scholarship Application Preview</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap");
    </style>
    <style>
      body {
        font-family: "Poppins", system-ui;
        background-color: #f4f4f9;
        margin: 0;
        padding: 0;
      }

      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 25px;
        font-size: 2.5rem;
      }

      .preview-container {
        padding: 30px;
        max-width: 700px;
        margin: auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 15px;
      }

      .preview-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 30px;
      }

      .form-details {
        flex: 1;
        margin-right: 20px;
      }

      label {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }

      label strong {
        font-size: 1rem;
        flex-shrink: 0;
        margin-right: 10px;
        color: #555;
      }

      label p {
        flex: 1;
        margin: 0;
        font-size: 1.1rem;
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
      }

      .form-details label {
        margin-bottom: 15px;
      }

      .image-input-container {
        width: 150px;
        height: 200px;
        border: 2px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
      }

      .image-input-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }

      .section-title {
        text-align: left;
        background-color: #f4f4f9;
        padding: 10px;
        font-weight: bold;
        margin-bottom: 20px;
        border-left: 4px solid #4caf50;
        color: #4caf50;
        font-size: 1.2rem;
      }

      .row {
        margin-bottom: 20px;
      }

      .signature-container {
        width: 100%;
        text-align: right;
        margin-top: 30px;
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
        font-size: 1rem;
        font-weight: bold;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
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
          <label>
            <strong>Academic Year:</strong>
            <p class="input-field">${
              formData.academicDetails.academicYear || "N/A"
            }</p>
          </label>
          <label>
            <strong>Application Date:</strong>
            <p class="input-field">${
              formData.academicDetails.applicationDate || "N/A"
            }</p>
          </label>
          <label>
            <strong>College Name:</strong>
            <p class="input-field">${
              formData.academicDetails.collegeName || "N/A"
            }</p>
          </label>
          <label>
            <strong>Class:</strong>
            <p class="input-field">${
              formData.academicDetails.class || "N/A"
            }</p>
          </label>
        </div>
        <div class="image-input-container">
          ${
            formData.uploadedImage
              ? `<img src="${formData.uploadedImage}" alt="Uploaded Image"/>`
              : `<p>No Image Uploaded</p>`
          }
        </div>
      </div>

      <div class="section-title">Applicant Details</div>
      <div class="row">
        <label>
          <strong>Applicant Name:</strong>
          <p class="input-field">${formData.applicantName || "N/A"}</p>
        </label>
        <label>
          <strong>Father's Name:</strong>
          <p class="input-field">${formData.fathersName || "N/A"}</p>
        </label>
        <label>
          <strong>Date of Birth:</strong>
          <p class="input-field">${formData.dateOfBirth || "N/A"}</p>
        </label>
        <label>
          <strong>Resident Of:</strong>
          <p class="input-field">${formData.residentOf || "N/A"}</p>
        </label>
        <label>
          <strong>Father's CNIC:</strong>
          <p class="input-field">${formData.fathersCnic || "N/A"}</p>
        </label>
        <label>
          <strong>Caste:</strong>
          <p class="input-field">${formData.caste || "N/A"}</p>
        </label>
        <label>
          <strong>Religion:</strong>
          <p class="input-field">${formData.religion || "N/A"}</p>
        </label>
        <label>
          <strong>Gender:</strong>
          <p class="input-field">${formData.gender || "N/A"}</p>
        </label>
        <label>
          <strong>Age:</strong>
          <p class="input-field">${formData.age || "N/A"}</p>
        </label>
        <label>
          <strong>Disabled:</strong>
          <p class="input-field">${formData.disabled || "N/A"}</p>
        </label>
        <label>
          <strong>Address:</strong>
          <p class="input-field">${formData.address || "N/A"}</p>
        </label>
        <label>
          <strong>mobile No:</strong>
          <p class="input-field">${formData.mobile_no || "N/A"}</p>
        </label>
        <label>
          <strong>Total Annual Income:</strong>
          <p class="input-field">${formData.annualIncome || "N/A"}</p>
        </label>
        <label>
          <strong>Marital Status:</strong>
          <p class="input-field">${formData.maritalStatus || "N/A"}</p>
        </label>
      </div>

    ${
      formData.sscBoard.length > 0 &&
      formData.passingYear.length > 0 &&
      formData.sscSeatNumber.length > 0 &&
      formData.marksObtained.length > 0
        ? `<div class="section-title">Student SSC Details</div>
      <div class="row">
        <label>
          <strong>SSC Board:</strong>
          <p class="input-field">${formData.sscBoard || "N/A"}</p>
        </label>
        <label>
          <strong>Passing Year:</strong>
          <p class="input-field">${
            formData.academicDetails.passingYear || "N/A"
          }</p>
        </label>
        <label>
          <strong>SSC Seat Number:</strong>
          <p class="input-field">${
            formData.academicDetails.sscSeatNumber || "N/A"
          }</p>
        </label>
        <label>
          <strong>Marks Obtained:</strong>
          <p class="input-field">${
            formData.academicDetails.marksObtained || "N/A"
          }</p>
        </label>
      </div>`
        : ""
    }
      
      <div class="section-title">Student Prequalifying Details</div>
    <div className="row">
  <label>
    <strong>Last Attended School/College/Institute:</strong>
    <p className="input-field">${
      formData.prequalifyingDetails.last_attended_institute || "N/A"
    }</p>
  </label>
  <label>
    <strong>Last Exam Passed:</strong>
    <p className="input-field">${
      formData.prequalifyingDetails.last_exam_passed || "N/A"
    }</p>
  </label>
  <label>
    <strong>Last Exam Year:</strong>
    <p className="input-field">${
      formData.prequalifyingDetails.last_exam_passed_year || "N/A"
    }</p>
  </label>
</div>


      <div class="signature-container">
        <p>Applicant Signature</p>
      </div>

      <button onclick="window.print()">Print Form</button>

         </div>
       </body>
     </html>`;

    previewWindow.document.write(previewHtml);
    previewWindow.document.close();
  };

  const printChallan = (event) => {
    event.preventDefault();

    const classValue = formData.academicDetails.class.toString().toLowerCase();

    const payment =
      classValue === "6" ||
      classValue === "6th" ||
      classValue === "six" ||
      classValue === "7" ||
      classValue === "7th" ||
      classValue === "seven" ||
      classValue === "8" ||
      classValue === "8th" ||
      classValue === "eight"
        ? 1000
        : 1200;

    const paymentAmount = Number(payment);
    const loanAmount = Number(formData.loan || 0);
    const scholarshipFee = Number(formData.scholarshipProcessingFee || 0);
    const scholarshipsAmount = Number(formData.scholarships || 0);
    const discountAmount = Number(formData.discount || 0);

    // Compute total receivable
    const totalReceivable =
      paymentAmount +
      loanAmount +
      scholarshipFee +
      scholarshipsAmount -
      discountAmount;

    const receivableInWords = toWords(totalReceivable);

    const challanData = {
      copyTags: [
        { label: 1, copyTag: "Student" },
        { label: 2, copyTag: "Office" },
        { label: 3, copyTag: "Bank" },
      ],
      challanNo: challanNumber,
      school: formData.academicDetails.collegeName,
      dueDate: "2024-12-31",
      regRollNo: "",
      name: formData.applicantName,
      class: formData.academicDetails.class,
      scholarshipProcessingFee: "",
      discount: "",
      scholarships: "",
      loan: "",
      payment: payment,
      totalReceivable: totalReceivable,
      inWords: receivableInWords,
    };

    const previewWindow = window.open("", "_blank");

    const previewHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Challan Forms</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .copiesOfChallan {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            width: 100%;
          }
          .challan-form {
            width: 30%;
            max-height: 100%;
            padding: 10px 20px 0px 10px;
            border: 2px solid black;
            font-size: 12px;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 20px 10px;
          }
          .copyTag {
            font-size: 16px;
            font-weight: bold;
            text-align: left;
            margin-bottom: 10px;
          }
          .foundation-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin: 10px 0;
          }
          .foundation-details h2 {
            margin: 8px 0 5px;
            font-size: 0.8rem;
            font-weight: bold;
          }
          .foundation-details p {
            margin: 0;
            font-size: 0.55rem;
            margin: 0 10px;
          }
          .logo {
            width: 60px;
            height: 70px;
            margin-bottom: 8px;
          }
          .challan-info,
          .challan-details,
          .summary,
          .depositor-details,
          .signature-section,
          .instruction-section,
          .footer {
            margin-bottom: 10px;
          }
          .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom : 10px;
          }
          .row label {
            margin-top: 5px;
            max-width: 180px;
            font-weight: bold;
          }
          .row p {
          font-size: 1rem;
            width: calc(100% - 180px);
            border-bottom: 1px solid #000;
            margin: 0;
            padding-bottom: 5px;
          }
          .fields {
            width: 100%;
            display: inline-block;
            border-bottom: 1px solid #000;
            padding-bottom: 5px;
          }
          .instruction-section {
            font-size: 10px;
          }
          .urdu-text {
            font-family: "Jameel Noori Nastaleeq", serif;
            font-size: 12px;
            margin-top: 5px;
          }
          .footer {
            display: flex;
            justify-content: space-between;
          }
          .footer-sign,
          .footer-stamp,
          .footer-paid {
            width: 30%;
          }
          .footer p {
            padding-bottom: 5px;
            margin: 0;
          }
          .challan-form h2,
          .challan-form label {
            color: #333333;
          }
          .challan-form p.fields {
            min-height: 20px;
          }
  
          button {
            background-color: #4caf50;
            color: white;
            padding: 10px 30px;
            margin: 30px 0;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
          }
            /* Print styles */
    @media print {
      body * {
        visibility: hidden;
      }
      .copiesOfChallan, .copiesOfChallan * {
        visibility: visible;
      }
      .copiesOfChallan {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
      button {
        display: none;
      }
    }
        </style>
      </head>
      <body>
        <div class="copiesOfChallan">
          ${challanData.copyTags
            .map(
              (tag) => `
            <div class="challan-form">
              <div class="copyTag"><label>${tag.label}</label> ${tag.copyTag} Copy</div>
              <div class="header">
                <div class="foundation-details">
                  <img src="src/assets/AlJannatLogo.jpg" alt="Logo" class="logo" />
                  <div class="foundationDetails-inner">
                    <h2>AL-JANNAT EDUCATION FOUNDATION</h2>
                    <p>
                      Address: Main to Block Near University of Kids School Ghotki
                    </p>
                    <p>Contact: 0310 3353003</p>
                    <p>Email: ajannateducationfoundation@gmail.com</p>
                    <p>MCB bank Syed Sajjad Ali Shah (Chairman)</p>
                    <p>Account no: 0952771761008513</p>
                  </div>
                  <img src="src/assets/MCBLogo.png" alt="MCB Logo" class="logo" />
                </div>
              </div>
              <div class="challan-info row">
                <label>Challan No:</label>
                <p class="fields">${challanData.challanNo}</p>
              </div>
              <div class="challan-details">
                <div class="row">
                  <label>School:</label>
                  <p class="fields">${challanData.school}</p>
                </div>
                <div class="row">
                  <label>Due Date:</label>
                  <p class="fields">${challanData.dueDate}</p>
                </div>
                <div class="row">
                  <label>Reg/Roll No:</label>
                  <p class="fields">${challanData.regRollNo}</p>
                </div>
                <div class="row">
                  <label>Name:</label>
                  <p class="fields">${challanData.name}</p>
                </div>
                <div class="row">
                  <label>Class:</label>
                  <p class="fields">${challanData.class}</p>
                </div>
                <div class="row">
                  <label>Scholarship Processing Fee:</label>
                  <p class="fields">${challanData.scholarshipProcessingFee}</p>
                </div>
              </div>
              <div class="summary">
                <div class="row">
                  <label>Discount:</label>
                  <p class="fields">${challanData.discount}</p>
                </div>
                <div class="row">
                  <label>Scholarships:</label>
                  <p class="fields">${challanData.scholarships}</p>
                </div>
                <div class="row">
                  <label>Loan:</label>
                  <p class="fields">${challanData.loan}</p>
                </div>
                <div class="row">
                  <label>Payment:</label>
                  <p class="fields">${challanData.payment}</p>
                </div>
                <div class="row">
                  <label>Total Receivable:</label>
                  <p class="fields">${challanData.totalReceivable}</p>
                </div>
              </div>
              <div class="depositor-details">
                <div class="row">
                  <label>In Words:</label>
                  <p class="fields">${challanData.inWords}</p>
                </div>
                <div class="row">
                  <label>Depositor Name:</label>
                  <p class="fields"></p>
                </div>
                <div class="row">
                  <label>Depositor's CNIC:</label>
                  <p class="fields"></p>
                </div>
                <div class="row">
                  <label>Tel/mobile No:</label>
                  <p class="fields"></p>
                </div>
              </div>
              <div class="signature-section">
                <div class="row">
                  <label>Signature & Stamp:</label>
                  <p class="fields"></p>
                </div>
              </div>
              <div class="instruction-section">
                <p className="challanNote" style="color: red; font-weight: 600;">
                  Note: Please Send Paid Challan To Our Official Email Address.
                  <br />
                  aljannateducationfoundation@gmail.com
                </p>
                <p>
                  Instructions: Please keep this receipt safe. It is proof of your
                  payment.
                </p>
                <p class="urdu-text">براہ کرم اس رسید کو محفوظ رکھیں۔ یہ آپ کی ادائیگی کا ثبوت ہے۔</p>
              </div>
              <div class="footer">
                <div class="footer-sign">
                  <p>Depositor's Signature:</p>
                  <p>____________________</p>
                </div>
                <div class="footer-stamp">
                  <p>Stamp:</p>
                  <p>____________________</p>
                </div>
                <div class="footer-paid">
                  <p>Paid Date:</p>
                  <p></p>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        <button onclick="window.print()">Print</button>
      </body>
    </html>
  `;

    previewWindow.document.open();
    previewWindow.document.write(previewHtml);
    previewWindow.document.close();
  };
  if (isSubmitted) {
    // Render success page after form submission
    return (
      <div className="admissionFormSection text-center p-5">
        <h1 className="mainHeading mb-4">Form Submitted Successfully!</h1>
        <p>
          Your form has been submitted. You can now print the form or the
          challan.
        </p>
        <p className="challanNote">
          Note: Please Send Paid Challan To Our Official Email Address.
          <br />
          aljannateducationfoundation@gmail.com
        </p>
        <button onClick={printForm} className="btn btn-primary m-2">
          Print Form
        </button>
        <button onClick={printChallan} className="btn btn-secondary m-2">
          Print Challan
        </button>
      </div>
    );
  }

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
                required
              />
              <FormField
                label="Application Date"
                type="date"
                value={formData.applicationDate}
                onChange={(e) =>
                  handleInputChange("applicationDate", e.target.value)
                }
                required
              />
              <FormField
                label="College Name"
                type="text"
                value={formData.collegeName}
                onChange={(e) =>
                  handleInputChange("collegeName", e.target.value)
                }
                required
              />
              <FormField
                label="Class"
                type="text"
                value={formData.class}
                onChange={(e) => handleInputChange("class", e.target.value)}
                required
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
                required
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Father's Name"
                type="text"
                value={formData.fathersName}
                onChange={(e) =>
                  handleInputChange("fathersName", e.target.value)
                }
                required
              />
            </div>{" "}
            <div className="col-md-6">
              <FormField
                label="Father's CNIC"
                type="text"
                value={formData.fathersCnic}
                onChange={(e) =>
                  handleInputChange("fathersCnic", e.target.value)
                }
                required
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e.target.value)
                }
                required
              />
            </div>
            <div className="col-md-6">
              <DropdownField
                label="Resident Of"
                type="text"
                value={formData.residentOf}
                options={["Ghotki", "Khanpur", "Mirpur", "Daharki", "Ubauro"]}
                onChange={(e) =>
                  handleInputChange("residentOf", e.target.value)
                }
              />
            </div>
            <div className="col-md-12">
              <FormField
                label="Caste"
                type="text"
                value={formData.caste}
                onChange={(e) => handleInputChange("caste", e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Religion"
                type="text"
                value={formData.religion}
                onChange={(e) => handleInputChange("religion", e.target.value)}
                required
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
            <div className="col-md-6">
              <FormField
                label="Age"
                type="text"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <DropdownField
                label="Disabled"
                value={formData.disabled}
                options={["Yes", "No"]}
                onChange={(e) => handleInputChange("disabled", e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <FormField
                label="Address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Mobile No"
                type="text"
                value={formData.mobile_no}
                onChange={(e) => handleInputChange("mobile_no", e.target.value)}
                required
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
                required
              />
            </div>
            <div className="col-md-12">
              <DropdownField
                label="Marital Status"
                value={formData.maritalStatus}
                options={["Single", "Married"]}
                onChange={(e) =>
                  handleInputChange("maritalStatus", e.target.value)
                }
                required
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
                value={formData.sscDetails.ssc_hsc_board}
                onChange={(e) =>
                  handleInputChange("ssc_hsc_board", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Passing Year (9th, 10th, 11th, 12th)"
                type="text"
                value={formData.sscDetails.passing_year}
                onChange={(e) =>
                  handleInputChange("passing_year", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="SSC/HSC Seat Number"
                type="text"
                value={formData.sscDetails.ssc_hsc_seat_number}
                onChange={(e) =>
                  handleInputChange("ssc_hsc_seat_number", e.target.value)
                }
              />
            </div>
            <div className="col-md-6">
              <FormField
                label="Marks Obtained"
                type="text"
                value={formData.sscDetails.marks_obtained}
                onChange={(e) =>
                  handleInputChange("marks_obtained", e.target.value)
                }
              />
            </div>
          </div>
        </section>

        {/* /* Student Prequalifying Details Section */}
        <section className="mb-5 AdmissionFormSections">
          <h2 className="heading2 text-center mb-4">
            Student Prequalifying Details
          </h2>
          <div className="col-md-12">
            <FormField
              label="Last Attended School/College/Institute"
              type="text"
              value={formData.prequalifyingDetails.last_attended_institute}
              onChange={(e) =>
                handleInputChange("last_attended_institute", e.target.value)
              }
              required
            />
          </div>
          <div className="col-md-12">
            <FormField
              label="Last Exam Passed"
              type="text"
              value={formData.prequalifyingDetails.last_exam_passed}
              onChange={(e) =>
                handleInputChange("last_exam_passed", e.target.value)
              }
              required
            />
          </div>
          <div className="col-md-12">
            <FormField
              label="Last Exam Passed Year"
              type="text"
              value={formData.prequalifyingDetails.last_exam_passed_year}
              onChange={(e) =>
                handleInputChange("last_exam_passed_year", e.target.value)
              }
              required
            />
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
