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

  get(targetIndex: number) {
    if (targetIndex < 0 || targetIndex > this.len) {
      return;
    }
    let i = 0;
    let node = this.head!;
    do {
      if (i === targetIndex) {
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

  has(item: T) {
    return this.indexOf(item) !== -1;
  }

  inset(item: T, targetIndex = 0) {
    const pendingNode = new Node(item);
    let currentNode = this.head;
    if (targetIndex === 0) {
      pendingNode.next = currentNode;
      this.head = pendingNode;
      this.len++;
      return true;
    }

    let i = 1;
    while (currentNode) {
      if (i === targetIndex) {
        const preNext = currentNode.next;
        currentNode.next = pendingNode;
        pendingNode.next = preNext;
        this.len++;
        return true;
      }
      i++;
      currentNode = currentNode.next;
    }
    return false;
  }
}

class Node<T> {
  next: null | Node<T> = null;

  constructor(public data: T) {}
}
