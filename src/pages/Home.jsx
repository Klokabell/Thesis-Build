/* eslint-disable no-unused-vars */
import GraphContainer from "../components/chartElement/GraphContainer";
import Overview from "../components/report boxes/Overview";
// import Summary from "../components/report boxes/Summary";
import { useEffect } from "react";
import {
  selectedStock,
} from "../utilities/DataProvider";
import { useSignals } from "@preact/signals-react/runtime";

export const Home = () => {
  useSignals();

  useEffect(() => {
  }, []);
  return (
    <div className="page-grid">
      <>
        {selectedStock.value ? (
          <div className="chart-container">
            <h2 className="company-title">{selectedStock.value.Company}</h2>
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
