import caesarCipher from "./caesarCipher";

test("Caesar Cipher of a normal string", () => {
  expect(caesarCipher("abcde", 1)).toBe("bcdef");
});
