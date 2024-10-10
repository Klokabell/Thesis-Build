import { compareDesc } from "date-fns";

const sliceByDate = (array, endDate) => {
  const dateIndex = array.findIndex((item) => {
    return compareDesc(new Date(endDate), new Date(item.Date)) < 0; //return the index of the last item with a Date value before endDate
  });

  const slicedArray = array.slice(0, dateIndex);
  return slicedArray 
};

export default sliceByDate;
