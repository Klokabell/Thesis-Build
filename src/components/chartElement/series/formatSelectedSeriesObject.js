import limitSeriesArrays from "../../../utilities/sort functions/selected company data/limitSeriesArrays";
import formatCandleItem from "./formatCandleItem";

const formatSelectedCandleSeries = (historyObject, logDate) => {
  let shortenedArrayObj;
  let formattedObj;

  const assignObjectValues = (seriesObject) => ({
    Daily: seriesObject.Daily.map((item) => formatCandleItem(item, "Daily")),
    Weekly: seriesObject.Weekly.map((item) => formatCandleItem(item, "Weekly")),
    Monthly: seriesObject.Monthly.map((item) =>
      formatCandleItem(item, "Monthly")
    ),
    Yearly: seriesObject.Yearly.map((item) => formatCandleItem(item, "Yearly")),
  });

  if (historyObject?.Daily?.length > 0) {
    shortenedArrayObj = limitSeriesArrays(historyObject);
    formattedObj = assignObjectValues(shortenedArrayObj);
  } else formattedObj = {};

  if (logDate)
    console.log("formattedObj", formattedObj, "historyObject", historyObject);
  return formattedObj;
};

export default formatSelectedCandleSeries;
