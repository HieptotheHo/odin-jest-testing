import capitalize from "./capitalize";

test("Capitalize a normal string", () => {
  expect(capitalize("hello, world!")).toBe("Hello, World!");
});

test("Receive a string of number", () => {
  expect(capitalize(9319019)).toBe(-1);
});
