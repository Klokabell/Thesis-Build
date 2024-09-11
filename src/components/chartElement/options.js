/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { selectedStock } from "../../DataProvider"

const lineOptions = {
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
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ['#77B6EA', '#545454', '#d82c27', '#cced12'],
    width: 2
  },
  title: {
    text: selectedStock.value ? selectedStock.value : "",
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
    categories: [],
    type: 'category',
    labels: {
      formatter: function (val) {
        return dayjs(val).format("DD/MM/YY");
      }
    },
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
  }
};

const candlestickOptions = {
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
        return dayjs(val).format("DD/MM/YY");
        return dayjs(val).format("DD/MM/YY");
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
  title: { text: selectedStock.value ? selectedStock.value : "Todays Top Stocks" },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#5AA329",
        downward: "#D91C48",
      },
    },
  },
};

export { candlestickOptions, lineOptions };