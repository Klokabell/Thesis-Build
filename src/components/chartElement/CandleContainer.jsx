import { TimeFrameButton } from "./TimeFrameButton";

export const CandleContainer = () => {
  return (
    <div className="times-btns">
      <TimeFrameButton limitDate={1}></TimeFrameButton>
      <TimeFrameButton limitDate={7}></TimeFrameButton>
      <TimeFrameButton limitDate={30}></TimeFrameButton>
    </div>
  );
};
