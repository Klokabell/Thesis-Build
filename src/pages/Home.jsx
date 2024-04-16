/* eslint-disable no-unused-vars */
import GraphContainer from "../components/chartElement/GraphContainer";
import Overview from "../components/report boxes/Overview";
// import Summary from "../components/report boxes/Summary";
import { useContext, useEffect, useState } from "react";
import {
  StockState,
  selectedStock,
  selectedHistory,
  stockSignal
} from "../utilities/DataProvider";
import { useSignals } from "@preact/signals-react/runtime";

export const Home = () => {
  useSignals();

  useEffect(() => {
    console.log("/Home selectedHistory.value", selectedHistory.value);
    console.log("/Home selectedStock.value", selectedStock.value);
  }, []);
  return (
    <div className="page-grid">
      <>
        {stockSignal.value ? (
          <div className="chart-container">
            <h2 className="company-title">{selectedStock.value}</h2>
            <GraphContainer />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </>
      <Overview
        period={"Monthly"}
        values={{
          perc: 6,
          dollar: 1205,
          available: 4600,
          spent: 1700,
          total: 5000,
        }}
        id="overview_month"
      />
      <Overview
        period={"Daily"}
        values={{
          perc: 1.4,
          dollar: 125,
          available: 4600,
          spent: 520,
          total: 5000,
        }}
        id="overview_day"
      />
    </div>
  );
};
