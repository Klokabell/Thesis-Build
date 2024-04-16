import client from "./mongoConnect.js";

const getInitialData = async (dbName, collectionName) => {

  try {
    console.log(`running getInitialData(${dbName}, ${collectionName})`);
    //const collection = await client.db(dbName).collection(collectionName).find().toArray()
    const testcollection = await client
      .db(dbName)
      .collection(collectionName)
      .find()
      .limit(20)
      .toArray();
    return testcollection;
  } catch (err) {
    console.error("'getInitialData' Error: ", err.message);
    throw err
  }/*  finally {
    client.close();
  } */
};

export default getInitialData;
