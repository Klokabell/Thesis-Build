const formatLineObjects = (item, period) => {
  if (!item) return null;
  
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

  const formattedData = item.reduce((newArray, currentArray) => {
    newArray.Open.push(currentArray.Open)
    newArray.High.push(currentArray.High)
    newArray.Low.push(currentArray.Low)
    newArray.Close.push(currentArray.Close)
    newArray.Dates.push(currentArray[period])
    return newArray;
  }, baseObject)

  console.log("formattedData", formattedData, period)
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




/*
[
 {
    name: "Open",
    data: [item.Open]
 },
 {
    name: "High",
    data: [item.high]]
 },
 {
    name: "Close",
    data: [item.Close]
 },
 {
    name: "Low",
    data: [item.Low]
 },
]


Close:18.53
Date:"2016-01-13T00:00:00.000Z"
High:18.93
Low:18.5
Open:18.53
OpenInt:0
Volume:69620
Week:null
day:13
month:1
week:2
year:2016
_id:"65e1d8db6a66942d774c7857" 


Close:6.25
High:6.42
Low:5.88
Open:6.14
week:3
year:
2016
*/