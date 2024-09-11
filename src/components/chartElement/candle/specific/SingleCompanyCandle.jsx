/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useComputed } from "@preact/signals-react";
import Chart from "react-apexcharts";
import { candlestickOptions } from "../../CandleOptions";
import TimeFrameComponent from "../../../timeframe/composites/TimeFrameComponent";
import {
  gameDate,
  selectedHistory,
  singleCandlePeriod,
  singleCandleUnit,
} from "../../../../DataProvider";
import sortCandleData from "../../../../utilities/sort functions/sortCandleData";
import { limitSeries } from "../../../../utilities/dateTools";
import seriesSelector from "../../../../utilities/sort functions/seriesSelector";

const SingleCompanyCandle = ({ className }) => {
  const [chartOptions, setChartOptions] = useState(
    candlestickOptions(true, singleCandleUnit.value, singleCandlePeriod.value)
  );

  const chartSeries = useComputed(() => {
    const period = singleCandlePeriod.value;
    const unit = singleCandleUnit.value;
    const selected = selectedHistory.value;

    return period === "Daily"
      ? sortCandleData(
          "singleDaily",
          limitSeries(selected.Daily, period, unit, gameDate.value)
        )
      : period === "Yearly"
      ? sortCandleData(
          "singleYearly",
          selected[period].slice(0, unit),
          period,
          unit
        )
      : sortCandleData("singleOther", selected[period].slice(0, unit), period);
  });

  useEffect(() => {
    if (selectedHistory.value.length !== 0) {
      const newOptions = candlestickOptions(
        true,
        singleCandleUnit.value,
        singleCandlePeriod.value
      );
      setChartOptions((prevOptions) => {
        return newOptions !== prevOptions ? newOptions : prevOptions;
      });
    }
  }, [selectedHistory.value, singleCandleUnit.value, singleCandlePeriod.value]);

  return selectedHistory.value?.Daily?.length > 0 ? (
    <div
      className={`chart-element_${className} mt-[5%] mb-[10%] ml-[5%]`}
      id="apex"
    >
      <TimeFrameComponent
        unitSignal={singleCandleUnit}
        periodSignal={singleCandlePeriod}
        isLine={false}
      />
      <Chart
        options={chartOptions}
        series={[{ data: chartSeries.value }]}
        type="candlestick"
      />
    </div>
  ) : null;
};

export default SingleCompanyCandle;
