/* eslint-disable react/prop-types */
import { LineContainer } from "./LineContainer";
import { CandleContainer } from "./CandleContainer";

export const RadioContainer = ({chartType, setChartType}) => {

  const chartHandler = (e) => {
    setChartType(e.target.value);
  };

  return (
    <div className="radio-container">
      <form>
        <div className="chart-radio">
          <label>
            <input
              type="radio"
              value={"candle"}
              name="chartType"
              checked={chartType === "candle"}
              onChange={chartHandler}
            />
            Candle
          </label>
          <label>
            <input
              type="radio"
              value={"line"}
              name="chartType"
              checked={chartType === "line"}
              onChange={chartHandler}
            />
            Line
          </label>
        </div>
      </form>
      {chartType === "candle" ? <CandleContainer /> : <LineContainer />}
    </div>
  );
};
