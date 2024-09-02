/* eslint-disable no-unused-vars */
import dayjs from "dayjs";
import { selectedName, selectedMetric } from "../../DataProvider";

const labelFormat = {
  Date: "DD/MMM/YY",
  Week: "WW",
  Month: "MMM",
  Year: "YYYY"
}

const titleMetric = {
  Daily: "Days",
  Weekly: "Weeks",
  Monthly: "Months",
  Yearly: "Years"
}



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
        value: "0.5"
      }
    }
  }
};

const multiCompFields = (unit, period) => ({
  title: {
    text: `Top ${unit} Companies`,
    style: {
      color: "#fafafa"
    }
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
        cssClass: "apexcharts-xaxis-label",
      },
      rotate: -45,
      rotateAlways: true,
      trim: true,
    }
  },
});

const singleCompFields = (unit, period) => ({
  title: {
    text: `Previous ${unit} ${titleMetric[selectedMetric.value]}`,
    style: {
      color: "#fafafa"
    }
  },
  xaxis: {
    title: "Companies",
    type: "category",
    labels: {
      show: unit>=30 ? false : true,
      
      formatter: function (val) {
        return period=="Daily" ? dayjs(val).format(labelFormat[period])
        : val
      },
      style: {
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        fontWeight: 500,
        cssClass: "apexcharts-xaxis-label",
      },
    },
    tooltip: {
      enabled: unit>20 ? true : false
    }
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
