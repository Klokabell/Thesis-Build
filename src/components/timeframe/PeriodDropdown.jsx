/* eslint-disable react/prop-types */
import { useSignal } from "@preact/signals-react";

// eslint-disable-next-line react/prop-types
const PeriodDropdown = ({periodSignal, onChangeHandler}) => {
  useSignal(periodSignal)

  return (
    <div>
      <select value={periodSignal.value} onChange={(e) => onChangeHandler(e, periodSignal)}>
        <option value={"Daily"}>Day</option>
        <option value={"Weekly"}>Week</option>
        <option value={"Monthly"}>Month</option>
        <option value={"Yearly"}>Year</option>
      </select>
    </div>
  );
}

export default PeriodDropdown