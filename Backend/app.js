// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const applicantRoutes = require('./routes/applicantRoutes'); // Adjust the path as needed

// Initialize app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/api/applicants', applicantRoutes); // Your applicant routes

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Import the table creation logic if needed
const {
    createApplicantDetailsTable,
    createAcademicDetailsTable,
    createSSCDetailsTable,
    createPrequalifyingDetailsTable
} = require('./models/applicantModel');

// Initialize database tables
createApplicantDetailsTable();
createAcademicDetailsTable();
createSSCDetailsTable();
createPrequalifyingDetailsTable();
