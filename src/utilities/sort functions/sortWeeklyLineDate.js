const sortWeeklyLineDate = (weekly) => {
    const lineObjects = [
      {
        name: "Open",
        data: weekly.Open,
      },
      {
        name: "Close",
        data: weekly.Close
      },
      {
        name: "High",
        data: weekly.High
      },
      {
        name: "Low",
        data: weekly.Low
      }
    ];
    //console.log("sortLine formatted Array", lineObjects);
    return lineObjects;
  };
  
  export default sortWeeklyLineDate