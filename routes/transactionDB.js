const express = require("express");
const router = express.Router();

const {transactionDetails,transactionProcess} =  require("../controllers/transactionDB");

router.route("/transactionDetails").get(transactionDetails);
router.route("/transactionProcesss").post(transactionProcess);
module.exports = router;