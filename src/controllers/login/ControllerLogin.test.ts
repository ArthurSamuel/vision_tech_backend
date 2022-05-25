import request from "supertest";

const app = require("../../app");

describe("ContollerLogin", () => {
  describe("Login Function", () => {
    test("POST /login username or password not provied", async () => {
      await request(app).post("/api/login").expect(400);
    });
    test("POST /login wrong credential", async () => {
      const username = "username";
      const password = "password";
      await request(app)
        .post("/api/login")
        .send({
          username,
          password,
        })
        .expect(401);
    });
    test('POST /login correct credential', async () => {
      const username = "testUsername";
      const password = "testUsername";
      await request(app)
        .post("/api/login")
        .send({
          username,
          password,
        })
        .expect(200)
    })
  });
});
