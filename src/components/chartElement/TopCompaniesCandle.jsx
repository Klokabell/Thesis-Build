/* eslint-disable react/prop-types */
import Chart from "react-apexcharts";

const TopCompaniesCandle = ({ series, options }) => {


  return (
    <div className="chart-element-top w-[100%] m-auto" id="apex">
      {series ? (
        <Chart options={options} series={[{data: series}]} type="candlestick" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TopCompaniesCandle;
