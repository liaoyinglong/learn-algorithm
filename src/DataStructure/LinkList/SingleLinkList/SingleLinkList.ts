/**
 * 单列表
 */
export class SingleLinkList<T> {
  private len = 0;
  private head: Node<T> | null = null;

  get length() {
    return this.len;
  }

  add(item: T) {
    return this.inset(item, this.len);
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

  /**
   * @param item 待插入的元素
   * @param targetIndex 插入后的index
   * @description 需要对target-1位置上的元素进行操作
   */
  inset(item: T, targetIndex: number) {
    const pendingNode = new Node(item);
    if (targetIndex === 0) {
      pendingNode.next = this.head;
      this.head = pendingNode;
      this.len++;
      return true;
    }

    const t = this.get(targetIndex - 1);
    if (t) {
      pendingNode.next = t.next;
      t.next = pendingNode;
      this.len++;
      return true;
    }
    return false;
  }
  /**
   * @param targetIndex pending to remove index
   * @description 需要对target-1位置上的元素进行操作
   */
  remove(targetIndex: number) {
    if (targetIndex === 0) {
      this.head = this.head?.next ?? null;
      this.len--;
      return true;
    }

    const t = this.get(targetIndex - 1);
    if (t) {
      t.next = t.next?.next ?? null;
      this.len--;
      return true;
    }
    return false;
  }
}

class Node<T> {
  next: null | Node<T> = null;

  constructor(public data: T) {}
}
