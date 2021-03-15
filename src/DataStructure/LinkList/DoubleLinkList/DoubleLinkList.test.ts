import { DoubleLinkList } from "./DoubleLinkList";

describe("SingleLinkList", () => {
  let list: DoubleLinkList<number | string>;

  beforeEach(() => {
    list = new DoubleLinkList<number | string>();
    list.add("a");
    list.add("b");
    list.add("c");
  });

  it("add should correctly", function () {
    expect(list).toMatchSnapshot();
    expect(list.length).toBe(3);
  });

  it("头插入 应该正确", function () {
    list.inset("0a", 0);
    expect(list).toMatchSnapshot();
  });
});
