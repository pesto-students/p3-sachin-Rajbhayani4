import express from "express";
import * as dotenv from 'dotenv';
import { connectDB } from "./Database/db";
import UserRouter from "./routes/user";
dotenv.config()

const app = express();
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

