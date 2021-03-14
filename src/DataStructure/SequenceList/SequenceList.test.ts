import { SequenceList } from "./SequenceList";

describe("测试顺序表", () => {
  let sequenceList: SequenceList<number>;

  beforeEach(() => {
    sequenceList = new SequenceList([1, 2, 3]);
  });

  function expectListLen(len: number) {
    expect(sequenceList.getList().length).toBe(len);
  }
  function expectList(list: number[]) {
    expect(sequenceList.getList()).toStrictEqual(list);
  }

  it("有初始值的时候 nextIndex应该正确", () => {
    expectListLen(3);
    expectList([1, 2, 3]);
  });

  it("push", () => {
    sequenceList.push(1);
    expectListLen(4);
    expectList([1, 2, 3, 1]);

    sequenceList.push(2);
    expectListLen(5);
    expectList([1, 2, 3, 1, 2]);

    sequenceList.push(3);
    expectListLen(6);
    expectList([1, 2, 3, 1, 2, 3]);
  });

  it("get", () => {
    expect(sequenceList.get(1)).toBe(2);
    expect(sequenceList.get(2)).toBe(3);
  });

  it("indexOf", () => {
    expect(sequenceList.indexOf(2)).toBe(1);
    expect(sequenceList.indexOf(3)).toBe(2);
  });

  it("inset", () => {
    sequenceList.inset(4, 1);
    expectList([1, 4, 2, 3]);
    sequenceList.inset(6, 2);
    expectList([1, 4, 6, 2, 3]);
  });

  it("remove", () => {
    sequenceList.remove(1);
    expectList([1, 3]);
    sequenceList.remove(0);
    expectList([3]);
  });
});
