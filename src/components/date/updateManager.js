import { isUpdateDay } from "../../utilities/dateTools";
import { selectedUpdateHandler } from "../chartElement/series/update tools/stockUpdateFunctions";
import getTodayStock from "../../utilities/sort functions/getTodayStock";
import { selectedFuture, selectedHistory, todayStock } from "../../StateManager";
import transferItems from "../chartElement/series/update tools/transferItems";


const updateManager = async (dateObject) => {    
const { date, day, week, month } = dateObject
console.log(`day: ${day} \n month: ${month}, \n week: ${week}`)
const historyObject = selectedHistory.value
const futureObject = selectedFuture.value

  todayStock.value = getTodayStock();
  if (isUpdateDay(date)) {
    await selectedUpdateHandler()
  }
  const updatedDailyObjs = transferItems("Daily", day, historyObject, futureObject);
  selectedFuture.value.Daily = updatedDailyObjs.updatedFuture
  selectedHistory.value.Daily = updatedDailyObjs.updatedHistory

  const updatedWeeklyObjs = transferItems("Weekly", week, historyObject, futureObject);
  selectedFuture.value.Weekly = updatedWeeklyObjs.updatedFuture
  selectedHistory.value.Weekly = updatedWeeklyObjs.updatedHistory

  const updatedMonthlyObjs = transferItems("Monthly", month, historyObject, futureObject);
  selectedFuture.value.Monthly = updatedMonthlyObjs.updatedFuture
  selectedHistory.value.Monthly = updatedMonthlyObjs.updatedHistory
};

export default updateManager;
