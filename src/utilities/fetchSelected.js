const url = "http://localhost:3005/company";

const fetchSelected = async (stock) => {
  const {Symbol, Date } = stock
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Symbol, Date }),
    });
    const stockHistory = await response.json();
    return stockHistory;
  } catch (err) {
    console.error("fetchSelected Error", err);
  }
};

export default fetchSelected;
