import client from "./mongoConnect.js";

const retrieveDailyHistory = async (companyDB, symbol, queryDate) => {
  const dailyHistory = await client
    .db(companyDB)
    .collection(symbol)
    .find({ Date: { $lte: queryDate } })
    .sort({ Date: -1 })
    .toArray();

  return dailyHistory;
};

export default retrieveDailyHistory;
