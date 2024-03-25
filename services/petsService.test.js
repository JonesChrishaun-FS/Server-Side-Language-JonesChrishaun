const { petsService, petsServiceById } = require("./petsService");

describe("Pets Service ", () => {
  test("As a user I should return 200 pets", async () => {
    const result = await petsService();
    expect(result.data).toHaveLength(200);
  });
});
