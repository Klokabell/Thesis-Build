/* eslint-disable react/prop-types */
import TopCompaniesCandle from "./chartElement/candle/various/TopCompaniesCandle";
import SingleCompanyCandle from "./chartElement/candle/specific/SingleCompanyCandle";
import SingleCompanyLine from "./chartElement/line/SingleCompanyLine";

const TopGraphContainer = ({ className }) => {
  return (
    <div className={`graph-container-top my-[4%] text-left px-4 py-2 ${className}`}>
      <TopCompaniesCandle />
    </div>
  );
};

const HistoryGraphContainer = () => {
  return (
    <div className="graph-container-history  col-span-full  display: flex  justify-around pb-8">
      <SingleCompanyCandle />
      <SingleCompanyLine />
    </div>
  );
}

export { TopGraphContainer, HistoryGraphContainer };