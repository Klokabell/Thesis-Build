const transferItems = (periodType, unitValue, historyObject, futureObject) => {
    console.log("transferring items", periodType)
  const convertPeriod = {
    Daily: "day",
    Weekly: "week",
    Monthly: "month",
    Yearly: "year",
  };
  const unitType = convertPeriod[periodType]
  const futureItems = futureObject[periodType];

  if (
    futureItems.length > 0 &&
    futureItems[futureItems.length - 1][unitType] <= unitValue
  ) {
    const newItem = futureItems.pop();
    historyObject[periodType].unshift(newItem);
  }

  // Update selectedFuture value with modified futureItems
  futureObject[periodType] = [...futureItems];
  return {
    updatedHistory: historyObject[periodType],
    updatedFuture: futureObject[periodType], 
  }
};

export default transferItems;
