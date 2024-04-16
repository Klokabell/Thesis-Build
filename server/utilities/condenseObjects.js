const condenseObjects = (array) => {
  //turn object to array of corresponding values
  const resultObj = {
    High: [],
    Low: [],
    Open: [],
    Close: [],
  };
  const addStockValues = (stock, obj) => {
    const { High, Low, Open, Close } = stock;
    obj.High.push(High);
    obj.Low.push(Low);
    obj.Open.push(Open);
    obj.Close.push(Close);
  };
  array.forEach((item) => addStockValues(item, resultObj));
  return resultObj;
};

export default condenseObjects;
