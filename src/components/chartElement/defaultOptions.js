/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { todayStock } from "../../DataProvider";

const lineOptions = () => ({
  tooltip : {
    enabled: false
  },
  chart: {
    height: "auto",
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
    enabled: true,
  },
  stroke: {
    curve: "smooth",
    colors: ["#77B6EA", "#545454", "#d82c27", "#cced12"],
    width: 2,
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    type: "datetime",
    categories: [],
    title: {
      text: "Date",
    },
    labels: {
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM \'yy',
        day: 'dd MMM',
        hour: 'HH:mm'
      }
    }
  },
  yaxis: {
    title: {
      text: "Value($)",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
});

const candlestickOptions = () => ({
  tooltip: {
    enabled: true,
  },
  chart: {
    height: "auto",
    dropShadow: {
      enabled: true,
      top: 2,
      left: 5,
      blur: 3,
      opacity: 0.2,
    },
    type: "candlestick",
  },
  dataLabels: {
    enabled: false,
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
  title: { text: "" },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#5AA329",
        downward: "#D91C48",
      },
    },
  },
});

export { candlestickOptions, lineOptions };
