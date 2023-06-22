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
        quantity: 10
      };
      chai
        .request(server)
        .post("/api/post")
        .send(donation)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    }).timeout(10000);
  });

  describe("/GET donation", () => {
    it("it should GET a donation", (done) => {
      const id = 1;
      chai
        .request(server)
        .get("/api/getdonation")
        .query({id})
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
        .get("/api/getdonationcount")
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });
/*
  describe("/GET all donations", () => {
    it("it should GET all donations", (done) => {
      chai
        .request(server)
        .get("/api/getalldonations")
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });
  });*/

});
