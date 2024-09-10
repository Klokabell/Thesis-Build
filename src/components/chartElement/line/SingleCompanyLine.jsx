/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  singleLinePeriod,
  singleLineUnit,
  selectedHistory,
} from "../../../DataProvider";
import TimeFrameComponent from "../../timeframe/composites/TimeFrameComponent";
import Chart from "react-apexcharts";
import sortLineDataSingle from "../../../utilities/sort functions/sortLineDataSingle";
import { lineOptions } from "../LineOptions";
import seriesSelector from "../../../utilities/sort functions/seriesSelector";
import { dateFormatter, periodSpan } from "../../../utilities/dateTools";

const SingleCompanyLine = ({ className }) => {
  const period = singleLinePeriod.value;
  const unit = singleLineUnit.value;
  const selected = selectedHistory.value;

  const convertPeriod = {
    Daily: "Date",
    Weekly: "week",
    Monthly: "month",
    Yearly: "year",
  };

  const [options, setOptions] = useState(lineOptions(singleLineUnit.value, []));
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const asyncHandler = async () => {
      const baseData = seriesSelector(
        singleLinePeriod.value,
        singleLineUnit.value
      );
      const sortedLineSeries = await sortLineDataSingle(
        baseData,
        convertPeriod[period]
      );
      const datesArray = sortedLineSeries[0].Dates.reverse().map((item) => {
        return period === "Daily"
          ? dateFormatter(item)
          : periodSpan(item.year, convertPeriod[period], item.value);
      });

      const otherDatesArray = datesArray.map((dateObj) => {
        return [dateObj.startDate, dateObj.endDate];
      });

      setOptions(
        lineOptions(
          unit,
          period === "Daily" ? datesArray : otherDatesArray,
          period
        )
      );
      setSeries(sortedLineSeries.slice(1, 5));
    };
    if (selectedHistory.value.Daily) asyncHandler();
  }, [selected, period, unit]);

  return selectedHistory.value?.Daily?.length > 0 ? (
    <div
      className={`chart-element_${className} mt-[5%] mb-[10%] ml-[5%]`}
      id="apex"
    >
      <TimeFrameComponent
        unitSignal={singleLineUnit}
        periodSignal={singleLinePeriod}
        isLine={true}
      />
      <Chart options={options} series={series} />
    </div>
  ) : null;
};

export default SingleCompanyLine;
