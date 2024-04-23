const caesarCipher = (input, shift) =>
  input
    .split("")
    .map((letter) => String.fromCharCode(letter.charCodeAt(0) + shift))
    .join("");

module.exports = caesarCipher;
