/* eslint-disable no-unused-vars */
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { selectedItem, currentDateObj } from "../../StateManager";
import { useSignals } from "@preact/signals-react/runtime";
import { effect } from "@preact/signals-react";
import { todayStock } from "../../StateManager";
import { fetchSelected } from "../../utilities/fetchSelected";

function SearchBarAuto() {
  useSignals();
  const Month = currentDateObj.value.month;
  let items = [];

  effect(() => (items = todayStock.value));

  const handleOnSelect = async (item) => {
    selectedItem.value = { Company: item.Company, Symbol: item.Symbol, Month };
    await fetchSelected(selectedItem.value, false);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.Symbol}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.Company}
        </span>
      </>
    );
  };

  if (items) {
    return (
      <div className="self-center w-60 z-50">
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          fuseOptions={{ keys: ["Company", "Symbol"] }}
          resultStringKeyName="Company"
          maxResults={6}
        />
      </div>
    );
  } else return <div>Loading</div>;
}

export default SearchBarAuto;
