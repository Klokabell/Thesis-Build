/* eslint-disable react/prop-types */
import { timeCount } from "../../utilities/dateTools";
import { useState, useEffect } from "react";
import PeriodDropdown from "./dropdown components/PeriodDropdown";
import UnitDropdown from "./dropdown components/UnitDropdown";

const TimeFrameContainer = ({
  period,
  unit,
  chartType,
  setPeriod,
  setUnit,
}) => {
  const [menuArray, setMenuArray] = useState(timeCount[chartType]["Daily"]);

  useEffect(() => {
    const unitArray = timeCount[chartType][period] || [];
    setMenuArray(unitArray);
    if (!unitArray.includes(unit) && unitArray.length > 0) {
      setUnit(unitArray[0]);
    }
  }, [period, chartType]);

  const onChangeHandler = (e, setter, dropType) => {
    const value = e.target.value;
    if (dropType === "period") {
      setter(value);
      const unitArray = timeCount[chartType][period];
      if (!unitArray.includes(unit) && unitArray.length > 0) {
        setUnit(unitArray[0]);
      }
    } else setter(value);
  };

  return (
    <div className="timeframe-container display: flex gap-1">
      <PeriodDropdown
        onChangeHandler={(e) => onChangeHandler(e, setPeriod, "period")}
        period={period}
        type={chartType}
      />
      <UnitDropdown
        onChangeHandler={(e) => onChangeHandler(e, setUnit, "unit")}
        unit={unit}
        menuArray={menuArray}
        period={period}
      />
    </div>
  );
};

export default TimeFrameContainer;
