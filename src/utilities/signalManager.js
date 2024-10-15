import { signal } from "@preact/signals-react";

export const currentDateObj = signal();
export const updateDateObj = signal();
export const selectedHistory = signal({ Daily: [] });
export const selectedFuture = signal([]);
export const selectedItem = signal("");
export const todayStock = signal([]);
export const currentMonthStocks = signal({});
export const nextMonthStocks = signal(null);