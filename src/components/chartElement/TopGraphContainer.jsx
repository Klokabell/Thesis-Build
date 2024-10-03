/* eslint-disable react/prop-types */
import TopCompaniesCandle from "./MultiCompanyCandle";

const TopGraphContainer = ({ className }) => {
  return (
    <div
      className={`graph-container-top my-[4%] text-left px-4 py-2 ${className}`}
    >
      <TopCompaniesCandle />
    </div>
  );
};

export { TopGraphContainer };
