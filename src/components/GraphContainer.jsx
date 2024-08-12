import RadioContainer from "./RadioContainer";
import ChartElement from "./chartElement/ChartElement";
import { selectedStock } from "../DataProvider";

const GraphContainer = () => {
  return (
    <div className="graph-container mt-[3%] col-span-1 row-span-1 w-[40%]">
      <h2 className="company-title">{selectedStock.value.Company || " "}</h2>
      <RadioContainer />
      <ChartElement />
    </div>
  );
};

export default GraphContainer;
