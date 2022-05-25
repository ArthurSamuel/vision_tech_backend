import request from "supertest";

const app = require("../../app");

describe("ControllerPublic", () => {
  describe("ExposedWelcome Function", () => {
    test("GET /public", async () => {
      await request(app).get("/api/public").expect(200);
    });
    test("POST /public", async () => {
      await request(app).post("/api/public").expect(200);
    });
    test("PUT /public", async () => {
      await request(app).put("/api/public").expect(200);
    });
    test("DELETE /public", async () => {
      await request(app).delete("/api/public").expect(200);
    });
  });
});
