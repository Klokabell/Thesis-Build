import lineLabelFormatters from "./helpers/lineLabelFormatters";

const lineOptions = (unit, period) => {
  const titleMetric = {
    Daily: "Day",
    Weekly: "Week",
    Monthly: "Month",
    Yearly: "Year",
  };

  const options = {
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
        colors: ["transparent"],
      },
    },
    xaxis: {
      type: "category",

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
      labels: {
        // show: unit < 90 ? true : false,
        formatter:
          period === "Daily"
            ? (value) => lineLabelFormatters(value, unit, period)
            : null,
        style: {
          colors: "#fafafa",
          fontSize: "10px",
        },
        rotate: -45,
        rotateAlways: true,
      },
    },
    yaxis: {
      title: {
        text: "Value ($)",
        style: {
          fontSize: "1rem",
          color: "#fafafa",
          fontWeight: 600,
        },
      },
      labels: {
        style: {
          colors: "#fafafa",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
      labels: {
        colors: "#fafafa",
      },
      markers: {
        colors: ["#37A644", "#77B6EA", "#d82c27", "#cced12"],
      },
    },
    title: {
      text: `Previous ${unit + " " + titleMetric[period] + "s"}`,
      style: {
        color: "#fafafa",
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  if (unit >= 60) {
    options.xaxis.tickAmount = unit / 6;
  }

  return options;
};

export default lineOptions;
