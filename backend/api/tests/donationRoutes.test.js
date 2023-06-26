const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
const should = chai.should();

chai.use(chaiHttp);

describe("Donations", () => {
  describe("/POST donation", () => {
    it("it should POST a donation", (done) => {
      const donation = {
        name: "Test",
        quantity: 10.31
      };
      chai
        .request(server)
        .post("/api/addDonation")
        .auth(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
        .send(donation)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    }).timeout(10000);
  });

  describe("/GET donation", () => {
    it("it should GET a donation by name", (done) => {
      const name = 'Test';
      chai
        .request(server)
        .get("/api/getDonation")
        .auth(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
        .query({name})
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe("/GET donation count", () => {
    it("it should GET the amount of donations", (done) => {
      chai
        .request(server)
        .get("/api/getDonationCount")
        .auth(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  describe("/GET all donations", () => {
    it("it should GET all donations", (done) => {
      chai
        .request(server)
        .get("/api/getAllDonations")
        .auth(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("array");
          done();
        });
    });
  });

});
