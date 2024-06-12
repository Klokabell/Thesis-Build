/* eslint-disable no-unused-vars */
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSignals } from "@preact/signals-react/runtime";
import { effect } from "@preact/signals-react";
import { todayStock, selectedStock } from "../DataProvider";
import { fetchSelected, selectedWeekly } from "../utilities/fetchSelected";

function SearchBarAuto() {
  useSignals();

  let items = todayStock.value || []

  effect(() => (items = todayStock.value || []));

  const handleOnSelect = async (item) => {
    console.log("selected: ", item)
    selectedStock.value = item;
    await fetchSelected();
    console.log("selectedWeekly.value.Open", selectedWeekly.value);
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.Symbol}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.company}
        </span>
      </>
    );
  };

  if (items) {
    return (
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          fuseOptions={{ keys: ["company", "Symbol"] }}
          resultStringKeyName="Company"
          maxResults={6}
        />
      </div>
    );
  } else return <div>Loading</div>;
}

export default SearchBarAuto;
