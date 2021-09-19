const express = require("express");
const router = express.Router();

const {registerApplication, AllApplications,AdminApplications} = require("./../controllers/application");

router.route("/allApplications/:userId").get(AllApplications);

router.route("/adminApplications").get(AdminApplications);

router.route("/registerApplication").post(registerApplication);
module.exports = router;