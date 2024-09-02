/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { selectedHistory } from "../../DataProvider";
import { selectedName } from "../../DataProvider";

/* const baseLineOptions = () => ({

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
        year: "yyyy",
        month: "MMM 'yy",
        day: "dd MMM",
        hour: "HH:mm",
      },
    },
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
  tooltip: {
    shared: false
  }
});


const multiCompFields = (variable) => ({
  title: {
    text: `Top ${variable} Companies`,
  },
  xaxis: {
    title: "Companies",
    type: "category",
    labels: {
      formatter: function (val) {
        return val;
      },
      style: {
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        fontWeight: 500,
        cssClass: "apexcharts-xaxis-label",
      },
      rotate: -45,
      rotateAlways: true,
      trim: true,
    },
    tooltip: {
      offsetX: -100,
    },
  },
}); */




const baseLineOptions = (variable, Dates) => ({

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
    background: "#FFF4E4",
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
    categories: Dates,
    title: {
      text: "Date",
    },
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
  title: {
    text: `${selectedName.value} Previous ${variable} Days`,
    style: {
      color: "#fafafa"
    }
  },
  tooltip: {
    onDatasetHover: {
      highlightDataSeries: true,
    },
    followCursor: true,
    theme: "dark"
  }

});


const lineOptions = (isSingleCompany, variable, Dates) => {
  return baseLineOptions(variable, Dates)
};

export { lineOptions };
