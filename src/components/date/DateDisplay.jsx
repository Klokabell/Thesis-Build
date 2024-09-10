/* eslint-disable react/prop-types */
import { dateFormatter } from "../../utilities/dateTools";
const DateDisplay = ({ dateValue }) => {
  
  const displayDate = dateFormatter(new Date(dateValue));

  return (
    <div className="date-display font-lato font-bold text-lg text-zinc-100">
      Simulation Date: {displayDate}
    </div>
  );
};

export default DateDisplay;
