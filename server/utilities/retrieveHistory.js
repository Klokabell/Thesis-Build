import retrieveDailyHistory from "./retrieveDailyHistory.js";
import retrieveAverages from "./retrieveAverages.js";

const retrieveHistory = async (companyDB, symbol, date) => {
  const queryDate = new Date(date);
  
  try {
    const dailyHistory = await retrieveDailyHistory(companyDB, symbol, queryDate)
    const weeklyAverages = await retrieveAverages(symbol, "week")
    const monthlyAverages = await retrieveAverages(symbol, "month")
    const yearlyAverages = await retrieveAverages(symbol, "year") 

    //const weeklyHistory = await convertToWeekAvg(condensedArrays);
    const companyHistory = {
      Daily: dailyHistory,
      weeklyAverages: weeklyAverages,
      monthlyAverages: monthlyAverages,
      yearlyAverages: yearlyAverages
    };
    return companyHistory;
  } catch (err) {
    console.error("retrieveHistory Error", err);
  }
};

export default retrieveHistory;
