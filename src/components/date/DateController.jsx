import SetDateButton from "./SetDateButton";
import DateDisplay from "./DateDisplay";
import { currentDateObj, selectedItem } from "../../StateManager";
import updateDateValues from "./updateDateValues";
import updateManager from "./updateManager";
import { useSignals } from "@preact/signals-react/runtime";


const DateController = () => {
  useSignals()
  let { date } = currentDateObj.value;

  const addDay = async () => {
    currentDateObj.value = updateDateValues(currentDateObj.value.date);
    date = currentDateObj.value.date;
    sessionStorage.setItem("date", JSON.stringify(date));

    if(selectedItem.value.Company) await updateManager(currentDateObj.value)
  };

  return (
    <div>
      <SetDateButton addDay={addDay} />
      <DateDisplay dateValue={date} />
    </div>
  );
};

export default DateController;
