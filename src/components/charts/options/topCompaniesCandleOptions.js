import { format } from "date-fns";

const topCompanyCandleOptions = (unit, currentDate) => {
  const date = format(new Date(currentDate), "d/M/yyyy");

  return {
    tooltip: {
      enabled: true,
      shared: false,
      intersect: unit <= 10 ? true : false,
      followCursor: unit <= 10 ? false : true,
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        const open = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
        const high = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
        const low = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
        const close = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
        const color = close > open ? "#08605F" : "#931621"; // Green if up, Red if down

        return `<div class="apexcharts-tooltip-box" style="border-color: ${color}; border-width: 4px; padding: 8px; border-radius: 4px;">
          <div class="apexcharts-tooltip-box">
            <span><strong>Open:</strong> $${open.toFixed(2)}</span><br>
            <span><strong>High:</strong> $${high.toFixed(2)}</span><br>
            <span><strong>Low:</strong> $${low.toFixed(2)}</span><br>
            <span><strong>Close:</strong> $${close.toFixed(2)}</span>
          </div>
        `;
      },
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
    xaxis: {
      trim: true,
      title: "Companies",
      type: "category",
      labels: {
        show: unit <= 10 ? true : false,
        rotate: -45,
        rotateAlways: true,
        trim: true,
        style: {
          colors: "#fafafa",
          showDuplicates: true,
          fontSize: "14px",
          fontWeight: 500,
          cssClass: "apexcharts-xaxis-label",
        },
      },
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
    title: {
      text: `${date} Top ${unit} Companies `,
      style: {
        color: "#fafafa",
        fontSize: "18px",
        fontWeight: 600,
      },
    },
  };
};

export default topCompanyCandleOptions;
