/* eslint-disable react/prop-types */
import { dateFormatter } from "../../utilities/dateTools";
const DateDisplay = ({dateValue}) => {

  const displayDate = dateFormatter(dateValue);
  return (
    <div className="date-display font-lato font-bold text-lg text-zinc-100">
      {displayDate}
    </div>
  );
};

export default DateDisplay;
