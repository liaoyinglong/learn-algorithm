import { Stack } from "src/栈/Stack";
/**
 * 【题目扩展】给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。有效字符串需满足：
 * 输入："()"
 * 输出：true
 */
function isValid(str: string) {
  // 当字符串本来就是空的时候，我们可以快速返回true
  if (str.length === 0) {
    return true;
  }
  // 当字符串长度为奇数的时候，不可能是一个有效的合法字符串
  if (!!(str.length % 2)) {
    return false;
  }

  const stack = new Stack<string>();

  const m = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const left = Object.values(m);

  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (left.includes(item)) {
      stack.push(item);
      continue;
    }
    // @ts-ignore
    if (m[item] !== stack.peek()) {
      return false;
    }
    stack.pop();
  }

  return stack.isEmpty();
}

describe("判断字符串括号是否合法2", () => {
  it("impl", () => {
    expect(isValid("")).toBe(true);
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("([{}]{})")).toBe(true);
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
  });
});
