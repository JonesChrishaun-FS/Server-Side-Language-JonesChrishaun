const { add, subtract, multiply, divide, square, max } = require("./sum");

test("adds 4 + 6 to equal 10", () => {
  expect(add(4, 6)).toBe(10);
});

test("subtracts 20 - 15 to equal 5", () => {
  expect(subtract(20, 15)).toBe(5);
});

test("multiplies 20 * 5 to equal 100", () => {
  expect(multiply(20, 5)).toBe(100);
});

test("divide 200 / 4 to equal 50", () => {
  expect(divide(200, 4)).toBe(50);
});

test("square root 625 to equal 25", () => {
  expect(square(625)).toBe(25);
});

test("max -60 and -45 to equal -45", () => {
  expect(max(-60, -45)).toBe(-45);
});
