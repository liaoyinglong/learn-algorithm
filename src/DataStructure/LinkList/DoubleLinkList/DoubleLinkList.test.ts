import { DoubleLinkList } from "./DoubleLinkList";

describe("SingleLinkList", () => {
  let list: DoubleLinkList<number | string>;

  beforeEach(() => {
    list = new DoubleLinkList<number | string>();
    list.add("a");
    list.add("b");
    list.add("c");
  });

  function expectLen(len: number) {
    expect(list.length).toBe(len);
  }

  it("add should correctly", function () {
    expect(list).toMatchSnapshot();
    expectLen(3);
  });

  it("get should correctly", function () {
    expect(list.get(-1).data).toBe("a");
    expect(list.get(0).data).toBe("a");
    expect(list.get(1).data).toBe("b");
    expect(list.get(2).data).toBe("c");
    expect(list.get(22).data).toBe("c");
  });

  it("头插入 应该正确", function () {
    list.inset("0a", 0);
    expect(list).toMatchSnapshot();
    expectLen(4);
  });

  it("指定index插入", function () {
    list.inset("1a", 1);
    expect(list).toMatchSnapshot();
    expectLen(4);

    list.inset("0b", 2);
    expect(list).toMatchSnapshot();
    expectLen(5);
  });

  it("remove should correctly", function () {
    list.add("d");
    expectLen(4);

    list.remove(1); // remove b
    expect(list).toMatchSnapshot();
    expectLen(3);

    list.remove(2); // remove d
    expect(list).toMatchSnapshot();
    expectLen(2);

    list.remove(0); // remove a
    expect(list).toMatchSnapshot();
    expectLen(1);
  });
});
