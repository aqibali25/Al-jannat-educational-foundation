// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const applicantRoutes = require('./routes/applicantRoutes');

// Initialize app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/applicants', applicantRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Import the table creation logic
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
