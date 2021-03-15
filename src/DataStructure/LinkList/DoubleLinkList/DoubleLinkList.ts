/**
 * 双向链表
 */
export class DoubleLinkList<T> {
  private head?: Node<T>;
  private last?: Node<T>;
  private len = 0;

  get length() {
    return this.len;
  }

  add(item: T) {
    this.inset(item, this.len);
  }

  inset(item: T, targetIndex: number) {
    const pendingNode = new Node(item);
    if (!this.head) {
      this.head = pendingNode;
    } else if (!this.last) {
      this.last = pendingNode;
      this.head.next = this.last;
      this.last.prev = this.head;
    } else if (targetIndex === this.len) {
      this.last.next = pendingNode;
      pendingNode.prev = this.last;
      this.last = this.last.next;
    }
    this.len++;
  }
}

class Node<T> {
  next?: Node<T>;
  prev?: Node<T>;
  constructor(public data: T) {}
}
