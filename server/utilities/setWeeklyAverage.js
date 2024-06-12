const setWeeklyAvg = (key, array) => {
  const copy = [...array];
  const arrayAvg = (array) => {
    const sum = (total, num) => total + num;
    const total = array.reduce(sum, 0);
    return Math.round((total / array.length)*1e2)
  };
  const findWeeklyAverage = (array) => {
    if (array.length === 0) {
      // in case of empty array
      return [];
    }
    if (array.length < 7) {
      const finalAvg = [arrayAvg(array)];

      return finalAvg
    }
    const week = array.splice(0, 7);
    const weekAvg = arrayAvg(week);
    const nextWeeks = findWeeklyAverage(array)
    return [weekAvg, ...nextWeeks];
  };
  return findWeeklyAverage(copy);
};

export default setWeeklyAvg