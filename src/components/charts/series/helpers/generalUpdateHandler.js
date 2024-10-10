import generalMonthlyUpdateFetcher from "../../../../utilities/generalMonthlyUpdateFetcher";
import getTodayStock from "../../../../utilities/sort functions/getTodayStock";
import { todayStock, currentMonthStocks } from "../../../../StateManager";
import mergeGeneralUpdate from "../../../../utilities/mergeGeneralUpdate";

const generalUpdateHandler = async (currentMonth, date) => {
  let currentDate = new Date(date);
  todayStock.value = getTodayStock();

  const nextMonthGeneralStocks = await generalMonthlyUpdateFetcher(
    currentMonth + 1
  );
  currentMonthStocks.value = await mergeGeneralUpdate(
    currentDate,
    currentMonthStocks.value,
    nextMonthGeneralStocks
  );
};

export default generalUpdateHandler;
