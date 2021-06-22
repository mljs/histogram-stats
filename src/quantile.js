/**
 * @param {object} data - x sorted in increasing order and y the number of occurrence of each x value
 * @param {number} cumulativeProbability - cumulative probability, a number in the interval [0,1]
 * @returns {number} the x value calculated using linear interpolation of closest rank
 */

export function quantile(data, cumulativeProbability) {
  const { x, y } = data;

  if (x.length === 0) {
    return NaN;
  }

  if (x.length === 1) {
    return x[0];
  }

  if (cumulativeProbability === 1) {
    return x[x.length - 1];
  }

  let sumY = 0;

  for (let i = 0; i < y.length; i++) {
    sumY += y[i];
  }

  let index = (sumY - 1) * cumulativeProbability;
  let upperLimit = Math.floor(index) + 1;
  let cumulativeY = 0;

  for (let i = 0; i < y.length; i++) {
    cumulativeY += y[i];
    if (upperLimit === cumulativeY) {
      return x[i] + (index % 1) * (x[i + 1] - x[i]);
    }
    if (upperLimit < cumulativeY) {
      return x[i];
    }
  }
}
