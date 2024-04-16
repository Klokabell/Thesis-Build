/* eslint-disable no-unused-vars */
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSignals } from "@preact/signals-react/runtime";
import { effect } from "@preact/signals-react";
import {
  todayStock,
  selectedStock,
  selectedHistory
} from "../utilities/DataProvider";
import fetchSelected from "../utilities/fetchSelected";


function SearchBarAuto() {
  useSignals();

  let currentStock = todayStock.value;
  let items = [];

  effect(() => (items = currentStock));

  const handleOnSelect = async (item) => {
    selectedStock.value = item.Company
    selectedHistory.value = await fetchSelected(item)
    console.log("selectedHistory searchBarAuto", selectedHistory.value)
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
      <div style={{ width: 400 }}>
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
