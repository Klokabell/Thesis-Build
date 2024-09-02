import { getDate, getWeek, getMonth, getYear, format,  addDays } from "date-fns";
import { dateObject } from "../../DataProvider";

export const filterDate = (array, timeframe) => {
    const displayArray = array.slice(0, timeframe)
    return displayArray
}

export const sortDate = (date, period) => {
    
}