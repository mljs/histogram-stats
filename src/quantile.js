/* eslint-disable no-unused-vars */
/**
 * @param {object} data - x sorted in increasing order and y the number of occurrence of each x value
 * @param {numbers} k, q - the kth q-quantile, thus k should be less than or equal to q, should be positive integers
 * @returns {number} the x value or kth q-quantile using linear interpolation of closest rank
 */

export function quantile(data, k, q) {
  const { x, y } = data;

  if (x.length === 0) {
    return NaN;
  }

  if (x.length === 1) {
    return x[0];
  }

  let p = k / q;

  if (p === 1) {
    return x[x.length - 1];
  }

  let sumY = 0;
  let i;

  for (i = 0; i < y.length; i++) {
    sumY += y[i];
  }

  let index = (sumY - 1) * p;
  let cumY = 0;

  for (i = 0; i < y.length; i++) {
    cumY += y[i];
    if (Math.floor(index) + 1 === cumY) {
      return x[i] + (index % 1) * (x[i + 1] - x[i]);
    }
    if (Math.floor(index) + 1 < cumY) {
      return x[i];
    }
  }
}
