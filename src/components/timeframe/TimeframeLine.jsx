import { TimeFrameButton } from "./TimeFrameButton";

const DayLineContainer = () => {
  return (
    <div className="line-btns flex flex-row">
      <TimeFrameButton limitDate={7} timeframe={"day"}></TimeFrameButton>
      <TimeFrameButton limitDate={30} timeframe={"day"}></TimeFrameButton>
      <TimeFrameButton limitDate={365} timeframe={"day"}></TimeFrameButton>
      <TimeFrameButton limitDate={1825} timeframe={"day"}></TimeFrameButton>
    </div>
  );
};

const MonthLineContainer = () => {
  return (
    <div className="line-btns flex flex-row">
      <TimeFrameButton limitDate={6} timeframe={"month"}></TimeFrameButton>
      <TimeFrameButton limitDate={12} timeframe={"month"}></TimeFrameButton>
      <TimeFrameButton limitDate={24} timeframe={"month"}></TimeFrameButton>X
      <TimeFrameButton limitDate={24} timeframe={"month"}></TimeFrameButton>X
    </div>
  );
};

export { DayLineContainer, MonthLineContainer };
