/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { candlestickOptions } from "../../CandleOptions";
import TimeFrameComponent from "../../../timeframe/composites/TimeFrameComponent";
import {
  gameDate,
  selectedHistory,
  singleCandlePeriod,
  singleCandleUnit,
  todayStock,
} from "../../../../DataProvider";
import candleSeriesSetter from "../../series/candleSeriesSetter";

const SingleCompanyCandle = ({ className }) => {


  const period = singleCandlePeriod.value;
  const unit = singleCandleUnit.value;
  const selected = selectedHistory.value;
  
  const [chartOptions, setChartOptions] = useState(
    candlestickOptions(true, singleCandleUnit.value, singleCandlePeriod.value)
  );
  const [chartSeries, setChartSeries] = useState(
    candleSeriesSetter(selected, period, unit, gameDate.value)
  );    
  
  useEffect(() => {
    if (selectedHistory.value.length !== 0) {
      const newOptions = candlestickOptions(
        true,
        singleCandleUnit.value,
        singleCandlePeriod.value
      );
      
      const newSeries = candleSeriesSetter(selected, period, unit, gameDate.value);  // Ensure this creates a new object
      setChartSeries([...newSeries]); // Force a new reference for the series
      
      setChartOptions((prevOptions) => {
        // Ensure a new reference for the options
        return newOptions !== prevOptions ? { ...newOptions } : prevOptions;
      });
    }
  }, [selectedHistory.value, period, unit, gameDate.value, todayStock.value]);
  
  
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
        series={[{ data: chartSeries }]}
        type="candlestick"
      />
    </div>
  ) : null;
};

export default SingleCompanyCandle;
