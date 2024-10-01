const express = require('express'); // Import express
const router = express.Router(); // Initialize router
const db = require('../db.js'); // Your database connection

// POST /api/applicant - Handle applicant form submission
router.post('/applicant', (req, res) => {
  const { applicantName, fathersName, dateOfBirth, residentOf, fathersCnic, caste, religion, gender, age, disabled, address, mobileNo, annualIncome, maritalStatus } = req.body;

  const sql = `INSERT INTO ApplicantDetails (applicant_name, fathersName, dateOfBirth, residentOf, fathersCnic, caste, religion, gender, age, disabled, address, mobileNo, annualIncome, maritalStatus) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [applicantName, fathersName, dateOfBirth, residentOf, fathersCnic, caste, religion, gender, age, disabled, address, mobileNo, annualIncome, maritalStatus], (err, result) => {
    if (err) {
      console.error('Error inserting data into ApplicantDetails table:', err);
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(201).json({ message: 'Applicant details submitted successfully' });
    }
  });
});

module.exports = router; // Export the router
