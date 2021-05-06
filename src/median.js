/* 
 * Returns the meadian x value from a histogram of sorted abscissa
 * @param {object} data - x sorted abscissa by incresing order and y the number of occurrence of each x value
 * @returns {number} xmedian - the median of x values 
 */

 export function median(data) {
  const { x, y } = data;

  if (x.length === 1) {
    return x[0];
  }

  let sumY = 0;
  let cumSumY = new Array(y.length);

  for (let i = 0; i < y.length; i++) {
    sumY += y[i];
    cumSumY[i] = sumY;
  }

  for (let k = 0; k < cumSumY.length; k++) {
    if (cumSumY[k] > sumY / 2) {
      let xmedian = x[k];
      return xmedian;
    } else if (cumSumY[k] === sumY / 2) {
      let xmedian = 0.5 * (x[k] + x[k + 1]);
      return xmedian;
    }
  }
}
