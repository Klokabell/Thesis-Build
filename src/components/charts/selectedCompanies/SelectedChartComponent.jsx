/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";
import { useSignals } from "@preact/signals-react/runtime";
import sliceByUnit from "../../../utilities/sort functions/selected company data/sliceByUnit";
import optionsSetter from "../options/helpers/optionsSetter";

const SelectedChartComponent = ({ chartType, period, unit, chartObject }) => {
  useSignals();
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const slicedSeries = sliceByUnit(chartObject[period], unit);
    setSeries([{ data: slicedSeries }]);
    setOptions(optionsSetter(chartType, period, unit));
  }, [period, unit, chartObject, chartType]);

  return <Chart series={series} options={options} type={chartType} />;
};

export default SelectedChartComponent;
