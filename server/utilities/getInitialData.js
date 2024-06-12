import client from "./mongoConnect.js";


const getInitialData = async (dbName, collectionName) => {

  try {
    console.log(`running getInitialData(${dbName}, ${collectionName})`);
    const testcollection = await client
      .db(dbName)
      .collection(collectionName)
      .find({ Month: 1 })
      .toArray();
    return testcollection;
  } catch (err) {
    console.error("'getInitialData' Error: ", err.message);
    throw err
  }
};

export default getInitialData;