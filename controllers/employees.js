const router = require("../routes");
const Employee = require('../models/employee');
const Software = require('../models/software');

module.exports = {
    new: newEmployee,
    create,
    index,
    show,
    delete: deleteEmployee,
    addToApprovedSoftware,
};

function index(req, res) {
    Employee.find({}, function(err, employees) {
        res.render('employees/index', { employees });
    });
}

function show(req, res) {
    Employee.findById(req.params.id)
    .populate('approvedSoftware')
    .exec(function (err, employee) {
        Software.find(
            { _id: { $nin: employee.approvedSoftware } },
            function (err, softwares) {
                res.render('employees/show', { title: 'Employee Detail', employee, softwares });
            }
        )
    })
}

function deleteEmployee(req, res) {
    Employee.findOneAndDelete(
        { _id: req.params.id }, function (err) {
            res.redirect('/employees');
        }
    );
}

function create(req, res) {
    req.body.fullTimeEmployee = !!req.body.fullTimeEmployee;
    if (req.body.approvedSoftware) req.body.approvedSoftware = req.body.approvedSoftware.split(/\s*,\s*/);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const employee = new Employee(req.body);
    employee.save(function(err) {
        if (err) return res.render('employees/new');
        console.log(employee);
        res.redirect(`/employees/${employee._id}`);
    });
}

function addToApprovedSoftware(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
      employee.approvedSoftware.push(req.body.softwareId);
      employee.save(function(err) {
        res.redirect(`/employees/${employee._id}`);
      });
    });
  }

function newEmployee(req, res) {
    res.render('employees/new');
}