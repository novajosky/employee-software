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

module.exports = router;
