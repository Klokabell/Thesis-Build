const condenseObjects = async (stocksArray) => {
  const HighArray = await stocksArray.map(obj => obj.High)
  const LowArray = await stocksArray.map(obj => obj.Low)
  const OpenArray = await stocksArray.map(obj => obj.Open)
  const CloseArray = await stocksArray.map(obj => obj.Close)

  const valuesArray = {
      High: HighArray,
      Low: LowArray,
      Open: OpenArray,
      Close: CloseArray
  }
  return valuesArray
}

export default condenseObjects;