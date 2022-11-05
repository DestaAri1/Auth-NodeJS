import express from "express";
import dotenv from "dotenv";
import db from './config/database.js';
import router from "./route/index.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database terkoneksi');
} catch (error) {
    console.log(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=>console.log('Server Running at port 5000'));