const express = require('express');
const router = express.Router();
const softwareCtrl = require('../controllers/softwares');

// This router is mounted to a "starts with" path of '/'

// GET /software/new
router.get('/softwares/new', softwareCtrl.new);
// POST /software
router.post('/softwares', softwareCtrl.create);
// POST /employees/:employeeId/software
router.post('/employees/:employeeId/softwares', softwareCtrl.addToApprovedSoftware);

module.exports = router;