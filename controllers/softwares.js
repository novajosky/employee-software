const Software = require('../models/software');
const Employee = require('../models/employee');
const employee = require('../models/employee');

module.exports = {
    new: newSoftware,
    create,
    addtoEmployee
};

function addtoEmployee(req, res) {
    Employee.findById(req.params.employeeId, function(err, movie) {
        employee.software.push(req.body.softwareId);
        employee.save(function(err) {
            res.redirect(`/employees/${employee._id}`);
        });
    });
}

function create(req, res) {
    const s = req.body.purchased;
    req.body.purchased = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    Software.create(req.body, function(err, software) {
        res.redirect('/softwares/new');
    });
}

function newSoftware(req, res) {
    Software.find({})
    .sort('name')
    .exec(function (err, software) {
        res.render('softwares/new', {
            employee: 'Add Software',
            software
        });
    });
}