/**
 * 单列表
 */
export class SingleLinkList<T> {
  private len = 0;
  private head: Node<T> | null = null;

  add(item: T) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.len = 1;
      return;
    }

    let last = this.head;

    while (last.next) {
      last = last.next;
    }
    last.next = node;
    this.len++;
  }

  get(target: number) {
    if (target < 0 || target > this.len) {
      return;
    }
    let i = 0;
    let node = this.head!;
    do {
      if (i === target) {
        return node;
      }
      i++;
      node = node.next!;
    } while (node);
  }

  indexOf(item: T) {
    let node = this.head;
    let i = 0;

    while (node) {
      if (node.data === item) {
        return i;
      }
      node = node.next;
      i++;
    }
    return -1;
  }
}

class Node<T> {
  next: null | Node<T> = null;

  constructor(public data: T) {}
}
