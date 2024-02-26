import ChartElement from "../components/ChartElement";
import Header from "../components/Header";
// import Report from "../composites/Report";
import Overview from "../components/report boxes/Overview";

export const Home = () => {
  return (
    <div className="page-grid">
      <Header />
      <ChartElement className="custom-candle" />
      <Overview period={"Monthly"} values={ {perc: 6, dollar: 1205, available: 4600, spent: 1700, total: 5000}} id="overview_month" />
      <Overview period={"Daily"} values={ {perc: 1.4, dollar: 125, available: 4600, spent: 520, total: 5000}} id="overview_day" />
    </div>
  );
};
