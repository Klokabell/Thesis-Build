/* eslint-disable react/prop-types */
import Chart from "react-apexcharts"
import { useSignal, effect } from "@preact/signals-react"
import { gameDate } from "../../DataProvider"

const ChartElement = ({ series, options, type }) => {
  useSignal()
  
  effect(() => gameDate.value)

  return (
    <Chart series={series} options={options} type={type}/>
  )
}

export default ChartElement