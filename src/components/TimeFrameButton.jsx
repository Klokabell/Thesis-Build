/* eslint-disable react/prop-types */
import { sliceValue } from "../utilities/DataProvider"

export const TimeFrameButton = ({limitDate, year}) => {
    const onClickHandler = () => {
      sliceValue.value = limitDate
    }

  return (
    <div className="period-btn">
        <button onClick={onClickHandler}>
            {!year ? `${limitDate}d` : `${year}yr`}
        </button>
    </div>
  )
}
