import {date} from "../../DataProvider";
import { addDays } from "date-fns";

const SetDateButton = () => {
  
  const advanceTime = async () => {
    date.value = addDays(new Date(date.value), 1);
    sessionStorage.setItem("date", JSON.stringify(new Date(date.value)));
  };
  

  return (
    <button
      className="inline-block rounded border-2 border-[#fafafa] 
        px-6 pb-[6px] pt-2 
        text-xs font-medium uppercase leading-normal text-[#fafafa] 
        transition-all duration-150 ease-in-out 
        hover:border-primary-accent-300 hover:bg-heading-back hover:text-primary-accent-300 
        active:scale-95 
        focus:outline-none"
      onClick={advanceTime}
    >
      Next Day
    </button>
  );
};

export default SetDateButton;
