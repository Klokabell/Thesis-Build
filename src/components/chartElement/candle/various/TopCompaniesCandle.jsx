/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import { candlestickOptions } from "../../CandleOptions";
import TimeFrameComponent from "../../../timeframe/composites/TimeFrameComponent";
import sortCandleData from "../../../../utilities/sort functions/sortCandleData";
import { useState, useEffect } from "react";
import { gameDate, selectedMetric, todayStock } from "../../../../DataProvider";
import { computed, useSignal } from "@preact/signals-react";

const TopCompaniesCandle = () => {

  const [series, setSeries] = useState(
    todayStock.value.sort((a, b) => a.Close - b.Close).slice(0, 5)
  );
  const [timeframe, setTimeframe] = useState(1);
  const [chartOptions, setChartOptions] = useState(
    candlestickOptions(false, series)
  );

  const topStocks = computed(() =>
    todayStock.value.sort((a, b) => a.Close - b.Close).slice(0, 5)
  );

  useEffect(() => {
    const seriesSetter = async () => {
      const formattedSeries = [
        { data: await sortCandleData("multiDaily", topStocks.value) },
      ];
      setSeries(formattedSeries);
    };
    seriesSetter();
  }, [gameDate.value]);

  useEffect(() => {
    setChartOptions(candlestickOptions(false, 5));
  }, [gameDate.value]);

  return (
    <div className="chart-element-top w-[60%] m-auto" id="apex">
      {series ? (
        <Chart options={chartOptions} series={series} type="candlestick" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TopCompaniesCandle;
