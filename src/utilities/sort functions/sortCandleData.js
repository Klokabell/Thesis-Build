const multiCandleData = (array) => {
  const candleArray = array.map((item) => ({
    x: item.Company,
    y: [item.Open, item.High, item.Low, item.Close],
  }));

  return candleArray;
};

const singleCandleDaily = (array) => {
  const candleArray = array.map((item) => ({
    x: new Date(item.Date),
    y: [item.Open, item.High, item.Low, item.Close],
  }));

  return candleArray;
};

const singleCandleOther = (array, metric) => {
  console.log("array", array);
  console.log("metric", metric);
  const timeObj = {
    Weekly: "week",
    Monthly: "month",
    Yearly: "year",
  };


  const candleArray = array.map((period) => {
    console.log("period", period)
    return ({
      x: period[timeObj[metric]],
      y: [period.Open, period.High, period.Low, period.Close],
    })
  });

  return candleArray.flat();
};
export { multiCandleData, singleCandleDaily, singleCandleOther };
