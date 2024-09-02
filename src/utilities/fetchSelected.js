import { 
  selectedHistory,
 } from "../DataProvider";

const url = "http://localhost:3005/company";


const fetchSelected = async (item) => {
  const { Symbol, Date } = item;
  //  console.log("fetchSelected Symbol: ", Symbol)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Symbol, Date }),
    });

    selectedHistory.value = await response.json();
    console.log("selectedHistory.value.Daily", selectedHistory.value.Daily);

  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export { fetchSelected };
