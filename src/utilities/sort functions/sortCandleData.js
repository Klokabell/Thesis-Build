const sortCandleData = (array) => {

  const candleArray = array.map((item) => ({
    x: new Date(item.Date),
    y: [item.Open, item.High, item.Low, item.Close],
  }));

  return candleArray
};

export default sortCandleData;
