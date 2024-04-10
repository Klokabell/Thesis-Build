import { MongoClient } from "mongodb";

const mongoConnect = async (uri) => {
  const client = await MongoClient.connect(uri);
  try {
    await client.connect()
    console.log(`connected to ${uri}`)
    return client
  }
  catch (err){
    console.error("Error connecting to mongodb- ", err)
    throw err
  }
}

export default mongoConnect;
