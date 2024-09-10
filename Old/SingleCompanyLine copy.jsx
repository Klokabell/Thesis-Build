/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";
import { lineOptions } from "../src/components/chartElement/LineOptions";
import TimeFrameComponent from "../src/components/timeframe/composites/TimeFrameComponent"; 
import { selectedHistory } from "../src/DataProvider";
import sortLineDataSingle from "../src/utilities/sort functions/sortLineData";
import { useState, useEffect } from "react";
import { useSignal } from "@preact/signals-react";

const SingleCompanyLine = ({ className }) => {
  useSignal();

  const daysCount = [5, 10, 30, 90];

  const [range, setRange] = useState(daysCount[0]);
  const [series, setSeries] = useState([]);
  const [chartOptions, setChartOptions] = useState(lineOptions(true, range));

  const dataWithDates = async (range) => {
    return await sortLineDataSingle(
      selectedHistory.value.Daily.slice(0, range)
    );
  };

  useEffect(() => {
    const fetchAndSetSeries = async () => {
      const slicedSeries = await dataWithDates(range); //retrieve dates and values
      const datesArray = slicedSeries.shift().Dates; // separate dates object
      setSeries(slicedSeries);
      setChartOptions(lineOptions(true, range, datesArray));
    };
    if (selectedHistory.value.Daily) fetchAndSetSeries();
  }, [selectedHistory.value.Daily, range]);

  return selectedHistory.value?.Daily?.length > 0 ? (
    <div className={`chart-element_${className}  mt-[10%]`} id="apex">
      <TimeFrameComponent setValue={setRange} value={range} range={daysCount} />
      {series.length > 0 ? (
        <Chart options={chartOptions} series={series} type="line" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  ) : null;
};

export default SingleCompanyLine;
