// Import the mysql2 module
const mysql = require('mysql2');
const consumer = require('./consume')

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123690',
  database: 'cavalo',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  
  // Perform database operations here
  
  // Close the connection when done
});
