/* eslint-disable react/prop-types */
const UnitDropdown = ({ unitSignal, menuArray=[], onChangeHandler, periodSignal }) => {
  const period = periodSignal.value

  const timeObj = {
    Daily: "day",
    Weekly: "week",
    Monthly: "month",
    Yearly: "year",
  };
  
  const unitOptions = menuArray.map((item, index) => <option value={item} key={index}>{`${item} ${timeObj[period]}(s)`}</option>)

  return (
    <div className="relative text-gray-800 bg-[#4b5563]">
      <select         
      className="appearance-none w-full h-full px-2
        text-[#fafafa] font-semibold 
        bg-[#4b5563]
        border-r-2 border-t-2  border-transparent rounded-none
        hover:border-slate-800
        focus:outline-none focus:border-slate-800 focus:bg-[#373f49]
        active:border-transparent" value={unitSignal.value} onChange={(e) => onChangeHandler(e, unitSignal)}>
        {unitOptions}
      </select>
    </div>
  );
};

export default UnitDropdown;