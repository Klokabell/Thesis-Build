/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useSignalEffect, useSignals } from "@preact/signals-react/runtime";
import Chart from "react-apexcharts";
import dayjs from "dayjs";
import { selectedStock, selectedHistory, chartArray, sliceValue } from "../utilities/DataProvider";

const ChartElement = () => {
  useSignals();

  const chartValues = (stocksArray) => {
    return stocksArray.map((item) => ({
      x: new Date(item.Date),
      y: [item.Open, item.High, item.Low, item.Close],
    }));
  };

  const options = {
    tooltip: {
      enabled: true,
    },
    chart: {
      dropShadow: {
        enabled: true,
        top: 2,
        left: 5,
        blur: 3,
        opacity: 0.2,
      },
      type: "candlestick",
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val) {
          return dayjs(val).format("DD/MM/YY H:mm");
        },
        style: {
          colors: "#D0CFEC",
        },
      },
      tooltip: {
        offsetX: -100,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#D0CFEC",
        },
      },
    },
    title: { text: selectedStock.value},
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#5AA329",
          downward: "#D91C48",
        },
      },
    },
  };

  
  const series = [{ data: chartArray.value}]


  useSignalEffect(() => {
    chartArray.value = chartValues(selectedHistory.value.slice(0, sliceValue.value));
    console.log("selectedHistory.value", selectedHistory.value)
  });

  if (!selectedStock) return <div>Loading...</div>;




  return (
    <div className="chartBox" id="apex">
      <div>
        <Chart options={options} series={series} type="candlestick" />
      </div>
    </div>
  );
};

export default ChartElement;
