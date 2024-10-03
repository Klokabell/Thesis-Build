/* eslint-disable no-unused-vars */
import { selectedHistory } from "../StateManager";
import TopCompaniesContainer from "../components/chartElement/TopCompaniesContainer";
import { todayStock, selectedItem } from "../StateManager";
import { useSignals } from "@preact/signals-react/runtime";
import DateController from "../components/date/DateController";
import SelectedChartContainer from "../components/chartElement/SelectedChartContainer";

export const Home = () => {
  if (!todayStock.value.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-component w-full">
      <div className="flex mt-[1%] ml-[2%]">
        <DateController />
      </div>

      <div className=" grid grid-cols-[1fr_1fr_1fr_0.5fr_1fr_1fr_1fr] grid-rows-1 px-10 pb-5">
        <div className="selectedName row-start-2 col-start-3 col-span-3 justify-self-center mt-[15%] pt-4 font-lato font-bold text-5xl text-zinc-100">
          {selectedItem.value.Company}
        </div>
        <TopCompaniesContainer className="topgraph col-start-2 col-span-5 justify-items-center mb-10" />
        {selectedHistory.value?.Daily?.length > 0 ? (
          <SelectedChartContainer
            chartType={"candlestick"}
            className="singlecandle row-start-3 col-start-1 col-span-3"
          />
        ) : (
          <div className="empty"></div>
        )}
        {selectedHistory.value?.Daily?.length > 0 ? (
          <SelectedChartContainer
            chartType={"line"}
            className="singleline row-start-3 col-start-5 col-span-3"
          />
        ) : (
          <div className="empty"></div>
        )}
      </div>
    </div>
  );
};
