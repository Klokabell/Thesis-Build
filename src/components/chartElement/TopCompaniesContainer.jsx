/* eslint-disable react/prop-types */
import { todayStock } from "../../StateManager";
import { gameDate } from "../../utilities/createGameDate";
import { useEffect, useState } from "react";
import getTodayStock from "../../utilities/sort functions/getTodayStock";
import TopCompaniesCandle from "./TopCompaniesCandle";
import CompanyCountDropdown from "./CompanyCountDropdown";
import topCompanyCandleOptions from "./options/topCompaniesCandleOptions";
import { useComputed, useSignalEffect } from "@preact/signals-react";

const TopCompaniesContainer = ({ className }) => {
  const displayStock = useComputed(() =>
    todayStock.value.sort((a, b) => b.Close - a.Close)
  );
  const [companyCount, setCompanyCount] = useState(5);
  const [series, setSeries] = useState(displayStock.value.slice(0, 5));
  const options = topCompanyCandleOptions(companyCount, gameDate);
  const candleFormatter = (item) => {
    return {
      x: item.Company,
      y: [item.Open, item.High, item.Low, item.Close],
    };
  };
  useSignalEffect(() => {
    todayStock.value = getTodayStock();
  });

  useEffect(() => {
    const slicedArray = displayStock.value.slice(0, companyCount);
    const formattedSeries = slicedArray.map(candleFormatter);
    setSeries(formattedSeries);
  }, [companyCount, gameDate.value]);

  return (
    <div
      className={`chart-element_${className} mt-[5%] mb-[10%] ml-[5%]`}
      id="apex"
    >
      <CompanyCountDropdown
        companyCount={companyCount}
        setCompanyCount={setCompanyCount}
      />
      <TopCompaniesCandle series={series} options={options} />
    </div>
  );
};

export default TopCompaniesContainer;
