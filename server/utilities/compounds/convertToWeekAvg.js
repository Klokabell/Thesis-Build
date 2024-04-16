import condenseObjects from "../condenseObjects.js";
import setWeeklyAvg from "../setAverage.js";

const convertToWeekAvg = (historyArray) => {
    
  let weekObject = {};
  const historySorted = condenseObjects(historyArray);
  for (let [key, value] of Object.entries(historySorted)) {
    const weeklyAvg = setWeeklyAvg(value);
    weekObject[key] = weeklyAvg;
  }
  return weekObject;
};

export default convertToWeekAvg