import { SequenceList } from "src/DataStructure/SequenceList/SequenceList";

export function mergeSequenceList(l1: SequenceList, l2: SequenceList) {
  const res = new SequenceList();
  let i1 = 0;
  let i2 = 0;
  let len1 = l1.length;
  let len2 = l2.length;

  while (i1 < len1 && i2 < len2) {
    const item1 = l1.get(i1)!;
    const item2 = l2.get(i2)!;
    if (item1 > item2) {
      res.push(item2);
      i2++;
    } else {
      res.push(item1);
      i1++;
    }
  }

  for (; i1 < len1; i1++) {
    const item1 = l1.get(i1)!;
    res.push(item1);
  }
  for (; i2 < len2; i2++) {
    const item2 = l2.get(i2)!;
    res.push(item2);
  }

  return res;
}
