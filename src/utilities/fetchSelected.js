import { 
  selectedHistory,
 } from "../DataProvider";
 import restructureResponse from "./sort functions/restructureResponse";

const url = "http://localhost:3005/company";

const fetchSelected = async (item) => {
  const { Symbol, Date } = item;
  const periodTypes = ["Weekly", "Monthly", "Yearly"]
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Symbol, Date }),
    });

    const responseData = await response.json();
    const restructuredObj = restructureResponse(periodTypes, responseData)
    selectedHistory.value = { Daily: responseData.Daily, ...restructuredObj}
    console.log("selectedHistory.value", selectedHistory.value)
  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export { fetchSelected };
