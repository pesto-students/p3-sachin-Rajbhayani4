import express from "express";
import { SignupUser, userLogin } from "../controllers/user"
const router = express.Router();


router.post('/signup', SignupUser);

router.post('/login', userLogin);

export default router;