import { selectedHistory, selectedMetric } from "../../DataProvider";

const metricSwitch = (unit) => {
  switch (unit) {
    case "Day":
      selectedMetric.value = selectedHistory.value.Daily;
      break;
    case "Week":
      selectedMetric.value = selectedHistory.value.Weekly
      break;
    case "Month":
      selectedMetric.value = selectedHistory.value.Monthly
      break;
    case "Year":
      selectedMetric.value = selectedHistory.value.Yearly
      break;
    default:
  }
};

export default metricSwitch;
