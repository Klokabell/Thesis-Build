import { MongoClient } from "mongodb";

const uri = "mongodb+srv://Klokabell:eOv4WhNWrFn4winq@study-cluster.yh4bjak.mongodb.net/Mock-stocks"
const client = new MongoClient(uri)

const connectDB = async() => {
    try {
        await client.connect();
    } catch (error) {
        console.error("Error connecting to mongodb: ", error)
    }
}


export { client, connectDB }