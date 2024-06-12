import { TimeFrameButton } from "./TimeFrameButton";

export const LineContainer = () => {
  return (
    <div className="times-btns">
      <TimeFrameButton limitDate={7}></TimeFrameButton>
      <TimeFrameButton limitDate={30}></TimeFrameButton>
      <TimeFrameButton limitDate={365}></TimeFrameButton>
      <TimeFrameButton limitDate={1825}></TimeFrameButton>
    </div>
  );
};
