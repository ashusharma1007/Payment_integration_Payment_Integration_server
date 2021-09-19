//A private route that will be only
const express = require('express');
const router =  express.Router();
const {getPrivateData} = require('../controllers/private')
const { protect } = require('../middleware/auth')



router.route("/profile/:username").get(protect, getPrivateData);
module.exports = router;