import { add } from "./abcd.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(add({ x: 1, y: 2 })).toBe(3);
});
