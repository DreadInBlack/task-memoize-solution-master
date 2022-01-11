import memoize from "./memoize";

describe("memoize", () => {
  it("корректно работает", () => {
    const fn = jest
      .fn()
      .mockReturnValueOnce("initial")
      .mockReturnValueOnce("second")
      .mockReturnValue("other");

    const memoizedFn = memoize(fn);
    expect(memoizedFn(1, 2)).toEqual("initial");
    expect(memoizedFn(1, 3)).toEqual("second");
    expect(memoizedFn(1, 2)).toEqual("initial");
    expect(memoizedFn(3, 1)).toEqual("other");
  });
});
