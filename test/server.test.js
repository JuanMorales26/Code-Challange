const app = require('../lib/server');
const request = require("supertest");

describe("Unit test for server", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect((res) => {
          expect(res.body.message).toBe('Code Challange welcome!')
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test("GET /v1/visualpartners", (done) => {
    request(app)
      .get("/v1/visualpartners")
      .expect(200)
      .expect((res) => {
          expect(res.body[0].id).toBe('6264d5d89f1df827eb84bb23');
          expect(res.body[0].name).toBe('Warren');
          expect(res.body[0].email).toBe('Todd@visualpartnership.xyz');
          expect(res.body[0].credits).toBe(508);
          expect(res.body[0].enrollments[0]).toBe('Visual Thinking Intermedio');
          expect(res.body[0].enrollments[1]).toBe('Visual Thinking Avanzado');
          expect(res.body[0].previousCourses).toBe(1);
          expect(res.body[0].haveCertification).toBe(true);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test("GET /v1/visualpartners/certificate/email", (done) => {
    request(app)
      .get("/v1/visualpartners/certificate/email")
      .expect(200)
      .expect((res) => {
          expect(res.body[0]).toBe('Todd@visualpartnership.xyz');
          expect(res.body[1]).toBe('Sexton@visualpartnership.xyz');
          expect(res.body[2]).toBe('Sharlene@visualpartnership.xyz');
          expect(res.body[3]).toBe('Howell@visualpartnership.xyz');
          expect(res.body[4]).toBe('Haynes@visualpartnership.xyz');
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

    test("GET /v1/visualpartners/amount/:credits", (done) => {
        request(app)
          .get("/v1/visualpartners/amount/500")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect((res) => {
            for(var i=0;i<res.body.lenght;i++){
              expect(res.body[i].credits).toBeGreaterThan(500);
            }
          })
          .end((err, res) => {
            if (err) return done(err);
            return done();
          })
      })
})