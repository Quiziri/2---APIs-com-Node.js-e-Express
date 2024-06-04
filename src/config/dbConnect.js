import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING);

let db = mongoose.connecttion;

export default db;