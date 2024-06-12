import { date } from "../../DataProvider";

const filterCurrentStock = (fetchedData) => {
  const gameDate = new Date(date.value).getTime();

  const filteredStock = fetchedData.filter((stock) => {
    const stockDate = new Date(stock.Date);
    return stockDate.getTime() == gameDate;
  });

  console.log("filterCurrentStock length:", filteredStock.length)

  return filteredStock.map((item) => ({
    ...item,
    id: item._id, //searchbar needs id instead of _id
  }));
};

export default filterCurrentStock;
