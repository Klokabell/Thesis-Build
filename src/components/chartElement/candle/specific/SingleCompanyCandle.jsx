/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { signal, useSignal } from "@preact/signals-react";
import Chart from "react-apexcharts";
import { candlestickOptions } from "../../CandleOptions";
import TimeFrameComponent from "../../../timeframe/composites/TimeFrameComponent";
import { selectedHistory } from "../../../../DataProvider";
import { singleCandleDaily, singleCandleOther } from "../../../../utilities/sort functions/sortCandleData";

export const singleCandlePeriod = signal("Daily")
export const singleCandleUnit = signal(5)

const SingleCompanyCandle = ({ className }) => {
  useSignal();

  const [series, setSeries] = useState([])
  const [chartOptions, setChartOptions] = useState(candlestickOptions(true, singleCandleUnit.value, singleCandlePeriod.value))



  const singleSeries = async (period, unit) => {
    console.log("selectedHistory.value[period][0].Averages", selectedHistory.value[period].slice(0, unit))
    const formattedData = (period == "Daily") ? [{
      data: await singleCandleDaily(selectedHistory.value[period].slice(0, unit))
    }]
    : 
    [{
      data: await singleCandleOther(selectedHistory.value[period][0].Averages.slice(0, unit), period)
    }]
    /* console.log("formattedData.slice(unit)", formattedData.slice(unit) */
    return formattedData
  };

  useEffect(() => {
    const assignChartInput = async (period, unit) => {
      console.log(`period: ${period}, unit: ${unit}`)
      console.log("slicedSeries", await singleSeries(period, unit))
      setSeries(await singleSeries(period, unit));
      setChartOptions(candlestickOptions(true, unit, period))
    }
    if (selectedHistory.value.Daily){
      console.log("unit", singleCandleUnit.value)
      assignChartInput(singleCandlePeriod.value, singleCandleUnit.value)
    } 
      
  }, [selectedHistory.value, singleCandlePeriod, singleCandleUnit])

  

  return selectedHistory.value?.Daily?.length > 0 ? (
    <div className={`chart-element_${className} mt-[10%]`} id="apex">
      <TimeFrameComponent unitSignal={singleCandleUnit} periodSignal={singleCandlePeriod}/>
      <Chart options={chartOptions} series={series} type="candlestick" />
    </div>
  ) : null;
};

export default SingleCompanyCandle;

