const dateFormatter = (inputDate) => {
    const date = new Date(inputDate)
    const day = date.getDate()
    const month =  (1+date.getMonth())
    const year = date.getFullYear()

    return {
        day, month, year
    }
}

export default dateFormatter

console.log(dateFormatter("2016-01-04T00:00:00.000Z"))