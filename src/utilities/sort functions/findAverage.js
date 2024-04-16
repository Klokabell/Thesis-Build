/* const arrayAvg = (array, field) => {
  const sum = (total, num) => total + num;
  const total = array.reduce(sum, 0);
  return total / array.length;
};

const findWeeklyAverage = (array) => {
  if (array.length === 0) { // in case of empty array
    return [];
  }
  if (array.length < 7) {
    return [arrayAvg(array)];
  }
  const week = array.splice(0, 7);
  const weekAvg = arrayAvg(week);
  const nextWeeks = findWeeklyAverage(array);//runs recursively until initial array finished
  return [weekAvg, ...nextWeeks];
};

const setWeeklyAvg = (array) => {
  const copy = [...array];
  return findWeeklyAverage(copy);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const arrayTest = [{High: 4, Open: 2, Low: 1, Close: 3},{High: 6, Open: 7, Low: 4, Close: 9},{High: 12, Open: 6, Low: 5, Close: 10}]
console.log(setWeeklyAvg(array))


const sortStockValues = (stock) => {
    const { High, Low, Open, Close } = stock
  
    
}  */