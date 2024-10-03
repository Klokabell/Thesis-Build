import { currentDateObj } from "../StateManager";
import { computed } from "@preact/signals-react";

export const gameDate = computed(() => currentDateObj.value.date);
