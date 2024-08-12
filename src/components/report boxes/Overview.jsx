/* eslint-disable react/prop-types */
const Overview = (props) => {
  // eslint-disable-next-line react/prop-types
  const { period, values, id } = props;
  return (
    <div className="bg-slate-500 h-fit text-white px-4 pt-2" id={id}>
      <h2 className="block mb-3 font-semibold">{`${period} Change`}</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <div className="total container">
          <span className="total__span">Acc. Total</span>
          <div className="total__value">{`$${values.total}`}</div>{" "}
        </div>
        <div className="change container">
          <span className="span__change">Change</span>
          <div className="dollar">{`$${values.dollar}`}</div>
          <div className="percent">{`${values.perc}%`}</div>
        </div>
        <div className="cash container">
          <span className="span__cash">Cash Available</span>
          <div className="available">{`$${values.available}`}</div>
        </div>
        <div className="spent container">
          <span className="span__spent">Cash Spent</span>
          <div className="spent">{`$${values.spent}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
