// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import ApexChart from "apexcharts";
// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";

const ChartElement = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/sampleData");

        if (!response.ok) {
          throw new Error(`HTTP ERROR: Status: ${response.status}`);
        }

        const resData = await response.json();
        setChartData(resData);
      } catch (error) {
        console.error("Error fetching the data - ", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    tooltip: {
        enabled: false
    },
    series: [
      {
        name: "candle",
        data: chartData,
      },
    ],
    chart: {
      height: 350,
      type: "candlestick",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val) {
          return dayjs(val).format("DD/MM/YY H:mm");
        },
      },
      annotations: {
        xaxis: [
          {
            x: 'Oct 06',
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              orientation: 'horizontal',
              text: 'X Annotation'
            }
          }
        ]
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tooltip: {
        enabled: false,
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
