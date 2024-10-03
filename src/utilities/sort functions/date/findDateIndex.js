const findDateIndex = (array, key, dateObject) => {
  if (!dateObject) {
    console.warn("currentDateObj is undefined");
    return -1;
  }

  if (!Array.isArray(array)) {
    console.warn(`findDateIndex: ${array} is not an array`);
    return -1; // -1 means not an array
  }
  const arrayCopy = [...array]; // shallow copy
  return arrayCopy.findIndex((item) => item[key] <= dateObject[key]);
};

export default findDateIndex;
