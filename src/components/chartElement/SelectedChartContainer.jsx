/* eslint-disable react/prop-types */
import SelectedChartComponent from "./SelectedChartComponent";
import TimeFrameContainer from "../timeframe/TimeFrameContainer";
import { useState } from "react";
import { computed } from "@preact/signals-react";
import { selectedHistory } from "../../StateManager";
import formatSelectedCandleSeries from "./series/formatSelectedSeriesObject";
import formatSelectedLineSeries from "./series/formatSelectedLineSeries";

const SelectedChartContainer = ({ chartType, className }) => {
  const selectedCandleObject = computed(() =>
    formatSelectedCandleSeries(selectedHistory.value)
  );
  const selectedLineObject = computed(() =>
    formatSelectedLineSeries(selectedHistory.value)
  );
  const [period, setPeriod] = useState("Daily");
  const [unit, setUnit] = useState(chartType === "candlestick" ? 5 : 10);
  const chartObject =
    chartType === "candlestick"
      ? selectedCandleObject.value
      : selectedLineObject.value;

  return (
    <div
      className={`chart-element_${className} mt-[5%] mb-[10%] ml-[5%]`}
      id="apex"
    >
      <TimeFrameContainer
        period={period}
        setPeriod={setPeriod}
        setUnit={setUnit}
        unit={unit}
        chartType={chartType}
      />
      <SelectedChartComponent
        unit={unit}
        period={period}
        chartType={chartType}
        chartObject={chartObject}
      />
    </div>
  );
};

export default SelectedChartContainer;
