import express from "express";
import cors from "cors";
import { promisify } from "util"
import {router} from "./routing/routes.js"
import client from "./utilities/mongoConnect.js";

const sleep = promisify(setTimeout);
const PORT = 3005;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const main = async () => {
  let connected = false
  let attempt = 0;
  const limit = 3;

  while (!connected && attempt < limit) {
    try {
      await client.connect();
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
      connected = true
    } catch (error) {
      attempt++
      console.error(`Connection failed, attempting retry ${attempt}`);
      if(attempt<limit){
        await sleep(5000)
      } else {
        console.log(`Retry limit reached, please resolve issue and try again`)
        process.exit(1)
      } 
    }
  }
};

console.log();
main();

export { app };
