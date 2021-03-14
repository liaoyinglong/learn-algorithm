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
});
