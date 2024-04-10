import mongoConnect from "./utilities/mongoConnect.js";
import express from "express";
import cors from "cors";
import "dotenv/config"
import { router } from "./routing/routes.js"

const PORT = 3005;
const app = express();
app.use(cors())
app.use(express.json())
app.use("/", router)

const localURI = process.env.LOCAL_CONNECT_STRING

await mongoConnect(localURI)

const main = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
console.log("hello")
main()

export { app }