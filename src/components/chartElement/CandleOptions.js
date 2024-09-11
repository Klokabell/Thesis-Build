/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { selectedName, selectedMetric } from "../../DataProvider";
import { singleCandlePeriod } from "../../DataProvider";
import { periodSpan } from "../../utilities/dateTools";

const labelFormat = {
  Date: "DD/MMM/YY",
  week: "W",
  month: "MMM",
  year: "YYYY",
};

const titleMetric = {
  Daily: "Day",
  Weekly: "Week",
  Monthly: "Month",
  Yearly: "Year",
};

const baseCandleOptions = {
  tooltip: {
    enabled: true,
    onDatasetHover: {
      highlightDataSeries: true,
    },
    followCursor: true,
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
    background: "#4b5563",
    type: "candlestick",
    animations: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
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
  states: {
    active: {
      allowMultipleDataPointsSelection: true,
      filter: {
        type: "darken",
        value: "0.5",
      },
    },
  },
};

const multiCompFields = (unit, period) => ({
  title: {
    text: `Today's Top ${unit} Companies`,
    style: {
      color: "#fafafa",
    },
  },
  xaxis: {
    title: "Companies",
    type: "category",
    labels: {
      formatter: function (val) {
        dayjs(val).format(labelFormat[period]);
        return val;
      },
      style: {
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        fontWeight: 500,
        colors: "#fafafa",
        cssClass: "apexcharts-xaxis-label",
      },
      rotate: -45,
      rotateAlways: true,
      trim: true,
    },
  },
});

const singleCompFields = (unit, period) => ({
  title: {
    text: `Previous ${
      unit > 1 ? unit + " " + titleMetric[period] + "s" : titleMetric[period]
    }`,
    style: {
      color: "#fafafa",
      fontWeight: 500,
    },
  },
  xaxis: {
    title: {
      text:
        titleMetric[period] !== "Day"
          ? `${titleMetric[period]} Starting:`
          : "Date",
      style: {
        color: "#fafafa",
        fontSize: "16px",
        fontWeight: 500,
      },
    },
    type: "category",
    labels: {
      style: {
        colors: "#fafafa",
        rotate: -45,
        trim: true,
        showDuplicates: true,
        fontSize: "12px",
        fontWeight: 500,
        cssClass: "apexcharts-xaxis-label",
      },
    },
    tooltip: {
      enabled: unit > 20 ? true : false,
    },
  },
});

const candlestickOptions = (isSingleCompany, unit, period) => {
  return {
    ...baseCandleOptions,
    ...(!isSingleCompany
      ? multiCompFields(unit, period)
      : singleCompFields(unit, period)),
  };
};

export { candlestickOptions };
