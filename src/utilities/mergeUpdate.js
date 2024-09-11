import { compareDates } from "./dateTools";
import { isAfter } from "date-fns";

const mergeUpdate = async (currentDate, currentArray, nextArray) => {
  const remainingDays = await currentArray.filter((item) => {
    return (
      compareDates(item.Date, currentDate) || isAfter(item.Date, currentDate)
    );
  });

  console.log("remainingDays", remainingDays);

  const result =
    nextArray.length > 0 ? [...remainingDays, ...nextArray] : ["Update Failed"];

  console.log("concat result: ", result);
  return result;
};

export default mergeUpdate;
