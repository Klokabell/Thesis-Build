import RadioContainer from "./RadioContainer";
import ChartElement from "./ChartElement";
import { todayStock, chartType } from "../../utilities/DataProvider";


const GraphContainer = () => {


    console.log("GraphContainer chartType", chartType.value, typeof chartType.value)
    console.log("todayStock", todayStock.value)

  return (
        <div className="ChartElement-container">
          <RadioContainer />
          <ChartElement  />
        </div>
  )
}

export default GraphContainer