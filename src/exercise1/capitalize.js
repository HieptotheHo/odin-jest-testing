function capitalize(input) {
  if (isNaN(input)) {
    return input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return -1;
}

module.exports = capitalize;
