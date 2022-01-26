const express = require('express');
const router = express.Router();
const softwaresCtrl = require('../controllers/softwares');

// This router is mounted to a "starts with" path of '/softwares'

// GET /new
router.get('/new', softwaresCtrl.index);
// POST /softwares
router.post('/', softwaresCtrl.create);
// POST /employees/:employeeId/softwares
router.post('/employees/:employeeId/softwares', softwaresCtrl.addToApprovedSoftware);

module.exports = router;