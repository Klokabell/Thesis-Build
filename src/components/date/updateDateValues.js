import setCurrentDateObject from "../../utilities/sort functions/date/setCurrentDateObj";
import { addDays } from "date-fns";
import { isWeekday } from "../../utilities/dateTools";

const updateDateValues = (currentDate) => {
  let newDateObj = setCurrentDateObject(addDays(currentDate, 1)); 
  currentDate = new Date(newDateObj.date);

  while (!isWeekday(currentDate)) {
    currentDate = addDays(currentDate, 1);
    newDateObj = setCurrentDateObject(currentDate);
  }
  return newDateObj
};


export default updateDateValues