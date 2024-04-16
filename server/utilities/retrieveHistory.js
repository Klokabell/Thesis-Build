import client from "./mongoConnect.js";

const retrieveHistory = async (dbName, symbol, date) => {
  const queryDate = new Date(date)
  try {
    const companyHistory = await client
      .db(dbName)
      .collection(symbol)
      .find({ Date: { $lte: queryDate } })
      .sort({ Date: -1 })
      .toArray();
      
    console.log("history retrieved", symbol, companyHistory.length)
/*     const companyName = await client
      .db("Users_Collections")
      .collection("names_with_symbols")
      .find({ Company: company }, { title: 1, _id: 0 })
      .toArray() */
    return companyHistory; /* , Company: companyName[0].title */
  } catch (err) {
    console.error("retrieveHistory Error", err);
  }
};

export default retrieveHistory;
