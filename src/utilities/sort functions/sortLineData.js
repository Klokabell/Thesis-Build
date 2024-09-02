const sortLineDataSingle = async (array) => {
  const getValues = (array, name) => {
    const lineArray = array.map((stock) => {
      return stock[name];
    });
    return lineArray;
  };
  //console.log("sortLine initial Array:", array);
  const baseDateArray = getValues(array, "Date");

  const dateArraySet = (array) => {
    return Array.from(new Set(array));
  };

  const lineObjects = [
    {
      Dates: dateArraySet(baseDateArray),
    },
    {
      name: "Open",
      data: await getValues(array, "Open"),
    },
    {
      name: "Close",
      data: await getValues(array, "Close"),
    },
    {
      name: "High",
      data: await getValues(array, "High"),
    },
    {
      name: "Low",
      data: await getValues(array, "Low"),
    },
  ];
  console.log("sortLine formatted Array", lineObjects);
  return lineObjects;
};

export default sortLineDataSingle;
