import client from "./mongoConnect.js";
import condenseObjects from "./condenseObjects.js";
import convertToWeekAvg from "../utilities/compounds/convertToWeekAvg.js";

const retrieveHistory = async (dbName, symbol, date) => {
  const queryDate = new Date(date);
  try {
    const dailyHistory = await client
      .db(dbName)
      .collection(symbol)
      .find({ Date: { $lte: queryDate } })
      .sort({ Date: -1 })
      .toArray();

    const condensedArrays = await condenseObjects(dailyHistory);
    console.log("DailyHistory final", dailyHistory[dailyHistory.length-1])

    const weeklyHistory = await convertToWeekAvg(condensedArrays);
    const companyHistory = {
      Daily: dailyHistory,
      Weekly: weeklyHistory,
    };
    return companyHistory;
  } catch (err) {
    console.error("retrieveHistory Error", err);
  }
};

export default retrieveHistory;
