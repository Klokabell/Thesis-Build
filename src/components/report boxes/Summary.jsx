/* eslint-disable react/prop-types */
/* import { useSignals } from "@preact/signals-react/runtime";
import { stockList } from "../../App";

const Summary = ({ id }) => {
  useSignals()

  // eslint-disable-next-line react/prop-types
  const { companyData } = useData()
  const { Company, Symbol, Open, Close, Date } = companyData;
  const date = Date

  console.log("Summary");
  return (
    <div className="summary" id={id}>
      <h2>{Company}</h2>
      <div className="total container">
        <span className="total__span">Symbol</span>
        <div className="total__value">{Symbol}</div>{" "}
      </div>
      <div className="change container">
        <span className="span__change">Open</span>
        <div className="dollar">{Open}</div>
      </div>
      <div className="cash container">
        <span className="span__cash">Date</span>
        <div className="available">{date}</div>
      </div>
      <div className="spent container">
        <span className="span__spent">Close</span>
        <div className="spent">{Close}</div>
      </div>
    </div>
  );
};

export default Summary; */