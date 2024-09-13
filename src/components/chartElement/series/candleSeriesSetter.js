import { convertPeriod } from "../../../utilities/dateTools";
import { candleTypes } from "./chartTypeObjects";
import getPreviousDate from "../../date/getPreviousDate";
import sliceByDate from "./sliceByDate";
import addTodaySelected from "../../../utilities/sort functions/addTodaySelected";
import { selectedName, todayStock } from "../../../DataProvider";

const candleSeriesSetter = (array, periodSpan, unit, date) => {

  const periodType = {
    Daily: "singleDaily",
    Weekly: "singleOther",
    Monthly: "singleOther",
    Yearly: "singleYearly"
  }  

  let todayStockData
  let updatedArray
  const candleType = periodType[periodSpan]
  const periodArray = array[periodSpan]
  const endDate = getPreviousDate(new Date(date), periodSpan, unit)

  if(todayStock.value) {
    todayStockData = addTodaySelected(todayStock.value, selectedName.value)
    updatedArray = [todayStockData, ...periodArray]
  }

  console.log("updatedArray", updatedArray)
  const timeframeArray = sliceByDate(updatedArray, endDate).slice().reverse()

  console.log("timeFrameArray", timeframeArray)
  const candleTypeFunc = candleTypes[candleType];

  if (typeof candleTypeFunc !== 'function') {
    throw new Error(`Invalid candleType: ${candleType}`);
  }
  return candleTypeFunc(timeframeArray, convertPeriod[periodSpan]);
}





export default candleSeriesSetter