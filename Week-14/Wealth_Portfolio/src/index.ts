import express from "express";
import * as dotenv from 'dotenv';
import { connectDB } from "./Database/db";
import UserRouter from "./routes/user";
import IncomeExpensesRouter from "./routes/incomeExpenses";
import FundsRouter from "./routes/funds";
dotenv.config()

const app = express();
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

connectDB().then(() => {
    console.log("Database connected successfully")
}).catch((error: any) => {
    console.log("Database Error index:--", error.message);
})

app.use('/user', UserRouter);
app.use('/incomeExpenses', IncomeExpensesRouter);
app.use('/funds', FundsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})

