import { client } from "./connectDB.js"

const collections = ["AAPL - apple", "MSFT - microsoft", "NVDA-nvidia"]
const newColl = "selected_data"

const mongoFind = async(date) => {
    try {
  
      const db = client.db("Mock-Stocks")
     
      collections.forEach(coll => {
        const company = db.collection(coll)
        company.find({ Date: date}).toArray((err, doc) => {
            if(err) {
                console.error("Trouble querying collections: ", err)
                return
            }

            const datedCollection = db.collection(coll)
            datedCollection.insertMany(docs, (err, result) => {
                if(err)
            })
        })
      })
      if(document){ 
        console.log("document found", document)
    }

      else console.log("No document found")
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  export default mongoFind