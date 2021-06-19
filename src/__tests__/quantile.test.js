import { quantile } from '../quantile.js';
/*
Results compared with python function percentile
*/
describe('quantile', () => {
  it('calculate the 40th percentile of an array, should return 29', () => {
    const data = {
      x: [15, 20, 35, 40, 50],
      y: [1, 1, 1, 1, 1],
    };
    const k = 40;
    const q = 100;
    expect(quantile(data, k, q)).toStrictEqual(29);
  });
  it('calculate the third quartile of an array, should return 4.0', () => {
    const data = {
      x: [1, 2, 3, 4],
      y: [2, 1, 3, 3],
    };
    const k = 75;
    const q = 100;
    expect(quantile(data, k, q)).toStrictEqual(4);
  });
  it('calculate the 39th percentile, should return 19.51', () => {
    const data = {
      x: [15, 19, 20, 35, 40, 50],
      y: [3, 1, 2, 1, 2, 1],
    };
    const k = 39;
    const q = 100;
    expect(quantile(data, k, q)).toStrictEqual(19.51);
  });
  it('second quartile of four consecutive number with occurrence 1:2:1:2, should return 2.5', () => {
    const data = {
      x: [1, 2, 3, 4],
      y: [1, 2, 1, 2],
    };
    const k = 1;
    const q = 2;
    expect(quantile(data, k, q)).toStrictEqual(2.5);
  });
});
