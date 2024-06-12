import Navbar from "./NavBar";
//import SearchBar from "../composites/SearchBar/SearchBar";
import SearchBarAuto from "../composites/SearchBarAuto";
import SetDateButton from "./SetDateButton";
import { useSignals } from "@preact/signals-react/runtime";
import { todayStock } from "../DataProvider";

const Header = () => {
  useSignals();
  return (
    <header className="header">
      <SetDateButton />
      <img className="header__logo" src="../icons/basic_bolt.png"></img>
      {todayStock.value.length > 0 ? (
        <SearchBarAuto />
      ) : (
        <div>Loading Data</div>
      )}
      <h1 className="heading-primary">
        Small Cap <span>Market Trader</span>
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
