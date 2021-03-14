import { SingleLinkList } from "./SingleLinkList";

describe("SingleLinkList", () => {
  let list: SingleLinkList<number>;

  beforeEach(() => {
    list = new SingleLinkList<number>();
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
});
