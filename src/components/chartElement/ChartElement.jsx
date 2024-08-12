/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import { useSignals } from "@preact/signals-react/runtime";
import { chartType, todayStock } from "../../DataProvider";
import { timeframe } from "../timeframeset/TimeFrameButton";
import { selectedHistory } from "../../DataProvider";
import sortCandleData from "../../utilities/sort functions/sortCandleData";
import { candlestickOptions, lineOptions } from "./defaultOptions";
import { computed, effect } from "@preact/signals-react";
import sortDailyLineData from "../../utilities/sort functions/sortDailyLineDate";
import sortWeeklyLineDate from "../../utilities/sort functions/sortWeeklyLineDate";


const ChartElement = () => {
  useSignals();

  let lineWeeklySeries;
  let lineDailySeries;

  const dailyValue = selectedHistory.value.length>0 || todayStock.value.slice(0, 7)
  console.log("dailyValue", dailyValue)

  const candleSeries = [{ data: sortCandleData(dailyValue).reverse() }];
  const lineSeries = timeframe.value === 1825 ? lineWeeklySeries : lineDailySeries;

  return (
    <div className="chart-element" id="apex">
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
