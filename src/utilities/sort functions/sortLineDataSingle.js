const sortLineDataSingle = async (array, period) => {

  const getAveragesValues = (array, key) => {
    return array.map((stock) => {
      return {
        value: stock[key],
        year: stock.year
      };
    });
  };
  
  const getValues = (array, key) => {
    return array.map((stock) => {
      return stock[key]
    })
  }
  const dateArraySet = (array) => {
    return Array.from(new Set(array));
  };

  return [
    {
      Dates: period==="Date" ? 
      dateArraySet(getValues(array, period)) 
      : getAveragesValues(array, period),
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
};

export default sortLineDataSingle;
