const employee = require("../models/employee");
const router = require("../routes");
const Employee = require('../models/employee');

module.exports = {
    new: newEmployee,
    create
};
function create(req, res) {
    //convert FTE checkbox of undefined to a boolean
    req.body.fullTimeEmployee = !!req.body.fullTimeEmployee;
    //remove leading and trailing spaces
    req.body.requiredSoftware = req.body.requiredSoftware.trim();
    if (req.body.requiredSoftware) req.body.requiredSoftware = req.body.requiredSoftware.split(/\s*,\s*/);
    const employee = new Employee(req.body);
    employee.save(function(err) {
        if (err) return res.render('employees/new');
        console.log(employee);
        res.redirect('/employees/new');
    });
}

function newEmployee(req, res) {
    res.render('employees/new');
}