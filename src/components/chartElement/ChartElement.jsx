/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import { useSignals } from "@preact/signals-react/runtime";
import { chartType, todayStock } from "../../utilities/DataProvider";
import { timeframe } from "./TimeFrameButton";
import { selectedDaily, selectedWeekly } from "../../utilities/fetchSelected";
import sortCandleData from "./sortCandleData";
import { candlestickOptions, lineOptions } from "./options";
import { computed, effect } from "@preact/signals-react";
import sortDailyLineData from "./sortDailyLineDate";
import sortWeeklyLineDate from "./sortWeeklyLineDate";

const ChartElement = () => {
  useSignals();

  let lineWeeklySeries
  let lineDailySeries
  
  const slicedCandleArray = computed(() => {
    if (selectedDaily.value)
      return selectedDaily.value.slice(0, timeframe.value);
    return [];
  });

  effect(() => {
    // Accessing .value properties to establish dependencies
    const selectedDailyValue = selectedDaily.value;
    const timeframeValue = timeframe.value;
   
    if (selectedDailyValue) {
       const sliceValue = timeframeValue === 1 ? 7 : timeframeValue;
       lineDailySeries = sortDailyLineData(selectedDailyValue.slice(0, sliceValue));
       lineWeeklySeries = sortWeeklyLineDate(selectedWeekly.value);
    }
   });
  
/*   console.log("slicedCandleArray", slicedCandleArray.value);
  console.log("lineWeeklySeries", lineWeeklySeries) */
  
  const candleSeries = [{ data: sortCandleData(slicedCandleArray.value) }];
  const lineSeries = timeframe.value === 1825 ? lineWeeklySeries : lineDailySeries
  const defaultSeries = sortCandleData(todayStock.value);

  return (
    <div className="chartBox" id="apex">
      {chartType.value === "candlestick" ? (
        <Chart
          options={candlestickOptions}
          series={candleSeries || defaultSeries}
          type="candlestick"
        />
      ) : (
        <Chart
          options={lineOptions}
          series={lineSeries || defaultSeries}
          type="line"
        />
      )}
    </div>
  );
};

export default ChartElement;

