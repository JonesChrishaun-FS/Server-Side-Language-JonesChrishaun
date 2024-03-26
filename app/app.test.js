const request = require("supertest");
const app = require("./index");

describe("Pets test query range", () => {
  it("Get /api/pets", async () => {
    const response = await request(app)
      .get("/pets")
      .query({ skip: 1, limit: 2 });

    expect(response.body).toEqual([]);
  });
});
