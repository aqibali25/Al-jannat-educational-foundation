// models/applicantModel.js
const db = require('../db');

// Create ApplicantDetails table
const createApplicantDetailsTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS ApplicantDetails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        applicant_name VARCHAR(255) NOT NULL,
        father_name VARCHAR(255) NOT NULL,
        date_of_birth DATE NOT NULL,
        resident_of ENUM('Ghotki', 'Khanpur', 'Mirpur', 'Daharki', 'Ubauro') NOT NULL,
        father_cnic BIGINT NOT NULL,
        caste VARCHAR(100),
        religion VARCHAR(100),
        gender ENUM('Male', 'Female', 'Other') NOT NULL,
        age INT,
        disabled ENUM('Yes', 'No') NOT NULL,
        address VARCHAR(255),
        mobile_no BIGINT,
        total_annual_income DECIMAL(10, 2),
        marital_status VARCHAR(100)
    );
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log('ApplicantDetails table created');
    });
};

// Create AcademicDetails table
const createAcademicDetailsTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS AcademicDetails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        academic_year VARCHAR(10) NOT NULL,
        application_date DATE NOT NULL,
        college_name VARCHAR(255) NOT NULL,
        class VARCHAR(255) NOT NULL,
        applicant_id INT,
        FOREIGN KEY (applicant_id) REFERENCES ApplicantDetails(id)
    );
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log('AcademicDetails table created');
    });
};

// Create SSCDetails table
const createSSCDetailsTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS SSCDetails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ssc_hsc_board VARCHAR(255) NOT NULL,
        passing_year VARCHAR(10) NOT NULL,
        ssc_hsc_seat_number VARCHAR(100) NOT NULL,
        marks_obtained VARCHAR(50) NOT NULL,
        applicant_id INT,
        FOREIGN KEY (applicant_id) REFERENCES ApplicantDetails(id)
    );
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log('SSCDetails table created');
    });
};

// Create PrequalifyingDetails table
const createPrequalifyingDetailsTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS PrequalifyingDetails (
        id INT AUTO_INCREMENT PRIMARY KEY,
        last_attended_institute VARCHAR(255) NOT NULL,
        last_exam_passed VARCHAR(255) NOT NULL,
        last_exam_passed_year VARCHAR(10) NOT NULL,
        last_exam_marks VARCHAR(50) NOT NULL,
        applicant_id INT,
        FOREIGN KEY (applicant_id) REFERENCES ApplicantDetails(id)
    );
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log('PrequalifyingDetails table created');
    });
};

module.exports = {
    createApplicantDetailsTable,
    createAcademicDetailsTable,
    createSSCDetailsTable,
    createPrequalifyingDetailsTable
};
