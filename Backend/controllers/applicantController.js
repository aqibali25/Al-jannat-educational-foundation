// controllers/applicantController.js
const db = require('../config/db');

// Add new applicant
exports.addApplicant = (req, res) => {
    const applicant = req.body;
    
    const sql = `INSERT INTO ApplicantDetails 
        (applicant_name, father_name, date_of_birth, resident_of, father_cnic, caste, religion, gender, age, disabled, address, mobile_no, total_annual_income, marital_status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [
        applicant.applicant_name, applicant.father_name, applicant.date_of_birth, applicant.resident_of, 
        applicant.father_cnic, applicant.caste, applicant.religion, applicant.gender, 
        applicant.age, applicant.disabled, applicant.address, applicant.mobile_no, 
        applicant.total_annual_income, applicant.marital_status
    ], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Applicant added successfully', id: result.insertId });
    });
};
