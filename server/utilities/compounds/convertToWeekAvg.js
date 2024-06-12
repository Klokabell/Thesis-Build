import setWeeklyAvg from "../setWeeklyAverage.js";

const convertToWeekAvg = async (condensedArrays) => {
    
  let weekObject = {};
  for (let [key, value] of Object.entries(condensedArrays)) {
    weekObject[key] = setWeeklyAvg(key, value);
  }
  //console.log("convertToWeekAvg", weekObject)
  return weekObject;
};

export default convertToWeekAvg