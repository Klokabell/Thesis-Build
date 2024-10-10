const formatLineObjects = (item, period) => {
  if (!item) return null;
  
  // switch to determine which value uses which key
  let dateKey = "Date";
  switch (period) {
    case "Daily":
      dateKey = "Date";
      break;
    case "Weekly":
      dateKey = "week";
      break;
    case "Monthly":
      dateKey = "month";
      break;
    case "Yearly":
      dateKey = "year";
      break;
  }

  const baseObject = {
    Open: [],
    High: [],
    Low: [],
    Close: [],
    Dates: []
  }

  // converts original array of objects into a single object containing the arrays for each field
  const formattedData = item.reduce((newArray, currentArray) => {
    newArray.Open.push(currentArray.Open)
    newArray.High.push(currentArray.High)
    newArray.Low.push(currentArray.Low)
    newArray.Close.push(currentArray.Close)
    newArray.Dates.push(currentArray[dateKey])
    return newArray;
  }, baseObject)

  // maps through each field to format the values to be readable by the chart component
  const formattedObj = {
    series: [
      {
        name: "Open",
        data: formattedData.Open.map((value, index) => ({
          x: formattedData.Dates[index],
          y: value
        }))
      },
      {
        name: "High",
        data: formattedData.High.map((value, index) => ({
          x: formattedData.Dates[index],
          y: value
        }))
      },
      {
        name: "Low",
        data: formattedData.Low.map((value, index) => ({
          x: formattedData.Dates[index],
          y: value
        }))
      },
      {
        name: "Close",
        data: formattedData.Close.map((value, index) => ({
          x: formattedData.Dates[index],
          y: value
        }))
      },     
    ],
    dates: formattedData.Dates
  }
  return formattedObj
};

export default formatLineObjects;