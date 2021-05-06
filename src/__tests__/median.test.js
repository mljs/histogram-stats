import { median } from '../median.js';

describe('median', () => {
  it('four elements having unit high, should return 2.5', () => {
    const data = {
      x: [1, 2, 3, 4],
    y: [1, 1, 1, 1],
    };
    expect(median(data)).toStrictEqual(2.5);
  });
  it('should return 2', () => {
    const data = {
      x: [1, 2, 3],
      y: [1, 2, 1],
    };
    expect(median(data)).toStrictEqual(2);
  });
  it('should return 1', () => {
    const data = {
      x: [1, 2],
      y: [3, 1],
    };
    expect(median(data)).toStrictEqual(1);
  });
  it('should return 2.5', () => {
    const data = {
      x: [1, 2, 3, 4],
      y: [1, 2, 1, 2],
    };
    expect(median(data)).toStrictEqual(2.5);
  });
  it('should return 1.5', () => {
    const data = {
      x: [1, 2, 3],
      y: [2, 1, 1],
    };
    expect(median(data)).toStrictEqual(1.5);
  });
});
