import { dateToValuesFormatter } from "../../utilities/dateManager"
import { date } from "../../DataProvider"
const DateDisplay = () => {

    const displayDate = dateToValuesFormatter(date)
    const { day, month, year} = displayDate
    console.log(day, month, year)

  return (
    <div className="date-display pt-4 pl-4 font-lato font-bold text-lg text-zinc-100" >
        {day}/{month}/{year}
    </div>
  )
}

export default DateDisplay