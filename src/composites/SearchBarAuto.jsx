/* eslint-disable no-unused-vars */
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useState } from "react"
import { useSignals } from "@preact/signals-react/runtime";
import { effect } from "@preact/signals-react";
import { todayStock, selectedStock } from "../DataProvider";
import { fetchSelected } from "../utilities/fetchSelected";

function SearchBarAuto() {
  useSignals();

  const currentStock = todayStock.value
  let items = []
  
  effect(() => (items = currentStock))

  const handleOnSelect = async (item) => {
    console.log("selected: ", item.Company)
    selectedStock.value = item;
    await fetchSelected();
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
