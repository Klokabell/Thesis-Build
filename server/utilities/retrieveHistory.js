import retrieveDailyHistory from "./retrieveDailyHistory.js";
import retrieveAverages from "./retrieveAverages.js";

const retrieveHistory = async (companyDB, symbol, date) => {
  const queryDate = new Date(date);
  
  try {
    const Daily = await retrieveDailyHistory(companyDB, symbol, queryDate)
    const Weekly = await retrieveAverages(symbol, "week")
    const Monthly = await retrieveAverages(symbol, "month")
    const Yearly = await retrieveAverages(symbol, "year") 

    //const weeklyHistory = await convertToWeekAvg(condensedArrays);
    const companyHistory = { Daily, Weekly, Monthly, Yearly };
    console.log("companyHistory: ", companyHistory)
    return companyHistory;
  } catch (err) {
    console.error("retrieveHistory Error", err);
  }
};

export default retrieveHistory;
