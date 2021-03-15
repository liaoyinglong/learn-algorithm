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

  get(targetIndex: number) {
    targetIndex = Math.max(targetIndex, 0);
    targetIndex = Math.min(targetIndex, this.len - 1);
    let t = this.head;
    let i = 0;
    while (t) {
      if (i === targetIndex) {
        break;
      }
      i++;
      t = t.next;
    }
    return t!;
  }

  inset(item: T, targetIndex: number) {
    targetIndex = Math.max(targetIndex, 0);
    targetIndex = Math.min(targetIndex, this.len);

    const pendingNode = new Node(item);
    if (!this.head) {
      this.head = pendingNode;
    } else if (!this.last) {
      this.last = pendingNode;
      this.head.next = this.last;
      this.last.prev = this.head;
    } else if (targetIndex === 0) {
      // 头插入
      pendingNode.next = this.head;
      this.head.prev = pendingNode;
      this.head = pendingNode;
    } else if (targetIndex === this.len) {
      // 尾插入
      this.last.next = pendingNode;
      pendingNode.prev = this.last;
      this.last = this.last.next;
    } else {
      const t = this.get(targetIndex - 1);
      pendingNode.next = t.next;
      t.next!.prev = pendingNode;
      pendingNode.prev = t;
      t.next = pendingNode;
    }
    this.len++;
  }
}

class Node<T> {
  next?: Node<T>;
  prev?: Node<T>;
  constructor(public data: T) {}
}
