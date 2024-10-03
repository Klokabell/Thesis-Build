const sliceByUnit = (periodArray, unit) => {
  const arrayCopy = periodArray
  const seriesArray = arrayCopy.slice(0, unit).reverse();
  return seriesArray
};
export default sliceByUnit;
