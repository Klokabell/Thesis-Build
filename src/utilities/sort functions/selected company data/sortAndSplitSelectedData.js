import findDateIndex from "../date/findDateIndex";

const sortAndSplitSelectedData = (fetchedObject, dateObject) => {
  const splitArraysByDate = (periodArray, key) => {
    const splitIndex = findDateIndex(periodArray, key, dateObject);
    const splitArray = {
      prevData: periodArray.slice(splitIndex),
      futureData: periodArray.slice(0, splitIndex),
    };
    return splitArray;
  };

  const splitValues = {
    Daily: splitArraysByDate(fetchedObject.Daily, "day"),
    Weekly: splitArraysByDate(fetchedObject.Weekly, "week"),
    Monthly: splitArraysByDate(fetchedObject.Monthly, "month"),
    Yearly: splitArraysByDate(fetchedObject.Yearly, "year"),
  };

  return {
    prevDataObject: {
      Daily: splitValues.Daily.prevData,
      Weekly: splitValues.Weekly.prevData,
      Monthly: splitValues.Monthly.prevData,
      Yearly: splitValues.Yearly.prevData,
    },
    futureDataObject: {
      Daily: splitValues.Daily.futureData,
      Weekly: splitValues.Weekly.futureData,
      Monthly: splitValues.Monthly.futureData,
      Yearly: splitValues.Yearly.futureData,
    },
  };
};

export default sortAndSplitSelectedData;
