import { date } from "../../DataProvider";


const getTodayStock = (monthData) => {
  const gameDate = new Date(date.value).getTime();

  const filteredStock = monthData.filter((stock) => {
    const stockDate = new Date(stock.Date);
    return stockDate.getTime() == gameDate;
  });

  console.log("filteredStock length:", filteredStock.length)

  const currentStockArray = filteredStock.map((item) => ({
    ...item,
    id: item._id, //searchbar needs id instead of _id
  }));
  
  return currentStockArray
};

export default getTodayStock;