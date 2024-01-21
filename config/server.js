import express from "express";
import cors from "cors"
import morgan from "morgan"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import getRisk from './controller.js';

const server = express();
dotenv.config()
server.use(cors())
server.use(morgan('dev'))

const uri = process.env.MONGODB_URL;


async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB");

    } catch(err) {
        console.log(err);
    }
}  

connect();

server.get('/api/v1/risk/:tolerance', getRisk);
server.listen(3000, console.log('Server runnung on port 3000'))