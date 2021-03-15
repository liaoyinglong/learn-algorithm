import { SingleLinkList } from "./SingleLinkList";

describe("SingleLinkList", () => {
  let list: SingleLinkList<number | string>;

  beforeEach(() => {
    list = new SingleLinkList<number | string>();
  });

  it("add should be correctly", () => {
    list.add(1);
    expect(list).toMatchSnapshot();
    list.add(2);
    expect(list).toMatchSnapshot();
    list.add(3);
    expect(list).toMatchSnapshot();
  });

  it("get should be correctly ", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    expect(list.get(0)).toMatchSnapshot();
    expect(list.get(2)).toMatchSnapshot();
  });

  it("indexOf should be correctly ", () => {
    list.add("a");
    list.add("b");
    list.add("c");

    expect(list.indexOf("a")).toBe(0);
    expect(list.indexOf("b")).toBe(1);
    expect(list.indexOf("c")).toBe(2);
    expect(list.indexOf("d")).toBe(-1);
  });
});
