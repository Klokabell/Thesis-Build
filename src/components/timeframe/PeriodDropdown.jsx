/* eslint-disable react/prop-types */
import { useSignal } from "@preact/signals-react";

// eslint-disable-next-line react/prop-types
const PeriodDropdown = ({periodSignal, onChangeHandler, isLine}) => {
  useSignal(periodSignal)

  return (
    <div className="relative text-gray-800">
      <select 
        className="appearance-none w-full h-full px-2
        text-[#fafafa] font-semibold 
        bg-[#4b5563]
        border-r-2 border-t-2  border-transparent rounded-none
        hover:border-[#1f2937]
        focus:outline-none focus:border-slate-800 focus:bg-[#373f49]
        active:border-transparent"
        value={periodSignal.value} onChange={(e) => onChangeHandler(e, periodSignal)}>
        <option value={"Daily"}>Day</option>
        <option value={"Weekly"}>Week</option>
        <option value={"Monthly"}>Month</option>
        { isLine ? <option value={"Yearly"}>Year</option> : null}
      </select>
    </div>
  );
}

export default PeriodDropdown