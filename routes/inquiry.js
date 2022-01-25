var express = require('express');
const router = express.Router();
const inquiriesCtrl = require('../controllers/inquiries');
var isLoggedIn = require('../config/auth');

// This router is mounted to a "starts with" path of '/'

//GET /inquiries (display all inquiries)
router.get('/index', inquiriesCtrl.index)
// POST /inquiries
router.post('/', isLoggedIn, inquiriesCtrl.create);


module.exports = router;