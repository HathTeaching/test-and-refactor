import {all, any, map, imap} from './tools';

describe("all", () => {
  test("that all iterables are even numbers", () => {
    expect(all([2,4,6,8], (x: number) => x % 2 == 0)).toEqual(true);
  })

  test("that are not all iterables are even numbers", () => {
    expect(all([2,4,6,8,9], (x: number) => x % 2 == 0)).toEqual(false);
  })
})


describe.skip("any", () => {
  test("that any iterables are odd numbers", () => {
    expect(any([2,4,7,8], (x: number) => x % 2 == 1)).toEqual(true);
  })

  test("that any of iterables are an odd numbers", () => {
    expect(any([2,4,6,8], (x: number) => x % 2 == 1)).toEqual(false);
  })
})


describe.skip("map", () => {
  test("", () => {
    expect(map([2,4,7,8], (x: number) => x.toString())).toEqual(["2","4","7","8"]);
  })
})

describe.skip("imap", () => {

  test("that any iterables are odd numbers", () => {
    let numStringIterable = imap([2,4,7,8], (x: number) => x.toString());
    let two = numStringIterable.next();
    let four = numStringIterable.next();
    let seven = numStringIterable.next();
    let eight = numStringIterable.next();

    expect(two).toEqual("2");
    expect(four).toEqual("4");
    expect(seven).toEqual("7");
    expect(eight).toEqual("8");
  })
})