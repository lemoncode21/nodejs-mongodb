const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");

chai.use(chaiHttp);
chai.should();


describe("/POST user", () => {
  it("it should CREATE user", (done) => {
    let user = {
      username: "test",
      password: "test",
      email: "test"
    };

    chai
      .request(app)
      .post("/api/user/")
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/PATCH/:id user", () => {
  it("it should UPDATE user by id", (done) => {
    const id = "62f52e9893da198c1563f1bc";
    let user = {
      _id: id,
      username: "test",
      password: "test",
      email: "test"
    };

    chai
      .request(app)
      .patch("/api/user/" + id)
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/GET user", () => {
  it("it should GET all the users", (done) => {
    chai
      .request(app)
      .get("/api/user/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("it should GET user by id", (done) => {
    const id = "62f52e9893da198c1563f1bc";
    chai
      .request(app)
      .get(`/api/user/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});

describe("/DELETE/:id user", () => {
  it("it should DELETE user by id", (done) => {
    const id = 9;
    chai
      .request(app)
      .delete("/api/user/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
