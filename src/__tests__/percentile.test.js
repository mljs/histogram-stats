import { percentile } from '../percentile.js';
/*
Results compared with python function percentile
*/
describe('percentile', () => {
  it('calculate the 40th percentile of an array, should return 29', () => {
    const data = {
      x: [15, 20, 35, 40, 50],
      y: [1, 1, 1, 1, 1],
    };
    const p = 0.4;
    expect(percentile(data, p)).toStrictEqual(29);
  });
  it('calculate the third quartile of an array, should return 4.0', () => {
    const data = {
      x: [1, 2, 3, 4],
      y: [2, 1, 3, 3],
    };
    const p = 0.75;
    expect(percentile(data, p)).toStrictEqual(4);
  });
  it('second quartile of four consecutive number with occurrence 1:2:1:2, should return 2.5', () => {
    const data = {
      x: [1, 2, 3, 4],
      y: [1, 2, 1, 2],
    };
    const p = 0.5;
    expect(percentile(data, p)).toStrictEqual(2.5);
  });
});
