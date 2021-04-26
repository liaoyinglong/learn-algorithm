import { Stack } from "src/栈/Stack";
/*
 * 题目：给定一个数组，要找到这个数组里面每个元素右边比我大的元素的位置
 * - 注意：是右边第一个比我大的，如果有多个的话
 * - 如果没有，那么用-1表示。
 * 返回：一个数组，表示右边比我大的数的下标位置
 *
 * 输入：[5, 6]
 * 输出：[1, -1]
 * 解释：A[0] = 5，右边比我大的是A[1] = 6, 所以记录为 = 1
 *       A[1] = 6, 右边比我大的元素没有，所以记录为   = -1
 *       所以返回值是[1, -1]
 */

function solution(arr: number[]): number[] {
  const res: number[] = [];
  // 存下标
  const stack = new Stack<number>();

  arr.forEach((value, index) => {
    while (!stack.isEmpty() && arr[stack.peek()!] < value) {
      res[stack.peek()!] = index;
      stack.pop();
    }

    stack.push(index);
  });

  while (!stack.isEmpty()) {
    const i = stack.pop();
    res[i!] = -1;
  }

  return res;
}

describe("右边第一个比我大", () => {
  it("impl", () => {
    expect(solution([5, 6])).toEqual([1, -1]);
  });
});
