import express from "express";
import { addIncomeAndExpenses, getIncomeAndExpenses, updateIncomeAndExpenses } from "../controllers/incomeExpenses"
const router = express.Router();

router.post('/create', addIncomeAndExpenses);

router.post('/get', getIncomeAndExpenses);

router.post('/update', updateIncomeAndExpenses);

router.post('/delete', updateIncomeAndExpenses);

export default router;