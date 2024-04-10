/* eslint-disable no-unused-vars */
import ChartElement from "../components/ChartElement";
import LineGraph from "../components/chartElement/LineGraph";
import Overview from "../components/report boxes/Overview";
// import Summary from "../components/report boxes/Summary";
import { useContext, useState } from "react";
import { TimeFrameButton } from "../components/TimeFrameButton";
import { StockState, selectedStock } from "../utilities/DataProvider";
import { useSignals } from "@preact/signals-react/runtime";
import { RadioContainer } from "../components/chartElement/RadioContainer";

export const Home = () => {
  useSignals();
  const [chartType, setChartType] = useState("candle");

  console.log("timeframe");
  const { fetchedRef } = useContext(StockState);

  return (
    <div className="page-grid">
      <>
        {fetchedRef ? (
          <div className="chart-container">
            <h2 className="company-title">{selectedStock.value}</h2>
            <div className="container">
              <RadioContainer
                setChartType={setChartType}
                chartType={chartType}
              />
              {chartType === "candle" ? (
                <ChartElement />
              ) : (
                <LineGraph className="custom-candle" />
              )}
            </div>
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
