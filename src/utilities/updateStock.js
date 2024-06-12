import { useSignals } from "@preact/signals-react/runtime"
import { effect } from "@preact/signals-react"
import { date } from "../DataProvider"

const updateStock = async() => {

    function stockUpdater(date) {
        
    }
    

    effect(() => {
        const currentDate = new Date(date.value)
        const day = currentDate.getDate()

        if (day === 1 || day === 15) {
            stockUpdater(currentDate)
        }
    })
}

export default updateStock