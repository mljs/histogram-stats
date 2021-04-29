import { mean } from '../mean.js';

describe('mean', () => {
  it('should return 42', () => {
    const data = {
      x: [1, 2, 3, 4],
      y: [2, 2, 1, 1],
    };
    expect(mean(data)).toBeCloseTo(13 / 6, 10);
  });
});
