const limitSeriesArrays = (object) => {
  const limitsObject = {
    Daily: 90,
    Weekly: 12,
    Monthly: 12,
    Yearly: 5,
  };

  const limitedDataObject = Object.entries(object).reduce(
    (acc, [key, array]) => {
      const limit = limitsObject[key];
      acc[key] = array.slice(0, limit);
      return acc;
    },
    {}
  );
  return limitedDataObject;
};

export default limitSeriesArrays;
