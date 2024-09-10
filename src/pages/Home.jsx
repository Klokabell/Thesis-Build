/* eslint-disable no-unused-vars */
import { TopGraphContainer, HistoryGraphContainer } from "../components/chartContainers";
import SingleCompanyCandle from "../components/chartElement/candle/specific/SingleCompanyCandle";
import SingleCompanyLine from "../components/chartElement/line/SingleCompanyLine";
import Overview from "../components/report boxes/Overview";
// import Summary from "../components/report boxes/Summary";
import { useEffect, useContext } from "react";
import { todayStock, StockState, selectedName } from "../DataProvider";
import { useSignals } from "@preact/signals-react/runtime";
import DateDisplay from "../components/date/DateDisplay";
import SetDateButton from "../components/date/SetDateButton";
import DateManager from "../components/date/dateManager";

export const Home = () => {
  useSignals();

  if (!todayStock.value.length === 0) {
    return <div>Loading...</div>;
  }

  return (
  <div className="home-component w-full">
    <div className="flex mt-[1%] ml-[2%]">
      <DateManager />
    </div>
    
    <div className=" grid grid-cols-[1fr_1fr_1fr_0.5fr_1fr_1fr_1fr] grid-rows-1 px-10 pb-5">
      <TopGraphContainer className="topgraph col-start-2 col-span-5 justify-items-center mb-10"/>
      <div className="selectedName row-start-2 col-start-3 col-span-3 justify-self-center mt-[15%] pt-4 font-lato font-bold text-5xl text-zinc-100">
        {selectedName.value}
        </div>
      <SingleCompanyCandle className="singlecandle row-start-3 col-start-1 col-span-3"/>
      <SingleCompanyLine className="singleline row-start-3 col-start-5 col-span-3" />
    </div>
  </div>

  );
};
{/*       {todayStock.value.length > 0 ? (
        <TopGraphContainer className="topgraph col-start-3 col-span-3 mb-10"/>
      ) : (
        <div>No Data Available</div>
      )} */}