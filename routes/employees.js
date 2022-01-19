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

module.exports = router;
