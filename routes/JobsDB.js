const express = require("express");
const router = express.Router();

const {CityMumbaiJobs,CityDelhiJobs,AllFemaleJobs,AllDrivingJobs,AllDeliveryJobs,registerJob,JobDetails} =  require("./../controllers/JobsDB");

router.route("/allfemaleJobs").get(AllFemaleJobs);
router.route("/MumbaiJobs").get(CityMumbaiJobs);
router.route("/DelhiJobs").get(CityDelhiJobs);
router.route("/AllDrivingJobs").get(AllDrivingJobs);
router.route("/AllDeliveryJobs").get(AllDeliveryJobs);
router.route("/jobDetails/:JobID").get(JobDetails);
router.route("/registerJob").post(registerJob);
module.exports = router;