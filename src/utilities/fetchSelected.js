import {
  currentDateObj,
  selectedHistory,
  selectedFuture,
} from "../StateManager";
import restructureResponse from "./sort functions/selected company data/restructureResponse";
import sortAndSplitSelectedData from "./sort functions/selected company data/sortAndSplitSelectedData";
const url = "http://localhost:3005/company";

const fetchSelected = async (item, isCompanyUpdate) => {
  const { Symbol, Month } = item;
  const periodTypes = ["Weekly", "Monthly", "Yearly"];
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Symbol, Month, isCompanyUpdate }),
    });

    const responseData = await response.json();
    const restructuredObj = restructureResponse(periodTypes, responseData);
    const splitStocksObj = sortAndSplitSelectedData(
      {
        Daily: responseData.Daily,
        ...restructuredObj,
      },
      currentDateObj.value
    );
    console.log("splitStocksObj", splitStocksObj)
    selectedHistory.value = splitStocksObj.prevDataObject;
    selectedFuture.value = splitStocksObj.futureDataObject;
  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export { fetchSelected };
