

const candlestickOptions = (unit, period) => {
  const titleMetric = {
    Daily: "Day",
    Weekly: "Week",
    Monthly: "Month",
    Yearly: "Year",
  };
  
  const baseCandleOptions = {
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
        </div>`;
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
        show: unit <= 30 ? true : false,
        rotate: -45,
        trim: true,
        style: {
          colors: "#fafafa",
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

  return {
    ...baseCandleOptions,
    ...singleCompFields(unit, period),
  };
};

export default candlestickOptions