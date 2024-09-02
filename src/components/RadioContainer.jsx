/* eslint-disable react/prop-types */
import { DayLineContainer } from "./timeframeset/TimeframeLine";
import { CandleContainer } from "./timeframeset/TimeframeCandle";
import { chartType } from "../DataProvider";
import { useSignals } from "@preact/signals-react/runtime";

const RadioContainer = () => {
  useSignals();
  const onChangeHandler = (e) => {
    chartType.value = e.target.value;
  };

  return (
    <div className="radio-container flex flex-row justify-between">
      <form>
        <div className="chart-radio">
          <label>
            <input
              type="radio"
              value={"candlestick"}
              name="chartType"
              checked={chartType.value === "candlestick"}
              onChange={onChangeHandler}
            />
            Candle
          </label>
          <label>
            <input
              type="radio"
              value={"line"}
              name="chartType"
              checked={chartType.value === "line"}
              onChange={onChangeHandler}
            />
            Line
          </label>
        </div>
      </form>
      {chartType.value === "candlestick" ? (
        <CandleContainer />
      ) : (
        <DayLineContainer />
      )}
    </div>
  );
};

export default RadioContainer;
