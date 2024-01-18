import express from "express";
import mongoose from "mongoose";
import getRisk from './controller.js';

const server = express();

const uri = "mongodb+srv://catabong89:0lUcXwGJzFI7rjaD@cybervest.0vofb9r.mongodb.net/cybervest"

async function connect() {

    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch(err) {
        console.log(err);
    }
}  

connect();

server.get('api/v1/risk/:tolerance', getRisk);
server.listen(3000, console.log('Server runnung on port 3000'))