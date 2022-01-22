const router = require("../routes");
const Employee = require('../models/employee');

module.exports = {
    new: newEmployee,
    create,
    index
};

function index(req, res) {
    Employee.find({}, function(err, employees) {
        res.render('employees/index', { employees });
    });
}

function create(req, res) {
    //convert FTE checkbox of undefined to a boolean
    req.body.fullTimeEmployee = !!req.body.fullTimeEmployee;
    //remove leading and trailing spaces
    req.body.approvedSoftware = req.body.arrovedSoftware.trim();
    if (req.body.approvedSoftware) req.body.approvedSoftware = req.body.approvedSoftware.split(/\s*,\s*/);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const employee = new Employee(req.body);
    employee.save(function(err) {
        if (err) return res.render('employees/new');
        console.log(employee);
        res.redirect('/employees');
    });
}

function newEmployee(req, res) {
    res.render('employees/new');
}