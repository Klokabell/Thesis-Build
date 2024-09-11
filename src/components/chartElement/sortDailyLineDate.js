const sortDailyLineData = (array) => {
  const chartLine = (array, name) => {
    const lineArray = array.map((stock) => {
      return stock[name];
    });
    return lineArray;
  };
  //console.log("sortLine initial Array:", array);

  const lineObjects = [
    {
      name: "Open",
      data: chartLine(array, "Open"),
    },
    {
      name: "Close",
      data: chartLine(array, "Close"),
    },
    {
      name: "High",
      data: chartLine(array, "High"),
    },
    {
      name: "Low",
      data: chartLine(array, "Low"),
    },
  ];
  //console.log("sortLine formatted Array", lineObjects);
  return lineObjects;
};

export default sortDailyLineData;
