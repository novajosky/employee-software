const express = require('express');
const router = express.Router();
const softwaresCtrl = require('../controllers/softwares');
var isLoggedIn = require('../config/auth');

// This router is mounted to a "starts with" path of '/softwares'

// GET /new
router.get('/new', isLoggedIn, softwaresCtrl.index);
// POST /softwares
router.post('/', isLoggedIn, softwaresCtrl.create);
// POST /employees/:employeeId/softwares
router.post('/employees/:employeeId/softwares', softwaresCtrl.addToApprovedSoftware);
//DELETE /softwares/:id
router.delete("/:id", isLoggedIn, softwaresCtrl.delete);

module.exports = router;