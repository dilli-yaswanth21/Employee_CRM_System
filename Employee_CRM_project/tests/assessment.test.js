const {
  calculatePercentage,
  getGrade,
  getMessage
} = require("../js/utils");

// TESTS

test("Percentage calculation", () => {
  expect(calculatePercentage(8, 10)).toBe(80);
});

test("Grade calculation", () => {
  expect(getGrade(85)).toBe("A");
  expect(getGrade(65)).toBe("B");
  expect(getGrade(40)).toBe("C");
});

test("Message logic", () => {
  expect(getMessage(85)).toBe("Excellent");
  expect(getMessage(65)).toBe("Good");
  expect(getMessage(40)).toBe("Needs Improvement!");
});