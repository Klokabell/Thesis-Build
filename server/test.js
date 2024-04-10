import getInitialData from "./utilities/getInitialData.js";




const test = async () => {
  const dbName = "Users_Collections";
  const collName = "Default_Data";

  console.log("running test.js");
  const data = await getInitialData(dbName, collName);
  return data;
};

export default test;
