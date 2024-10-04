const express = require("express"); // Import express
const router = express.Router(); // Initialize router
const db = require("../db.js"); // Your database connection

// POST /api/applicant - Handle applicant form submission
router.post("/applicant", (req, res) => {
  const {
    applicantName,
    fathersName,
    dateOfBirth,
    residentOf,
    fathersCnic,
    caste,
    religion,
    gender,
    age,
    disabled,
    address,
    mobileNo,
    annualIncome,
    maritalStatus,
    academicDetails, // Add academic details if applicable
    sscDetails, // Add SSC details if applicable
    prequalifyingDetails, // Add prequalifying details if applicable
  } = req.body;

  // Insert into ApplicantDetails table
  const applicantSql = `
    INSERT INTO ApplicantDetails (
      applicant_name,
      father_name,
      date_of_birth,
      resident_of,
      father_cnic,
      caste,
      religion,
      gender,
      age,
      disabled,
      address,
      mobile_no,
      total_annual_income,
      marital_status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    applicantSql,
    [
      applicantName,
      fathersName,
      dateOfBirth,
      residentOf,
      fathersCnic,
      caste,
      religion,
      gender,
      age,
      disabled,
      address,
      mobileNo,
      annualIncome,
      maritalStatus,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into ApplicantDetails table:", err);
        res.status(500).json({ message: "Server error", error: err.message });
      } else {
        // Optionally, add logic to insert into other tables (e.g., AcademicDetails, SSCDetails, PrequalifyingDetails)

        // If AcademicDetails are provided, insert into AcademicDetails table
        if (academicDetails) {
          const academicSql = `
          INSERT INTO AcademicDetails (
            applicantId,  // Assuming applicantId is a foreign key
            qualification,
            institute,
            passingYear,
            percentage
          ) VALUES (?, ?, ?, ?, ?)
        `;

          db.query(
            academicSql,
            [
              result.insertId, // Assuming the ID of the inserted applicant is returned
              academicDetails.qualification,
              academicDetails.institute,
              academicDetails.passingYear,
              academicDetails.percentage,
            ],
            (academicErr, academicResult) => {
              if (academicErr) {
                console.error(
                  "Error inserting data into AcademicDetails table:",
                  academicErr
                );
              }
            }
          );
        }

        // If SSCDetails are provided, insert into SSCDetails table
        if (sscDetails) {
          const sscSql = `
          INSERT INTO SSCDetails (
            applicantId,
            boardName,
            totalMarks,
            obtainedMarks,
            grade
          ) VALUES (?, ?, ?, ?, ?)
        `;

          db.query(
            sscSql,
            [
              result.insertId,
              sscDetails.boardName,
              sscDetails.totalMarks,
              sscDetails.obtainedMarks,
              sscDetails.grade,
            ],
            (sscErr, sscResult) => {
              if (sscErr) {
                console.error(
                  "Error inserting data into SSCDetails table:",
                  sscErr
                );
              }
            }
          );
        }

        // If PrequalifyingDetails are provided, insert into PrequalifyingDetails table
        if (prequalifyingDetails) {
          const prequalifyingSql = `
          INSERT INTO PrequalifyingDetails (
            applicantId,
            degreeName,
            university,
            yearCompleted,
            grade
          ) VALUES (?, ?, ?, ?, ?)
        `;

          db.query(
            prequalifyingSql,
            [
              result.insertId,
              prequalifyingDetails.degreeName,
              prequalifyingDetails.university,
              prequalifyingDetails.yearCompleted,
              prequalifyingDetails.grade,
            ],
            (prequalifyingErr, prequalifyingResult) => {
              if (prequalifyingErr) {
                console.error(
                  "Error inserting data into PrequalifyingDetails table:",
                  prequalifyingErr
                );
              }
            }
          );
        }

        res
          .status(201)
          .json({ message: "Applicant details submitted successfully" });
      }
    }
  );
});

router.post("/contact-us", (req, res) => {
  const {name, email, message} = req.body;

  // Insert into ApplicantDetails table
  const contactSql = `
    INSERT INTO contactus (name, email, message) VALUES (?, ?, ?)
  `;

  db.query(
    contactSql,
    [name, email, message],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into ApplicantDetails table:", err);
        res.status(500).json({ message: "Server error", error: err.message });
      } else {
        res
          .status(201)
          .json({ message: "Contact details submitted successfully" });
      }
    }
  );
});

module.exports = router; // Export the router
