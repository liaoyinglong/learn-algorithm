import { Stack } from "src/栈/Stack";
/**
 【题目】一个整数数组 A，找到每个元素：右边第一个比我小的下标位置，没有则用 -1 表示。

 输入：[5, 2]

 输出：[1, -1]
 */
function findRightSmall(arr: number[]): number[] {
  const res: number[] = [];

  // 栈中的元素记录的是下标
  const stack = new Stack<number>();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // 每个元素都向左遍历栈中的元素完成消除动作
    while (!stack.isEmpty() && arr[stack.peek()!] > item) {
      res[stack.peek()!] = i;
      stack.pop();
    }

    stack.push(i);
  }
  // 栈中剩下的元素，由于没有人能消除他们，因此，只能将结果设置为-1。
  while (!stack.isEmpty()) {
    res[stack.peek()!] = -1;
    stack.pop();
  }

  return res;
}

describe("找出数组中右边比我小的元素", () => {
  it("impl", () => {
    expect(findRightSmall([5, 2])).toEqual([1, -1]);
    expect(findRightSmall([1, 2, 4, 9, 4, 0, 5])).toEqual([
      5,
      5,
      5,
      4,
      5,
      -1,
      -1,
    ]);
  });
});
