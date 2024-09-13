import client from "../utilities/mongoConnect.js";

const dbName = "2016";
const collName = "Stocks";

const retrieveUpdate = async (month) => {
  try {
    console.log("retrieving data")
    const updatedCollection = await client
      .db(dbName)
      .collection(collName)
      .find({ Month: { $eq: month } })
      .toArray();
    return updatedCollection;
  } catch (error) {
    console.log("Error in updating data", error);
  }
};

export default retrieveUpdate;
