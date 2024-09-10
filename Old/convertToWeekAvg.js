import setWeeklyAvg from "../server/utilities/setWeeklyAverage.js";

const convertToWeekAvg = async (condensedArrays) => {
    
  let weekObject = {};
  for (let [key, value] of Object.entries(condensedArrays)) {
    weekObject[key] = setWeeklyAvg(key, value);
  }
  return weekObject;
};

export default convertToWeekAvg