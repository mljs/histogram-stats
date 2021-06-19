/**
 * @param {object} data - x sorted in increasing order and y the number of occurrence of each x value
 * @param {number} p - a number between 0 and 1 which represent the quantile
 * @returns {number} the x value calculated using linear interpolation of closest rank
 */

export function quantile(data, p) {
  const { x, y } = data;

  if (x.length === 0) {
    return NaN;
  }

  if (x.length === 1) {
    return x[0];
  }

  if (p === 1) {
    return x[x.length - 1];
  }

  let sumY = 0;

  for (let i = 0; i < y.length; i++) {
    sumY += y[i];
  }

  let index = (sumY - 1) * p;
  let index2 = Math.floor(index) + 1;
  let cumY = 0;

  for (let i = 0; i < y.length; i++) {
    cumY += y[i];
    if (index2 === cumY) {
      return x[i] + (index % 1) * (x[i + 1] - x[i]);
    }
    if (index2 < cumY) {
      return x[i];
    }
  }
}
