import { selectedHistory, selectedMetric } from "../../DataProvider";

const metricSwitch = (unit) => {
  switch (unit) {
    case "Day":
      selectedMetric.value = selectedHistory.value.Daily;
      break;
    case "Week":
      selectedMetric.value = selectedHistory.value.Weekly
      console.log("selectedMetric.value", selectedMetric.value)
      break;
    case "Month":
      selectedMetric.value = selectedHistory.value.Monthly
      console.log("selectedMetric.value", selectedMetric.value)
      break;
    case "Year":
      selectedMetric.value = selectedHistory.value.Yearly
      console.log("selectedMetric.value", selectedMetric.value)
      break;
    default:
  }
};

export default metricSwitch;
