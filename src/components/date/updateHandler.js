/* eslint-disable no-unused-vars */
import { effect, batch} from "@preact/signals-react";
import { subDays, getMonth, endOfMonth, getDate } from "date-fns";
import { currentMonthStocks, gameDate, selectedName, selectedHistory, todayStock } from "../../DataProvider";
import { compareDates } from "../../utilities/dateTools";
import getTodayStock from "../../utilities/sort functions/getTodayStock";
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


const updateManager = async (currentDate) => {

  const handleSelectedUpdate = () =>{

  }

}

const handleDailyUpdate = () => {
  const filterCompany = currentMonthStocks.value.filter(item => {
    return item.Company === selectedName.value
  })      
  const selectedNameMonth = filterCompany.sort((a, b) => new Date(a.Date) - new Date(b.Date))
  const updateItem = selectedNameMonth.shift

  
}

const updateStockArray = async (currentMonth, monthEnd) => {
  let currentDate = new Date(gameDate.value);

  todayStock.value = getTodayStock();
  if (isUpdateDay(currentDate, monthEnd)) {
    await updatehandler(currentMonth, currentDate);
  }
};

export { isUpdateDay, updatehandler, updateManager, updateStockArray, handleDailyUpdate };