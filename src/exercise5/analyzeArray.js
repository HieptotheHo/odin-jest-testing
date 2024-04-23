const analyzeArray = (array) => ({
  average: array.reduce((sum, num) => num + sum, 0) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

module.exports = analyzeArray;
