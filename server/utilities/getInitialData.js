import mongoConnect from "./mongoConnect.js";

const uri = "mongodb://localhost:27018/";

const getInitialData = async (dbName, collectionName) => {
  const client = await mongoConnect(uri);

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
  } finally {
    client.close();
  }
};

export default getInitialData;
