import calculator from "./calculator";

// test("Object calculator", () => {
//   //   const testCalculator = {
//   //     add(a, b) {
//   //       return a + b;
//   //     },
//   //     subtract(a, b) {
//   //       return a - b;
//   //     },
//   //     divide(a, b) {
//   //       return a / b;
//   //     },
//   //     multiply(a, b) {
//   //       return a * b;
//   //     },
//   //   };
//   expect(calculator).toEqual({
//     add(a, b) {
//       return a + b;
//     },
//     subtract(a, b) {
//       return a - b;
//     },
//     divide(a, b) {
//       return a / b;
//     },
//     multiply(a, b) {
//       return a * b;
//     },
//   });
// });

test("Test calulator add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Test calulator subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Test calulator multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("Test calulator divide", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});
