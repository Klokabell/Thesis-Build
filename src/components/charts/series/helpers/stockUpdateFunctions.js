/* eslint-disable no-unused-vars */
import { selectedFuture, selectedItem } from "../../../../StateManager";
import { gameDate } from "../../../../utilities/createGameDate";
import { isUpdateDay } from "../../../../utilities/dateTools";
import mergeSelectedFuture from "../../../../utilities/mergeSelectedUpdate";
import fetchSelectedUpdate from "../../../../utilities/fetchSelectedUpdate";

const selectedUpdateHandler = async () => {
  console.log(`Updating selectedFuture on ${gameDate}`);
  let { Symbol, Month } = selectedItem.value;
  try {
    const nextMonthSelected = await fetchSelectedUpdate(Symbol, Month);
    if (nextMonthSelected && typeof nextMonthSelected === "object") {
      for (const key of ["Daily", "Weekly", "Monthly"]) {
        if (Array.isArray(nextMonthSelected[key])) {
          selectedFuture.value[key] = await mergeSelectedFuture(
            nextMonthSelected[key],
            selectedFuture.value[key]
          );
        }
      }
    }
  } catch (err) {
    console.error("update retrieval error just happened:", err);
  }
};

export { isUpdateDay, selectedUpdateHandler };
