import { compareDates } from "./dateTools";
import { isAfter } from "date-fns";

const mergeGeneralUpdate = async (currentDate, currentArray, nextArray) => {
  const remainingDays = await currentArray.filter((item) => {
    return (
      compareDates(item.Date, currentDate) || isAfter(item.Date, currentDate)
    );
  });

  const result =
    nextArray.length > 0 ? [...remainingDays, ...nextArray] : ["Update Failed"];
  return result;
};

export default mergeGeneralUpdate;
