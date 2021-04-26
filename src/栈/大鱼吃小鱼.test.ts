import { Stack } from "src/栈/Stack";
/**
 【题目】在水中有许多鱼，可以认为这些鱼停放在 x 轴上。再给定两个数组 Size，Dir，Size[i] 表示第 i 条鱼的大小，Dir[i] 表示鱼的方向 （0 表示向左游，1 表示向右游）。这两个数组分别表示鱼的大小和游动的方向，并且两个数组的长度相等。鱼的行为符合以下几个条件:

 所有的鱼都同时开始游动，每次按照鱼的方向，都游动一个单位距离；

 当方向相对时，大鱼会吃掉小鱼；

 鱼的大小都不一样。

 输入：Size = [4, 2, 5, 3, 1], Dir = [1, 1, 0, 0, 0]

 输出：3

 请完成以下接口来计算还剩下几条鱼？
 */
function solution(size: number[], dir: number[]): number {
  const len = size.length;
  if (len < 1) {
    return len;
  }

  // 存的是索引
  const stack = new Stack<number>();

  for (let i = 0; i < len; i++) {
    const currentDirection = dir[i];
    const currentFish = size[i];

    let hasEat = false;

    // 如果栈中还有鱼，并且栈中鱼向右，当前的鱼向左游，那么就会有相遇的可能性
    while (
      !stack.isEmpty() &&
      dir[stack.peek()!] === Direction.right &&
      currentDirection === Direction.left
    ) {
      // 如果栈顶的鱼比较大，那么把新来的吃掉
      if (size[stack.peek()!] > currentFish) {
        hasEat = true;
        break;
      }
      // 如果栈中的鱼较小，那么会把栈中的鱼吃掉，栈中的鱼被消除，所以需要弹栈。
      stack.pop();
    }

    // 如果新来的鱼，没有被吃掉，那么压入栈中。
    if (!hasEat) {
      stack.push(i);
    }
  }
  return stack.size();
}

enum Direction {
  left = 0,
  right = 1,
}

describe("大鱼吃小鱼", () => {
  it("impl", () => {
    expect(solution([4, 2, 5, 3, 1], [1, 1, 0, 0, 0])).toBe(3);
    expect(solution([4, 2, 5, 3], [1, 1, 0, 0])).toBe(2);
  });
});
