/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Chart from "react-apexcharts";
import {
  candlestickOptions,
  lineOptions,
} from "../src/components/chartElement/defaultOptions";
import SetTimeFrame from "../src/components/timeframeset/DropDownComponent";
import setCandleSeries from "../src/components/chartElement/setCandleSeries";
import { useState, useEffect } from "react";

const SingleCompanyCandle = () => {
  const [time, setTime] = useState(1);
  const [series, setSeries] = useState();

  useEffect(() => {
    const fetchAndSetSeries = async () => {
      const slicedSeries = await setCandleSeries(time);
      setSeries(slicedSeries);
    };
    fetchAndSetSeries();
  }, [time]);

  return (
    <div className="chart-element" id="apex">
      <SetTimeFrame setTime={setTime} time={time} />
      {series ? (
        <Chart
          options={candlestickOptions("Sort Title")}
          series={series}
          type="candlestick"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default SingleCompanyCandle;
