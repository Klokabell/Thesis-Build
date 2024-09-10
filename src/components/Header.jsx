// import SearchBar from "../composites/SearchBar/SearchBar";
import SearchBarAuto from "../composites/SearchBarAuto";
import { useSignals } from "@preact/signals-react/runtime";
import { todayStock } from "../DataProvider";

const Header = () => {
  useSignals();
  return (
<header className="grid grid-cols-9 px-10 h-[10%] bg-heading-back p-2 place-items-center">
<div className="col-start-1 col-span-2 flex flex-row content-center">
        {todayStock.value.length > 0 ? (
          <SearchBarAuto />
        ) : (
          <div>Loading Data</div>
        )}
      </div>
      <h1 className="text-slate-500 text-6xl font-bold col-start-4 col-span-3">
        Stock Viewer
      </h1>
    </header>
  );
};

export default Header;
