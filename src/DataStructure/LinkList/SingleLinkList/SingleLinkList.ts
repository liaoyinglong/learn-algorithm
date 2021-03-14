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
}

class Node<T> {
  next: null | Node<T>;

  constructor(public data: T) {
    this.next = null;
  }
}
