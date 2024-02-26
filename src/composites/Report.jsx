import Overview from "../components/report boxes/Overview";

const Report = () => {



  return (
    <div className="report-container">
      <Overview period={"Monthly"} values={ {perc: 6, dollar: 1205, available: 4600, spent: 1700, total: 5000 }} id={"overview_month"} />
      <Overview period={"Daily"} values={ {perc: 1.4, dollar: 125, available: 4600, spent: 520, total: 5000}} id={"overview_day"} />
    </div>
  );
};

export default Report;
