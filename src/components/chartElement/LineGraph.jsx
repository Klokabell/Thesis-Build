/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useSignalEffect, useSignals } from "@preact/signals-react/runtime";
import Chart from "react-apexcharts";
import {
  selectedHistory,
  selectedStock,
  sliceValue,
} from "../../utilities/DataProvider";

const LineGraph = () => {
  useSignals();

  const chartLine = (values, name) => {
    const lineArray = values.map((stock) => {
      return stock[name];
    });
    return lineArray;
  };
  const slicedArray = selectedHistory.value.slice(0, sliceValue.value);

  const chartValues = [
    {
      name: "Open",
      data: chartLine(slicedArray, "Open"),
    },
    {
      name: "Close",
      data: chartLine(slicedArray, "Close"),
    },
    {
      name: "High",
      data: chartLine(slicedArray, "High"),
    },
    {
      name: "Low",
      data: chartLine(slicedArray, "Low"),
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454", "#d82c27", "#cced12"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: selectedStock.value,
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Date",
      },
    },
    yaxis: {
      title: {
        text: "Value($)",
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  if (!selectedStock) return <div>Loading...</div>;

  return (
    <div className="chartBox" id="apex">
      <div>
        <Chart options={options} series={chartValues} type="line" />
      </div>
    </div>
  );
};
export default LineGraph;
