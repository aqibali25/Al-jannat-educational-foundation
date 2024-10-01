// db.js
const mysql = require('mysql');

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',      // Your database host (for XAMPP, use localhost)
  user: 'root',           // Your database username (default is 'root' for XAMPP)
  password: '',           // Your database password (leave it blank if none)
  database: 'al_jannat_educational_foundation'   // Replace with your actual database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);  // Exit the application if connection fails
  } else {
    console.log('Connected to MySQL database via XAMPP');
  }
});

module.exports = db;