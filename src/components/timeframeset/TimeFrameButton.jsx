/* eslint-disable react/prop-types */
import { signal } from "@preact/signals-react"

export const timeframe = signal(1)

export const TimeFrameButton = ({limitDate}) => {
    const onClickHandler = () => {
      timeframe.value = limitDate
    }

  return (
    <div className="px-2 bg-gray-400 text-white hover:bg-slate-600 active:bg-slate-800">
        <button onClick={onClickHandler} className="">
            {limitDate<365 ? `${limitDate}d` : `${Math.floor(limitDate / 365)}yr`}
        </button>
    </div>
  )
}
