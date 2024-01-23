import express from "express";
import fs from "fs"
import cors from "cors";

const app = express();
const PORT = 3005;

const data = fs.readFileSync('server/data/sampleData.cjs');
const jsonData = JSON.parse(data)

app.use(cors());

app.get("/api/sampleData", async (req, res) => {
  try {
    res.json(jsonData);
  } catch (error) {
    console.error("Error finding or reading the data", error);
    res.status(500).json({ error: "Server Side Error" });
  }
});

app.listen(PORT, () => {
    if(Object.keys(jsonData).length > 0){
        console.log(`Data found, server running on http://localhost:${PORT}`);
    }
    else {
        console.log("No data found, retrying")
        setTimeout(()=> console.log(jsonData), 3000)
    }
});
