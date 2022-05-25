import request from "supertest";

const app = require("../../app");

describe("ControllerPrivate", () => {
  describe("Welcome Function", () => {
    test("GET /api/private no token provied", async () => {
      await request(app).get("/api/private").expect(403);
    });
    test("GET /api/private invalid or expired token", async () => {
      const INVALID_TEST_TOKEN =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFydGgiLCJpYXQiOjE2NTM0MDM2NDksImV4cCI6MTY1MzQwMzcwOX0.BP0AKbhrwDNr2UtQGPOxgvjV2cdXi02F2dUC1Xj8jLQ";
      await request(app)
        .get("/api/private")
        .set("Authorization", INVALID_TEST_TOKEN)
        .expect(403);
    });
    test("GET /api/private success", async () => {
      const username = "testUsername";
      const password = "testUsername";
      let token: string | null = null;
      await request(app)
        .post("/api/login")
        .send({
          username,
          password,
        })
        .expect(200)
        .expect((res) => {
          if (res.body) {
            token = res.body.token;
          }
        });
      expect(token).toBeDefined();
      if (token) {
        await request(app)
          .get("/api/private")
          .set("Authorization", `Bearer ${token}`)
          .expect(200);
      }
    });
  });
});
