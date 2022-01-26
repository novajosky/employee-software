var express = require('express');
var router = express.Router();
var employeesCtrl = require('../controllers/employees');
var isLoggedIn = require('../config/auth');

// All routes start with '/employees'

//GET /employees
router.get('/', employeesCtrl.index);
// GET /employees/new
router.get('/new', isLoggedIn, employeesCtrl.new);
//POST /employees
router.post('/', isLoggedIn, employeesCtrl.create);
//GET /employees/:id employee details
router.get('/:id', employeesCtrl.show);
//POST/employees/:id/ add software
router.post('/:id', isLoggedIn, employeesCtrl.create);
//DELETE /employees/:id
router.delete("/:id", isLoggedIn, employeesCtrl.delete);
//POST/employees/:id/ add software to employees
router.post('/:id/softwares', isLoggedIn, employeesCtrl.addToApprovedSoftware);

module.exports = router;
