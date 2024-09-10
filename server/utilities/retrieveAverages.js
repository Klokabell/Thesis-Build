import client from "./mongoConnect.js";

const retrieveAverages = async (collName, field) => {
  const fieldAverage = "Averages";
  const getAverages = await client.db("Stock-Histories").collection(collName)
    .aggregate([
      {
        $match: {
          year: { $lte: 2016 }
        }
      },
      {
        $group: {
          _id: { year: "$year", [field]: `$${field}` },
          OpenAvg: { $avg: "$Open" },
          CloseAvg: { $avg: "$Close" },
          HighAvg: { $avg: "$High" },
          LowAvg: { $avg: "$Low" },
        },
      },
      {
        $group: {
          _id: "$_id.year", //set year as id
          Avg: {
            $push: {
              [field]: "$_id." + field, //set field value
              Open: { $round: ["$OpenAvg", 2] },
              Close: { $round: ["$CloseAvg", 2] },
              High: { $round: ["$HighAvg", 2] },
              Low: { $round: ["$LowAvg", 2] },
            },
          },
        },
      },
      {
        $addFields: {
          Avg: {
            $sortArray: {
              input: "$Avg",
              sortBy: { [field]: -1 }
            }
          }
        }
      },
      {
        $sort: { _id: -1 },
      },
      {
        $project: {
          [fieldAverage]: "$Avg",
        },
      },
    ])
    .toArray();

  return getAverages;
};

export default retrieveAverages;
