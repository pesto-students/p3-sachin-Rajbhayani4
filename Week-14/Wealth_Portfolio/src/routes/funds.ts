import express from "express";
import { addFunds, getFunds, updateFunds } from "../controllers/funds";
import { authUsers } from "../middleware/auth";
const router = express.Router();

router.post('/create', authUsers, addFunds);

router.post('/get', authUsers, getFunds);

router.post('/update', authUsers, updateFunds);

router.post('/delete', authUsers, updateFunds);

export default router