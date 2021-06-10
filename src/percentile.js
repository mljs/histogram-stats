/**
 * @param {object} data - x sorted in increasing order and y the number of occurrence of each x value
 * @param {number} p - the percentile of order p, a number between 0 and 1, e.g. first quartile should be 0.25
 * @returns {number} the x value for a given percentile p using linear interpolation of closest rank
 */

export function percentile(data, p) {
  const { x, y } = data;

  if (x.length === 0) {
    return NaN;
  }

  if (x.length === 1) {
    return x[0];
  }

  let flat = [];

  for (let i = 0; i < y.length; i++) {
    flat.push(...new Array(y[i]).fill(x[i]));
  }

  let index = (flat.length - 1) * p;

  return (
    flat[Math.floor(index)] +
    (index % 1) * (flat[Math.floor(index) + 1] - flat[Math.floor(index)])
  );
}
