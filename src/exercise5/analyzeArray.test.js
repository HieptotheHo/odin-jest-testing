import analyzeArray from "./analyzeArray";

test("Analyze an array of number", () => {
  const result = {
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  };
  const test = analyzeArray([1, 2, 3]);
  expect(test).toEqual(result);
});
