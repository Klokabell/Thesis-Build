import { subDays } from "date-fns";
import { currentMonthStocks } from "../../DataProvider";
import { compareDates } from "../../utilities/dateTools";
import mergeUpdate from "../../utilities/mergeUpdate";
import updateFetcher from "../../utilities/updateFetcher";

const isUpdateDay = (thisDate, endDate) => {
  const updateDate = subDays(endDate, 5);
  return compareDates(thisDate, updateDate);
};

const updatehandler = async (month, currentDate) => {
  const nextMonthStocks = await updateFetcher(month + 1);
  currentMonthStocks.value = await mergeUpdate(
    currentDate,
    currentMonthStocks.value,
    nextMonthStocks
  );
};

export { isUpdateDay, updatehandler };
