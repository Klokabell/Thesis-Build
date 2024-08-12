import Navbar from "./Navbar";
// import SearchBar from "../composites/SearchBar/SearchBar";
import SearchBarAuto from "../composites/SearchBarAuto";
import SetDateButton from "./SetDateButton";
import { useSignals } from "@preact/signals-react/runtime";
import { todayStock } from "../DataProvider";

const Header = () => {
  useSignals();
  return (
    <header className="flex items-center h-24 justify-between	 bg-gray-800 p-2">
      <div className="flex flex-row content-center justify-between">
        <SetDateButton />
        {todayStock.value.length > 0 ? (
          <SearchBarAuto />
        ) : (
          <div>Loading Data</div>
        )}
      </div>
      <h1 className="text-white text-6xl">
        Small Cap Market Trader
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
