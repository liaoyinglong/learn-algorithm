import { Stack } from "src/栈/Stack";
/**
 * 【题目】字符串中只有字符'('和')'。合法字符串需要括号可以配对。比如：
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

  const stack = new Stack<boolean>();
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item === "(") {
      stack.push(true);
    } else if (!stack.pop()) {
      return false;
    }
  }

  return stack.isEmpty();
}

describe("判断字符串括号是否合法", () => {
  it("impl", () => {
    expect(isValid("")).toBe(true);
    expect(isValid("()")).toBe(true);
    expect(isValid("(()())")).toBe(true);
    expect(isValid("()()(())")).toBe(true);
    expect(isValid("())")).toBe(false);
  });
});
