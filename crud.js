// Load the "secrets" in the .env file
require('dotenv').config();
// Connect to the MongoDB database
require('./config/database');

const Employee = require('./models/employee');
const Software = require('./models/software');

let employees, softwares, employee, software;

Employee.find({}, function(err, EmployeeDocs) {
  Employees = employeeDocs;
});
