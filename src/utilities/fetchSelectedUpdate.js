import restructureResponse from "./sort functions/selected company data/restructureResponse";
const url = "http://localhost:3005/company";

const fetchSelectedUpdate = async (Symbol, Month) => {
  const isCompanyUpdate = true;
  Month++;
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
    restructuredObj.Daily = [...responseData.Daily].reverse();
    console.log("restructuredObj", restructuredObj)
    return restructuredObj

  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export default fetchSelectedUpdate;
