var express = require('express');
const router = express.Router();
const inquiriesCtrl = require('../controllers/inquiries');
var isLoggedIn = require('../config/auth');

// This router is mounted to a "starts with" path of '/'

//GET /inquiries (display all inquiries)
router.get('/inquiries/index', inquiriesCtrl.index)
// GET /inquiries
router.get('/index',  inquiriesCtrl.new);
// POST /inquiries
router.post('/inquiries', inquiriesCtrl.create);


module.exports = router;