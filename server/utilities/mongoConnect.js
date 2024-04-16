import * as dotenv from 'dotenv'
dotenv.config();

import { MongoClient } from 'mongodb';
const uri = process.env.CONNECTION_STRING

const client = new MongoClient(uri);

export default client;
