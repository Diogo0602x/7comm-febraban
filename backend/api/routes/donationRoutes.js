const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController");

router.post("/", donationController.addDonation);

module.exports = router;
