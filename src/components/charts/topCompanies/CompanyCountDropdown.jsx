// eslint-disable-next-line react/prop-types
const CompanyCountDropdown = ({ companyCount, setCompanyCount }) => {
  const onChangeHandler = (e) => {
    setCompanyCount(e.target.value);
  };

  return (
    <div className="text-gray-800">
      <select
        className="appearance-none w-5% h-full px-2
          text-[#fafafa] font-semibold 
          bg-[#4b5563]
          border-r-2 border-t-2  border-transparent rounded-none
          hover:border-[#1f2937]
          focus:outline-none focus:border-slate-800 focus:bg-[#373f49]
          active:border-transparent"
        value={companyCount}
        onChange={(e) => onChangeHandler(e)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default CompanyCountDropdown;
