const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donationController");

router.post("/post", donationController.addDonation);
router.get("/donation", donationController.getDonation);

module.exports = router;
