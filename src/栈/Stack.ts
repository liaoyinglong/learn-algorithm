export class Stack<T> {
  private items = [] as T[];
  // 入栈
  push(item: T) {
    this.items.push(item);
  }
  // 出栈
  pop(): T | undefined {
    return this.items.pop();
  }
  // 读栈顶 即最后一个
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // 判空
  isEmpty(): boolean {
    return !this.items.length;
  }
  // 读栈长度
  size(): number {
    return this.items.length;
  }

  // 清空栈
  clear(): void {
    this.items = [];
  }

  static from<T>(arr: T[]) {
    const t = new Stack<T>();
    arr.forEach((item) => t.push(item));
    return t;
  }
}
