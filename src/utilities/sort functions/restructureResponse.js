const restructureResponse = (array, data) => {
  const restructuredObj = {};
  array.forEach((key) => {
    restructuredObj[key] = data[key]
      .map((parentDoc) => {
        return parentDoc.Averages.map((item) => ({
          ...item,
          year: parentDoc._id,
        }));
      })
      .flat();
  });
  return restructuredObj;
};

export default restructureResponse;
