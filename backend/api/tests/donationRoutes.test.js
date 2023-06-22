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
          res.body.should.be.a("object");
          done();
        });
    }).timeout(10000);
  });

  describe("/GET donation", () => {
    it("it should GET a donation", (done) => {
      const n = 1;
      chai
        .request(server)
        .get("/api/donation")
        .query({n})
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
