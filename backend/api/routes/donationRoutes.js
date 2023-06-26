const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController");

router.post("/addDonation", donationController.addDonation);
router.get("/getDonation", donationController.getDonation);
router.get("/getDonationCount", donationController.getDonationCount);
router.get("/getAllDonations", donationController.getAllDonations);

module.exports = router;
