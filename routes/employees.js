var express = require('express');
var router = express.Router();
var employeesCtrl = require('../controllers/employees');

// All routes start with '/employees'

//GET /employees
router.get('/', employeesCtrl.index);
// GET /employees/new
router.get('/new', employeesCtrl.new);
//POST /employees
router.post('/', employeesCtrl.create);
//GET /employees/:id employee details
router.get('/:id', employeesCtrl.show);
//POST/employees/:id/ add software
router.post('/:id', employeesCtrl.create);
//DELETE /employees/:id
router.delete("/:id", employeesCtrl.delete);
//POST/employees/:id/ add software to employees
router.post('/:id/softwares', employeesCtrl.addToApprovedSoftware);

module.exports = router;
