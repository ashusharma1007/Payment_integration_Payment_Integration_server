const express = require("express");
const router = express.Router();

const {registerClient, allClients} =  require("./../controllers/ClientId");
router.route("/registerClient").post(registerClient);
router.route("/allClients").get(allClients);
module.exports = router;