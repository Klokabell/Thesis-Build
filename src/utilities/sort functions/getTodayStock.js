import { date } from "../../DataProvider";

const getTodayStock = (monthData) => {
  const gameDate = new Date(date.value);
  const gameYear = gameDate.getFullYear()
  const gameMonth = gameDate.getMonth()
  const gameDay = gameDate.getDate()

  const filteredStock = monthData.filter((stock) => {
    const stockDate = new Date(stock.Date);
    const stockYear = stockDate.getFullYear()
    const stockMonth = stockDate.getMonth()
    const stockDay = stockDate.getDate()
    return (
      stockYear === gameYear &&
      stockMonth === gameMonth &&
      stockDay === gameDay
    )
  });

  console.log("filteredStock[0]", filteredStock[0])

  const currentStockArray = filteredStock.map((item) => ({
    ...item,
    id: item._id, //searchbar needs id instead of _id
  }));
  
  return currentStockArray
};

export default getTodayStock;