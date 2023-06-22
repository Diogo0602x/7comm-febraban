const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController");

router.post("/post", donationController.addDonation);
router.get("/getdonation", donationController.getDonation);
router.get("/getdonationcount", donationController.getDonationCount);
router.get("/getalldonations", donationController.getAllDonations);

module.exports = router;
