import express from "express";
import { addFunds, getFunds, updateFunds } from "../controllers/funds"
const router = express.Router();

router.post('/create', addFunds);

router.post('/get', getFunds);

router.post('/update', updateFunds);

router.post('/delete', updateFunds);

export default router