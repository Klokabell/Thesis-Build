import "./App.css";
import ChartElement from "./components/ChartElement";

function App() {
  return (
    <>
      <div className="header">
        <img className="header_logo"></img>
        <h1 className="header_text">Small Cap Trading Simulator</h1>
        <div className="header_nav"></div>
      </div>
      <div className="chartContainer">
        <ChartElement />
      </div>
    </>
  );
}

export default App;