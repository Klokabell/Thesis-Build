/* eslint-disable react/prop-types */
import { useSignal } from "@preact/signals-react";
import { selectedMetric } from "../../DataProvider";
// import metricSwitch from "./metricSwitch";


const MetricDropdown = () => {
    useSignal()

  const onChangeHandler = (e) => {
    selectedMetric.set(e.target.value);
  };

  return (
    <div>
      <select value={selectedMetric.value} onChange={onChangeHandler}>
        <option value={"Daily"}>Day</option>
        <option value={"Weekly"}>Week</option>
        <option value={"Monthly"}>Month</option>
        <option value={"Yearly"}>Year</option>
      </select>
    </div>
  );
};

export default MetricDropdown