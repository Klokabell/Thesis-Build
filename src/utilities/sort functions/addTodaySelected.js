const addTodaySelected = (array, name) => {
    
    const selectedToday = array.filter((item) => {
        return item.Company === name
    })
    return selectedToday[0]
}

export default addTodaySelected