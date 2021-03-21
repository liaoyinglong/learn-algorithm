/**
 * 顺序表
 */
export class SequenceList<T = number> {
  private nextIndex: number;

  constructor(private list: T[] = []) {
    this.nextIndex = this.list.length;
  }

  getList() {
    return this.list;
  }

  push(item: T) {
    this.list[this.nextIndex] = item;
    this.nextIndex++;
  }

  get(i: number) {
    if (i < 0 || i > this.list.length) {
      return;
    }
    return this.list[i];
  }

  indexOf(item: T) {
    return this.list.indexOf(item);
  }

  inset(item: T, i = 0) {
    this.list.splice(i, 0, item);
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }
}
