/* eslint-disable react/prop-types */
import { LineContainer } from "./LineContainer";
import { CandleContainer } from "./CandleContainer";
import { chartType } from "../../DataProvider";
import { useSignals } from "@preact/signals-react/runtime";

const RadioContainer = () => {
  useSignals();
  const chartHandler = (e) => {
    chartType.value = e.target.value;
  };

  return (
    <div className="radio-container">
      <form>
        <div className="chart-radio">
          <label>
            <input
              type="radio"
              value={"candlestick"}
              name="chartType"
              checked={chartType.value === "candlestick"}
              onChange={chartHandler}
            />
            Candle
          </label>
          <label>
            <input
              type="radio"
              value={"line"}
              name="chartType"
              checked={chartType.value === "line"}
              onChange={chartHandler}
            />
            Line
          </label>
        </div>
      </form>
      {chartType.value === "candlestick" ? (
        <CandleContainer />
      ) : (
        <LineContainer />
      )}
    </div>
  );
};

export default RadioContainer;
