import express from "express";
import cors from "cors";
import { router } from "./routing/routes.js";
console.log(process.env.CONNECTION_STRING)
import client from "./utilities/mongoConnect.js";

const PORT = 3005;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const main = async () => {
  try {
    await client.connect();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
console.log();
main();

export { app };
