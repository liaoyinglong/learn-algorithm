import { Stack } from "src/栈/Stack";

describe("Stack", () => {
  let t: Stack<string>;

  beforeEach(() => {
    t = Stack.from(["a", "b", "c"]);
  });

  it("pop method", () => {
    t.pop();
    expect(t).toMatchSnapshot();
    expect(t.size()).toBe(2);
    expect(t.isEmpty()).toBe(false);
  });

  it("peek method", () => {
    expect(t.peek()).toBe("c");
  });

  it("clear method", () => {
    t.clear();
    expect(t).toMatchSnapshot();
    expect(t.size()).toBe(0);
    expect(t.isEmpty()).toBe(true);
  });
});
