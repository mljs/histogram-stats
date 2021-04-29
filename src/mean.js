/**
 * Returns the mean x value of an histogram
 * @param {object} data
 * @returns
 */

export function mean(data) {
  const { x, y } = data;

  let sumY = 0;
  let sumXY = 0;
  for (let i = 0; i < x.length; i++) {
    sumXY += x[i] * y[i];
    sumY += y[i];
  }

  return sumXY / sumY;
}
