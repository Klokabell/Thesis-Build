import MongoClient from "mongodb"

const connectDBStocks = (connectString) => {
    MongoClient.connect(connectString);
}

export default connectDBStocks