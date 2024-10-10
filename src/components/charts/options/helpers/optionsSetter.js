import lineOptions from "../lineOptions";
import candlestickOptions from "../candlestickOptions";

const optionsSetter = (type, period, unit) => {
  return type === "candlestick"
    ? candlestickOptions(unit, period)
    : lineOptions(unit, period);
};

export default optionsSetter;
