/* eslint-disable no-unused-vars */
import { selectedHistory } from "../StateManager";
import TopCompaniesContainer from "../components/charts/topCompanies/TopCompaniesContainer";
import { todayStock, selectedItem } from "../StateManager";
import DateController from "../components/date/DateController";
import SelectedChartContainer from "../components/charts/selectedCompanies/SelectedChartContainer";

export const Home = () => {

  const hasSelected = selectedHistory.value?.Daily && selectedHistory.value.Daily.length > 0
  const hasToday = todayStock.value && todayStock.value.length > 0


  return (
    <div className="home-component w-full">
      <div className="flex mt-[1%] ml-[2%]">
        <DateController />
      </div>

      <div className=" grid grid-cols-[1fr_1fr_1fr_0.5fr_1fr_1fr_1fr] grid-rows-1 px-10 pb-5">
        <div className="selectedName row-start-2 col-start-3 col-span-3 justify-self-center mt-[15%] pt-4 font-lato font-bold text-5xl text-zinc-100">
          {selectedItem.value.Company}
        </div>
        {hasToday ? (
          <TopCompaniesContainer className="topgraph col-start-2 col-span-5 justify-items-center mb-10" />
        ) : (
          <div className="loading">Loading Chart</div>
        )}
        {hasSelected ? (
          <>
            <SelectedChartContainer
              chartType={"candlestick"}
              className="singlecandle row-start-3 col-start-1 col-span-3"
            />
            <SelectedChartContainer
              chartType={"line"}
              className="singleline row-start-3 col-start-5 col-span-3"
            />
          </>
        ) : (
          <div className="empty"></div>
        )}
      </div>
    </div>
  );
};
