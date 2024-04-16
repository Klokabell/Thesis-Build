const setWeeklyAvg = (array) => {
  //find the weekly average of an array
  const copy = [...array];

  const arrayAvg = (array) => {
    const sum = (total, num) => total + num;
    const total = array.reduce(sum, 0);
    return (total / array.length).toFixed(2);
  };

  const findWeeklyAverage = (array) => {
    if (array.length === 0) {
      // in case of empty array
      return [];
    }
    if (array.length < 7) {
      return [arrayAvg(array)];
    }
    const week = array.splice(0, 7);
    const weekAvg = arrayAvg(week);
    const nextWeeks = findWeeklyAverage(array); //runs recursively until initial array finished
    return [weekAvg, ...nextWeeks];
  };
  return findWeeklyAverage(copy);
};

export default setWeeklyAvg;
