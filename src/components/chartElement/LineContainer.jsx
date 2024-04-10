import { TimeFrameButton } from "../TimeFrameButton";

export const LineContainer = () => {
  return (
    <div className="times-btns">
      <TimeFrameButton limitDate={7}></TimeFrameButton>
      <TimeFrameButton limitDate={30}></TimeFrameButton>
      <TimeFrameButton limitDate={365} year={1} ></TimeFrameButton>
      <TimeFrameButton limitDate={1825} year={5}></TimeFrameButton>
    </div>
  );
};
