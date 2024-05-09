import { useSignals } from "@preact/signals-react/runtime";
import { date } from "../../utilities/DataProvider";

const SetDateButton = () => {
  useSignals();


  const dayPlus = () => {
    let tmrw = new Date(date);
    console.log("the date is,", tmrw)
    date.value = new Date(tmrw.setDate(date.value.getDate() + 1))
  };

  return (
    <button className="time-btn" onClick={dayPlus}>
      Next Day
    </button>
  );
};

export default SetDateButton;
