/* eslint-disable react/prop-types */
import { signal } from "@preact/signals-react"

export const timeframe = signal(1)

export const TimeFrameButton = ({limitDate}) => {
    const onClickHandler = () => {
      timeframe.value = limitDate
    }

  return (
    <div className="period-btn">
        <button onClick={onClickHandler}>
            {limitDate<365 ? `${limitDate}d` : `${Math.floor(limitDate / 365)}yr`}
        </button>
    </div>
  )
}
