import client from "./mongoConnect.js";

const retrieveDailyHistory = async (companyDB, symbol, queryMonth, isCompanyUpdate) => {
  console.log()
  const findCondition = isCompanyUpdate
  ? { year: 2016, month: queryMonth } // update month
  : { $or: [
      { year: 2016, month: { $lte: queryMonth }}, 
      { year: { $lt: 2016 } } 
    ]};
  const dailyHistory = await client
    .db(companyDB)
    .collection(symbol)
    .find(findCondition)
    .sort({ Date: -1 })
    .limit(150)
    .toArray();

  return dailyHistory;
};

export default retrieveDailyHistory;
