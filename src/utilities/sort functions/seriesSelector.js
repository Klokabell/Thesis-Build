import { selectedHistory } from "../../DataProvider";

const seriesSelector = (period, units) => {

    const seriesObj = selectedHistory.value
    if(seriesObj.length === 0) return []
    return seriesObj[period].slice(0, units)
    
}

export default seriesSelector
