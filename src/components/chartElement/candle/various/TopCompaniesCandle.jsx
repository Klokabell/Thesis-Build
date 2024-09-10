/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import { candlestickOptions } from "../../CandleOptions";
import TimeFrameComponent from "../../../timeframe/composites/TimeFrameComponent";
import sortCandleData from "../../../../utilities/sort functions/sortCandleData";
import { useState, useEffect } from "react";
import { selectedMetric, todayStock } from "../../../../DataProvider";

const TopCompaniesCandle = () => {
  const companyCount = [5, 10, 20, 50, 100];

  const [compNum, setCompNum] = useState(companyCount[0]);
  const [series, setSeries] = useState();
  const [timeframe, setTimeframe] = useState(1)
  const [chartOptions, setChartOptions] = useState(
    candlestickOptions(false, series)
  );

  const multiSeries = async (sliceValue) => {
    return [
      { data: await sortCandleData("multiDaily", todayStock.value, sliceValue) },
    ];
  };

  useEffect(() => {
    const fetchAndSetSeries = async () => {
      const slicedSeries = await multiSeries(compNum);
      setSeries(slicedSeries);
    };
    fetchAndSetSeries();
  }, [compNum]);

  useEffect(() => {
    setChartOptions(candlestickOptions(false, compNum));
  }, [compNum]);

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
