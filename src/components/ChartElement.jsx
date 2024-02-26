// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import fetchData from "../utilities/dataFetch";
// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";

const ChartElement = () => {
  const [chartData, setChartData] = useState([]);
  const dataURL = "http://localhost:3005/api/sampleData"

  useEffect(() => {
  
    fetchData(dataURL).then(res => setChartData(res));
  }, []);

  const options = {
    tooltip: {
      enabled: true,
    },
    series: [
      {
        name: "candle",
        data: chartData,
      },
    ],
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
        offsetX: -100
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#D0CFEC",
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#5AA329",
          downward: "#D91C48",
        },
      },
    },
  };

  return (
    <div className="chartBox" id="apex">
      {chartData.length > 0 ? (
        <Chart options={options} series={options.series} type="candlestick" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChartElement;
