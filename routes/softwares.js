const express = require('express');
const router = express.Router();
const softwaresCtrl = require('../controllers/softwares');

// This router is mounted to a "starts with" path of '/'

// GET /softwares/new
router.get('/softwares/new', softwaresCtrl.new);
// POST /softwares
router.post('/softwares', softwaresCtrl.create);
// POST /employees/:employeeId/softwares
router.post('/employees/:employeeId/softwares', softwaresCtrl.addToApprovedSoftware);

module.exports = router;