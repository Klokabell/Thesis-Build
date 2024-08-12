import client from "./mongoConnect.js";

const getCurrentData = async (dbName, collectionName, month) => {

  try {
    console.log(`running getCurrentData(${dbName}, ${collectionName})`);
    const testcollection = await client
      .db(dbName)
      .collection(collectionName)
      .find({ Month: month })
      .sort({ Close: -1 })
      .toArray();
    return testcollection;
  } catch (err) {
    console.error("'getInitialData' Error: ", err.message);
    throw err
  }
};

export default getCurrentData;