const sortCandleData = (array) => {

  // Formats Candlestick array
  const candleArray = (candleValues) => {
    return candleValues.map((item) => ({
      x: new Date(item.Date),
      y: [item.Open, item.High, item.Low, item.Close],
    }));
  };

  return candleArray(array)
};

export default sortCandleData;
