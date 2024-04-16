/* eslint-disable react/prop-types */
import { timeframe } from "../../utilities/DataProvider"

export const TimeFrameButton = ({limitDate, year}) => {
    const onClickHandler = () => {
      timeframe.value = limitDate
    }

    console.log("TimeframButton", timeframe.value)
  return (
    <div className="period-btn">
        <button onClick={onClickHandler}>
            {!year ? `${limitDate}d` : `${year}yr`}
        </button>
    </div>
  )
}
