/* eslint-disable react/prop-types */
// import { dateObject } from "../../../DataProvider";
import { useState, useEffect } from "react";
import PeriodDropdown from "../PeriodDropdown";
import UnitDropdown from "../UnitDropdown";



const TimeFrameComponent = ({ periodSignal, unitSignal }) => {

  const timeCount = {
    Daily: [5, 10, 30, 90],
    Weekly: [...Array(12).keys()].map((i) => i + 1),
    Monthly: [...Array(12).keys()].map((i) => i + 1),
    Yearly: [1, 2, 3, 4, 5],
  };
  
  const [menuArray, setMenuArray] = useState(timeCount["Daily"]);

  useEffect(() => {
    if (timeCount[periodSignal.value]) {
      setMenuArray(timeCount[periodSignal.value]);
    } else {
      setMenuArray([]);
    }
  }, [periodSignal.value]);

  const onChangeHandler = (e, signal) => {
    signal.value = e.target.value;
    console.log(`signal.value: ${signal.value}`)
  };

  return (
    <div className="timeframe-container">
      <PeriodDropdown
        onChangeHandler={onChangeHandler}
        periodSignal={periodSignal}
      />
      <UnitDropdown
        onChangeHandler={onChangeHandler}
        unitSignal={unitSignal}
        menuArray={menuArray}
      />
    </div>
  );
};

export default TimeFrameComponent;
