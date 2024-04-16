/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import {
  chartType,
  timeframe,
  selectedHistory,
} from "../../utilities/DataProvider";
import { useSignals } from "@preact/signals-react/runtime";
import sortCandleData from "./sortCandleData";
import { candlestickOptions, lineOptions } from "./options";
import { computed } from "@preact/signals-react";
import sortLineData from "./sortLineDate";

const ChartElement = () => {
  useSignals();

  const slicedArray = computed(() => {
    return selectedHistory.value.slice(0, timeframe.value);
  });

  if (!selectedHistory) return <div>Loading...</div>;

  const candleSeries = [{ data: sortCandleData(slicedArray.value)}]
  const lineSeries = sortLineData(slicedArray.value)

  return (
    <div className="chartBox" id="apex">
      {chartType.value === "candlestick" ? (
        <Chart
          options={candlestickOptions}
          series={candleSeries}
          type="candlestick"
        />
      ) : (
        <Chart
          options={lineOptions}
          series={lineSeries}
          type="line"
        />
      )}
    </div>
  );
};

export default ChartElement;