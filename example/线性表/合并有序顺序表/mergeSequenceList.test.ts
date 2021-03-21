import { SequenceList } from "src/DataStructure/SequenceList/SequenceList";
import { mergeSequenceList } from "./mergeSequenceList";

describe("合并有序顺序表", () => {
  it("l1 比 l2 长", () => {
    const l1 = new SequenceList([4, 9, 15, 24, 30]);
    const l2 = new SequenceList([2, 6, 18, 20]);

    expect(mergeSequenceList(l1, l2).getList()).toEqual([
      2,
      4,
      6,
      9,
      15,
      18,
      20,
      24,
      30,
    ]);
  });

  it("l1 比 l2 短", () => {
    const l1 = new SequenceList([2, 6, 18, 20]);
    const l2 = new SequenceList([4, 9, 15, 24, 30]);

    expect(mergeSequenceList(l1, l2).getList()).toEqual([
      2,
      4,
      6,
      9,
      15,
      18,
      20,
      24,
      30,
    ]);
  });
});
