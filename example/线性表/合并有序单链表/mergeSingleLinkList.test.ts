import { mergeSingleLinkList } from "./mergeSingleLinkList";
import { SingleLinkList } from "src/DataStructure/LinkList/SingleLinkList/SingleLinkList";

describe("合并有序顺序表", () => {
  it("合并成功应该返回l1", () => {
    const l1 = SingleLinkList.create([1, 3, 5]);
    const l2 = SingleLinkList.create([2, 4, 6]);

    expect(mergeSingleLinkList(l1, l2)).toMatchSnapshot();
  });

  it("合并成功应该返回l2", () => {
    const l1 = SingleLinkList.create([2, 4, 6]);
    const l2 = SingleLinkList.create([1, 3, 5]);

    expect(mergeSingleLinkList(l1, l2)).toMatchSnapshot();
  });

  it("其中有一个为空", () => {
    const l1 = SingleLinkList.create([]);
    const l2 = SingleLinkList.create([1, 3, 5]);

    expect(mergeSingleLinkList(l1, l2)).toMatchSnapshot();
  });
});
