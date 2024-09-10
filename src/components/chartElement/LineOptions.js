/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { selectedHistory } from "../../DataProvider";
import { selectedName } from "../../DataProvider";


const titleMetric = {
  Daily: "Day",
  Weekly: "Week",
  Monthly: "Month",
  Yearly: "Year",
};

const baseLineOptions = (unit, datesArray, period) => ({

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
      show: true,
    },
    background: "#4b5563",
  },
  stroke: {
    curve: "smooth",
    colors: ["#77B6EA", "#37A644", "#cced12", "#d82c27"],
    width: 4,
  },
  grid: {
    position: "back",
    borderColor: "#e7e7e7",
    row: {
      colors: ["transparent"]
    },
  },
  xaxis: {
    type: "category",
    categories: datesArray,
    title: {
      text: titleMetric[period]!=="Day" ? `${titleMetric[period]} Spanning:` : "Date",
      style: {
        color: "#fafafa",
        fontSize: '16px',
        fontWeight: 500,
      }
    },
    labels: {
      style: {
        colors: "#fafafa",
      }
    },
  },
  yaxis: {
    title: {
      text: "Value ($)",
      style: {
        fontSize: "1rem",
        color: "#fafafa",
        fontWeight: 600
      }
    },
    labels: {
      style: {
        colors: "#fafafa"
      }
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: "#fafafa"      
    },
    markers: {
      colors: ["#37A644", "#77B6EA", "#d82c27", "#cced12"]
    }
  },
  title: {
    text:  `Previous ${unit>1 ? unit + " " + titleMetric[period] + "s" : titleMetric[period]}`,
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


const lineOptions = (unit, datesArray, period) => {
  return baseLineOptions(unit, datesArray, period)
};

export { lineOptions };
