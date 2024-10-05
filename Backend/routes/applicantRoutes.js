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
    academicDetails,
    sscDetails,
    prequalifyingDetails,
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
        return res.status(500).json({ message: "Server error", error: err.message });
      }

      const applicantId = result.insertId; // Get the newly created applicantId

      // If AcademicDetails are provided, insert into AcademicDetails table
      // If AcademicDetails are provided, insert into AcademicDetails table
      if (academicDetails) {
        const academicSql = `
    INSERT INTO AcademicDetails (
      applicant_id,
      qualification,
      institute,
      passingYear,
      class
    ) VALUES (?, ?, ?, ?, ?)
  `;

        db.query(
          academicSql,
          [
            applicantId,
            academicDetails.qualification,
            academicDetails.institute,
            academicDetails.passingYear,
            academicDetails.class, // Ensure you have this property in your academicDetails object
          ],
          (academicErr) => {
            if (academicErr) {
              console.error("Error inserting data into AcademicDetails table:", academicErr);
              return res.status(500).json({ message: "Error inserting academic details", error: academicErr.message });
            }
          }
        );
      }

      // If SSCDetails are provided, insert into SSCDetails table
      if (sscDetails) {
        const sscSql = `
          INSERT INTO sscdetails (
            applicant_id,
            ssc_hsc_board,
            passing_year,
            ssc_hsc_seat_number,
            marks_obtained
          ) VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
          sscSql,
          [
            applicantId,
            sscDetails.ssc_hsc_board,
            sscDetails.passing_year,
            sscDetails.ssc_hsc_seat_number,
            sscDetails.marks_obtained,
          ],
          (sscErr) => {
            if (sscErr) {
              console.error("Error inserting data into SSCDetails table:", sscErr);
              return res.status(500).json({ message: "Error inserting SSC details", error: sscErr.message });
            }
          }
        );
      }

      // If PrequalifyingDetails are provided, insert into PrequalifyingDetails table
      if (prequalifyingDetails) {
        const prequalifyingSql = `
          INSERT INTO prequalifyingdetails (
            applicant_id,
            last_attended_institute,
            last_exam_passed,
            last_exam_passed_year,
            last_exam_marks
          ) VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
          prequalifyingSql,
          [
            applicantId,
            prequalifyingDetails.last_attended_institute,
            prequalifyingDetails.last_exam_passed,
            prequalifyingDetails.last_exam_passed_year,
            prequalifyingDetails.last_exam_marks,
          ],
          (prequalifyingErr) => {
            if (prequalifyingErr) {
              console.error("Error inserting data into PrequalifyingDetails table:", prequalifyingErr);
              return res.status(500).json({ message: "Error inserting prequalifying details", error: prequalifyingErr.message });
            }
          }
        );
      }

      // Send success response after all inserts
      res.status(201).json({ message: "Applicant details submitted successfully" });
    }
  );
});

// POST /api/contact-us - Handle contact form submission
router.post("/contact-us", (req, res) => {
  const { name, email, message } = req.body;

  // Insert into contactus table
  const contactSql = `
    INSERT INTO contactus (name, email, message) VALUES (?, ?, ?)
  `;

  db.query(
    contactSql,
    [name, email, message],
    (err) => {
      if (err) {
        console.error("Error inserting data into contactus table:", err);
        return res.status(500).json({ message: "Server error", error: err.message });
      }
      res.status(201).json({ message: "Contact details submitted successfully" });
    }
  );
});

module.exports = router; // Export the router
