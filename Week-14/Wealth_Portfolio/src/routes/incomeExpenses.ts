import express from "express";
import { addIncomeAndExpenses, getIncomeAndExpenses, updateIncomeAndExpenses } from "../controllers/incomeExpenses";
import { authUsers } from "../middleware/auth";
import { upload } from "../middleware/fileUploads";
const router = express.Router();

router.post('/create', authUsers, upload, addIncomeAndExpenses);

router.post('/get', authUsers, getIncomeAndExpenses);

router.post('/update', authUsers, updateIncomeAndExpenses);

router.post('/delete', authUsers, updateIncomeAndExpenses);

export default router;