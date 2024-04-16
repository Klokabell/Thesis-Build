import client from "./mongoConnect.js";

const mongoFind = async () => {
  const dbase = client.db("Mock-Stocks");
  const checkNvidia = dbase.collection("NVDA-nvidia");

  try {
    let sample = await checkNvidia.findOne();
    console.log(sample.High);
  } catch (err) {
    console.error("AH NO, error! ", err);
  }
};

const retrieveWeek = async (currentWeek) => {
  const collection = await client.db("Mock-stocks").collection("2016_Below_10");

  if (currentWeek == 52) return "year complete";
  else
    try {
      currentWeek++;
      const nextWeek = await collection.find({
        Date: currentWeek,
      });
      return nextWeek;
    } catch (err) {
      return;
    }
};


export { mongoFind, retrieveWeek };
