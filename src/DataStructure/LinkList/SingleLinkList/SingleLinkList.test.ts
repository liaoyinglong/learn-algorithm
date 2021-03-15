import { SingleLinkList } from "./SingleLinkList";

describe("SingleLinkList", () => {
  let list: SingleLinkList<number | string>;

  beforeEach(() => {
    list = new SingleLinkList<number | string>();
    list.add("a");
    list.add("b");
    list.add("c");
  });

  function expectLen(len: number) {
    expect(list.length).toBe(len);
  }

  it("add should be correctly", () => {
    expect(list).toMatchSnapshot();
    expectLen(3);
  });

  it("get should be correctly ", () => {
    expect(list.get(0)).toMatchSnapshot();
    expect(list.get(2)).toMatchSnapshot();
  });

  it("indexOf should be correctly ", () => {
    expect(list.indexOf("a")).toBe(0);
    expect(list.indexOf("b")).toBe(1);
    expect(list.indexOf("c")).toBe(2);
    expect(list.indexOf("d")).toBe(-1);
  });
  it("has should be correctly ", () => {
    expect(list.has("a")).toBe(true);
    expect(list.has("b")).toBe(true);
    expect(list.has("c")).toBe(true);
    expect(list.has("d")).toBe(false);
  });
  it("inset should be correctly ", () => {
    list.inset("d", 0);
    expect(list.get(0)).toMatchSnapshot();
    expectLen(4);

    list.inset("f", 1);
    expect(list.get(0)).toMatchSnapshot();
    expectLen(5);

    list.inset("g", 1);
    expect(list.get(0)).toMatchSnapshot();
    expectLen(6);
  });
  it("inset should return false", () => {
    expect(list.inset("g", 1111)).toBe(false);
    expectLen(3);
  });
  it("remove should be correctly ", () => {
    list.remove(1);
    expect(list.get(0)).toMatchSnapshot();
    expectLen(2);

    list.remove(1);
    expect(list.get(0)).toMatchSnapshot();
    expectLen(1);

    list.remove(0);
    expect(list.get(0)).toMatchSnapshot();
    expectLen(0);
  });
});
