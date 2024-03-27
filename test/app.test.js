const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

describe("Intergration tests for the pets API", () => {
  it("GET /api/pets - success", async () => {
    const response = await request(app).get("/api/pets");

    expect(response).toEqual([]);
  });
});
