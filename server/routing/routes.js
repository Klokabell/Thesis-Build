import express from "express";
import getInitialData from "../utilities/getInitialData.js";
import retrieveHistory from "../utilities/retrieveHistory.js";
const router = express.Router();
//const dbName = "COMPANY_COLLECTIONS"
const dbName3 = "Users_Collections";
const collName = "named_companies";
const dbName = "Mock-stocks"

router.get("/start", async (req, res) => {
  console.log("initial get request received at /start");
  const data = await getInitialData(dbName3, collName);
  console.log("initial data sent");
  res.send(data);
});

router.post("/company", async (req, res) => {
  const {Symbol, Date} = req.body;
  console.log("POST request received at /company", Date, typeof Symbol);
  try {
     const data = await retrieveHistory(dbName, Symbol, Date);
     console.log(data.length)
     if (data.length>0) {
      return res.status(200).send(data);
     } else {
      return res.status(404).send({ message: "No data found for the given symbol." });
     }
  } catch (error) {
     console.error("Error retrieving history:", error);
     return res.status(500).send({ message: "An error occurred while retrieving the data." });
  }
 });
 

export { router };
