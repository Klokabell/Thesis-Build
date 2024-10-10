import formatLineCloseData from "./formatLineCloseData";

const formatSelectedLineSeries = (historyObject) => {
  const assignObjectValues = (seriesObject) => ({
    Daily: formatLineCloseData(seriesObject.Daily, "Date"),
    Weekly: formatLineCloseData(seriesObject.Weekly, "week"),
    Monthly: formatLineCloseData(seriesObject.Monthly, "month"),
    Yearly: formatLineCloseData(seriesObject.Yearly, "year")
  });

  
  let formattedObj = assignObjectValues(historyObject);
  console.log("formattedObj", formattedObj)

  return formattedObj;
};

export default formatSelectedLineSeries