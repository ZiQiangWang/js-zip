/**
 * Test case for js-zip
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-04 14:36:01
 */

const JsZip = require('../src/js-zip');

describe('Testcases of js-zip', () => {
  test('1.Null input', () => {
    JsZip();
  });
  test('2.Arrays input', () => {
    const a = [1,2,3];
    const b = [4,5,6];
    const c = [7,8,9];
    expect(JsZip(a, b, c)).toEqual([ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]);
  });
  test('3.String input', () => {
    const a = 'abc';
    const b = 'def';
    const c = 'xyz';
    expect(JsZip(a, b, c)).toEqual( [ [ 'a', 'd', 'x' ], [ 'b', 'e', 'y' ], [ 'c', 'f', 'z' ] ]);
  });
  test('4.One input', () => {
    const a = 'abc';
    const b = [1,2,3];
    expect(JsZip(a)).toEqual( [ [ 'a' ], [ 'b' ], [ 'c' ] ]);
    expect(JsZip(b)).toEqual( [ [ 1 ], [ 2 ], [ 3 ] ]);
  });
  describe('5.Different length input', () => {
    test('a.Lack',() => {
      const a = [1,2,3];
      const b = [4,5];
      const c = [7,8,9];
      expect(JsZip(a, b, c)).toEqual([ [ 1, 4, 7 ], [ 2, 5, 8 ] ]);
    });
    test('a.Extra',() => {
      const a = [1,2,3];
      const b = [4,5,6,0];
      const c = [7,8,9];
      expect(JsZip(a, b, c)).toEqual([ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]);
    });
  });
  describe('6.Array of Complex Object', () => {
    test('a.Array of array',() => {
      const a = [[1,1,1],[2,2,2],[3,3,3]];
      const b = [[4,4,4],[5,5,5],[6,6,6]];
      expect(JsZip(a, b)).toEqual(  [ [ [ 1, 1, 1 ], [ 4, 4, 4 ] ], [ [ 2, 2, 2 ], [ 5, 5, 5 ] ], [ [ 3, 3, 3 ], [ 6, 6, 6 ] ] ]);
    });
    test('b.Array of object',() => {
      const a = [{a:1},{b:2}];
      const b = [{c:3},{d:4}];
      const c = [{e:5},{f:6}];
      expect(JsZip(a, b, c)).toEqual( [ [ { a: 1 }, { c: 3 }, { e: 5 } ], [ { b: 2 }, { d: 4 }, { f: 6 } ] ]);
    });
    test('c.Array of mix',() => {
      const a = [{a:1},{b:2}];
      const b = [[1,2,3],{d:4}];
      const c = [[4,5,6],[7,8,9]];
      expect(JsZip(a, b, c)).toEqual( [ [ { a: 1 }, [ 1, 2, 3 ], [ 4, 5, 6 ] ], [ { b: 2 }, { d: 4 }, [ 7, 8, 9 ] ] ]);
    });
  });
  test('7.Transposition of matrix', () => {
    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(JsZip(...a)).toEqual([ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]);
  });
  describe('9.Uniterable input', () => {
    test('a.Number input', () => {
      expect(JsZip.bind(null, 1)).toThrow(/must support iteration/);
    });
    test('b.Null input', () => {
      expect(JsZip.bind(null, null)).toThrow(/must support iteration/);
    });
    test('c.Undefined input', () => {
      expect(JsZip.bind(null, undefined)).toThrow(/must support iteration/);
    });
    test('d.Bool input', () => {
      expect(JsZip.bind(null,true)).toThrow(/must support iteration/);
    });
    test('e.Object input', () => {
      const a = [{a:1, b:2, c:3}, {d:4, e:5, f:6}, {x:7, y:8, z:9}];
      expect(JsZip.bind(null,...a)).toThrow(/must support iteration/);
    });
  });
});

