/**
 * Returns the median x value from a histogram
 * @param {object} data - x sorted in increasing order and y the number of occurrence of each x value
 * @returns {number} the median of x values
 */

export function median(data) {
  const { x, y } = data;

  if (x.length === 0) {
    return NaN;
  }

  if (x.length === 1) {
    return x[0];
  }

  let sumY = 0;
  let cumSumY = new Array(y.length);
  let i;

  for (i = 0; i < y.length; i++) {
    sumY += y[i];
    cumSumY[i] = sumY;
  }

  for (i = 0; i < cumSumY.length; i++) {
    if (cumSumY[i] > sumY / 2) {
      return x[i];
    } else if (cumSumY[i] === sumY / 2) {
      return 0.5 * (x[i] + x[i + 1]);
    }
  }
}
