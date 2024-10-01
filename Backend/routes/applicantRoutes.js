const express = require('express');
const router = express.Router();
const db = require('../db.js'); // This will use the newly created db.js file

// POST /api/applicant - Handle applicant form submission
router.post('/applicant', (req, res) => {
  const { applicantName, fathersName, dateOfBirth, residentOf, fathersCnic, caste, religion, gender, age, disabled, address, mobileNo, annualIncome, maritalStatus } = req.body;

  const sql = `INSERT INTO ApplicantDetails (applicantName, fathersName, dateOfBirth, residentOf, fathersCnic, caste, religion, gender, age, disabled, address, mobileNo, annualIncome, maritalStatus) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [applicantName, fathersName, dateOfBirth, residentOf, fathersCnic, caste, religion, gender, age, disabled, address, mobileNo, annualIncome, maritalStatus], (err, result) => {
    if (err) {
      console.error('Error inserting data into ApplicantDetails table:', err);
      res.status(500).json({ message: 'Server error' });
    } else {
      res.status(201).json({ message: 'Applicant details submitted successfully' });
    }
  });
});

module.exports = router;
