const express = require('express');
const router = express.Router();
const viewempCtrl = require('../controllers/viewemp');

// This router is mounted to a "starts with" path of '/softwares'

// GET /softwares
router.get('/show', viewempCtrl.new);
// POST /software
router.post('/create', viewempCtrl.create);
// GET route that shows the current users softwares
//router.get('/user/:employeeId', viewempCtrl.index)

//router.post('/employees/:employeeId/viewemp', viewempCtrl.addToApprovedSoftware);

module.exports = router;