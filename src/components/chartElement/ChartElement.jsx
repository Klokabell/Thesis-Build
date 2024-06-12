/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import { useSignals } from "@preact/signals-react/runtime";
import { chartType, todayStock } from "../../DataProvider";
import { timeframe } from "./TimeFrameButton";
import { selectedDaily, selectedWeekly } from "../../utilities/fetchSelected";
import sortCandleData from "../../utilities/sort functions/sortCandleData";
//import { candlestickOptions, lineOptions } from "./options";
import { candlestickOptions, lineOptions } from "./defaultOptions";
import { computed, effect } from "@preact/signals-react";
import sortDailyLineData from "../../utilities/sort functions/sortDailyLineDate";
import sortWeeklyLineDate from "../../utilities/sort functions/sortWeeklyLineDate";

const ChartElement = () => {
  useSignals();

  let lineWeeklySeries;
  let lineDailySeries;

  const slicedCandleArray = computed(() => {
    if (selectedDaily.value)
      return selectedDaily.value.slice(0, Math.min(timeframe.value, 30));
    return [];
  });

  effect(() => {
    // Accessing .value properties to establish dependencies
    const selectedDailyValue = selectedDaily.value;
    const timeframeValue = timeframe.value;

    if (selectedDailyValue) {
      const sliceValue = timeframeValue === 1 ? 7 : timeframeValue;
      lineDailySeries = sortDailyLineData(
        selectedDailyValue.slice(0, sliceValue)
      );
      lineWeeklySeries = sortWeeklyLineDate(selectedWeekly.value);
    }
  });

  const candleSeries = [{ data: sortCandleData(slicedCandleArray.value) }];
  const lineSeries =
    timeframe.value === 1825 ? lineWeeklySeries : lineDailySeries;

  return (
    <div className="chartBox" id="apex">
      {chartType.value === "candlestick" ? (
        <Chart
          options={candlestickOptions()}
          series={candleSeries}
          type="candlestick"
        />
      ) : (
        <Chart options={lineOptions()} series={lineSeries} type="line" />
      )}
    </div>
  );
};

export default ChartElement;
