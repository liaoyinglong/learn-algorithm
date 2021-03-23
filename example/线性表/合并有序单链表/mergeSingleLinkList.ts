import { SingleLinkList } from "src/DataStructure/LinkList/SingleLinkList/SingleLinkList";

export function mergeSingleLinkList(
  l1: SingleLinkList<number>,
  l2: SingleLinkList<number>
) {
  let item1 = l1.get(0)!;
  let item2 = l2.get(0)!;

  type N = typeof item1 | null;

  function _merge(n1: N, n2: N) {
    if (!n1) {
      return n2;
    }
    if (!n2) {
      return n1;
    }

    if (n1.data > n2.data) {
      n2.next = _merge(n1, n2.next);
      return n2;
    }
    n1.next = _merge(n1.next, n2);
    return n1;
  }
  const res = _merge(item1, item2);

  if (res === item1) {
    return l1;
  }
  return l2;
}
