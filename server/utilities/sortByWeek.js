const sortByWeek = (stocksArray) => {
    const weekGroups = stocksArray.reduce((weekNum, doc) => {
      const key = doc.week
      if(!weekNum[key]) {
        weekNum[key] = []
      }
      weekNum[key].push(doc)
      return weekNum
    }, {})
    return weekGroups
}

export default sortByWeek