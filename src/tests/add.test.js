const add = (a, b) => a + b;
const generateGreeting = (name = "anonymous") => `Hello ${name}!`;

test("shouls add 2 no.", () => {
  const res = add(2, 4);
  expect(res).toBe(6);
});

test("should generate greeting", () => {
  const res = generateGreeting("mohan");
  expect(res).toBe("Hello mohan!");
});
test("should generate greeting for no name", () => {
  const res = generateGreeting();
  expect(res).toBe("Hello anonymous!");
});
