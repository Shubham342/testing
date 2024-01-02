const isPalindrome = require("./isPalindrome");

test("Tacocat returns true", () => {
  expect(isPalindrome("Tacocat")).toBe(true);
});

test("Shubham returns false", () => {
  expect(isPalindrome("Shubham")).toBe(false);
});
