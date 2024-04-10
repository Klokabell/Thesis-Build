import mongoConnect from "./mongoConnect.js";
const uri = "mongodb://localhost:27018/";

const retrieveHistory = async (dbName, symbol, date) => {
  const client = await mongoConnect(uri);
  const queryDate = new Date(date)
  try {
    const companyHistory = await client
      .db(dbName)
      .collection(symbol)
      .find({ Date: { $lte: queryDate } })
      .sort({ Date: -1 })
      .toArray();
    console.log("history retrieved", symbol, companyHistory.length)
    return companyHistory;
  } catch (err) {
    console.error("retrieveHistory Error", err);
  }
};

export default retrieveHistory;
