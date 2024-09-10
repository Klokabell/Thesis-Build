import { parse, format } from "date-fns";
// import { periodSpan } from "../dateManager";

const timeObj = {
  Weekly: "week",
  Monthly: "month",
  Yearly: "year",
};


const multiCandleDaily = (array) => {
  const candleArray = array.map((item) => ({
    x: item.Company,
    y: [item.Open, item.High, item.Low, item.Close],
  }));

  return candleArray;
};

const singleCandleDaily = (array) => {

  const candleArray = array.map((item) => ({
    x: format(new Date(item.Date), "d/M/yyyy"),
    y: [item.Open, item.High, item.Low, item.Close],
  }));

  return candleArray;
};

const singleCandleYearly = (array) => {
  
  const candleArray = array.map((item) => {
    return {
      x: format(new Date(item.year), "yyyy"),
      y: [item.Open, item.High, item.Low, item.Close]
    }
  })
  return candleArray
}

const singleCandleOther = (array, period) => {
  const candleArray = array.map((item) => {    
    const date = parse(`${item[period]}`, `${period == "week" ? "I" : "M"}`, new Date(item.year, 0, 1))
    return ({
      x: format(date, `${period == "week" ? "eee d yyyy" : "MMM yyyy"}`),
      y: [item.Open, item.High, item.Low, item.Close],
    })
  });

  return candleArray.flat();
};


const sortCandleData = (chartType, values, period) => {
  const array = values.reverse()
  switch (chartType) {
    case "singleDaily":
      return singleCandleDaily(array)
    case "singleOther":
      return singleCandleOther(array, timeObj[period])
    case "singleYearly":
      return singleCandleYearly(array)
    case "multiDaily": 
      return multiCandleDaily(array.slice(0, 5))
    /* case "multiOther": 
      return  ADD THIS*/
  }
}
export default sortCandleData;
