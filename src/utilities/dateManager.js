import { date } from "../DataProvider"
const dateFormatter = (inputDate) => {
    const date = new Date(inputDate)
    const day = date.getDate()
    const month =  (1+date.getMonth())

    return {
        day, month
    }
}


const addDay = (currentDate) => {

  const dayPlus = (date) => {
    let tmrw = new Date(date);
    do{
      tmrw.setDate(tmrw.getDate()+1)
    } while (tmrw.getDay() === 0 || tmrw.getDay() === 6)
    return tmrw
};


    let tmrw = dayPlus(currentDate);
    date.value = tmrw;
    sessionStorage.setItem("date", JSON.stringify(tmrw));
  };



export { dateFormatter, addDay }
