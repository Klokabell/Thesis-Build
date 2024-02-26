import express from "express";
import cors from "cors";
import mongoFind from "./utilities/mongoQueries.js";
import { connectDB } from "./utilities/connectDB.js"

const PORT = 3005;
const app = express();
app.use(cors())

const main = async () => {
  try {
    connectDB().then(mongoFind)
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

main()