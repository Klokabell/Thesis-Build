const formatDataForApexChart = (data, periodType) => {
    // The key name that will be used to access time-specific values in Averages
    const timeKey = periodType === "Weekly" ? "week" : periodType === "Monthly" ? "month" : "year";
  
    // Map through the data array to create a candle array
    const formattedData = data.map((entry) => {
      // Each entry in data corresponds to a year
      const year = entry._id;
      
      // Map through each item in Averages to create the ApexChart data points
      return entry.Averages.map((item) => ({
        x: new Date(year, item[timeKey] - 1), // Adjust the date based on the time period
        y: [item.Open, item.High, item.Low, item.Close], // OHLC values
      }));
    });
  
    // Flatten the array since each entry could contain multiple objects
    return formattedData.flat();
  };
  
  // Example Usage
  const weeklyData = [
    {
      _id: 2017,
      Averages: [
        { week: 8, Open: 2.38, Close: 2.32, High: 2.44, Low: 2.29 },
        { week: 9, Open: 2.33, Close: 2.30, High: 2.42, Low: 2.28 },
      ],
    },
    // More yearly data...
  ];
  
  const monthlyData = [
    {
      _id: 2017,
      Averages: [
        { month: 1, Open: 2.38, Close: 2.32, High: 2.44, Low: 2.29 },
        { month: 2, Open: 2.33, Close: 2.30, High: 2.42, Low: 2.28 },
      ],
    },
    // More yearly data...
  ];
  
  const yearlyData = [
    {
      _id: 2017,
      Averages: [
        { year: 2017, Open: 2.38, Close: 2.32, High: 2.44, Low: 2.29 },
      ],
    },
    // More yearly data...
  ];
  
  console.log(formatDataForApexChart(weeklyData, "Weekly"));
  console.log(formatDataForApexChart(monthlyData, "Monthly"));
  console.log(formatDataForApexChart(yearlyData, "Yearly"));
  