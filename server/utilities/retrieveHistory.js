import retrieveDailyHistory from "./retrieveDailyHistory.js";
import retrieveAverages from "./retrieveAverages.js";

const retrieveHistory = async (companyDB, symbol, month, isCompanyUpdate) => {

  try {
    const Daily = await retrieveDailyHistory(companyDB, symbol, month, isCompanyUpdate);
    const Weekly = await retrieveAverages(symbol, "week", month, isCompanyUpdate);
    const Monthly = await retrieveAverages(symbol, "month", month, isCompanyUpdate);
    const Yearly = await retrieveAverages(symbol, "year", month, isCompanyUpdate);

    const companyHistory = { Daily, Weekly, Monthly, Yearly };
    console.log("companyHistory: ", companyHistory);
    return companyHistory;
  } catch (err) {
    console.error("retrieveHistory Error", err);
  }
};

export default retrieveHistory;
