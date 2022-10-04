import { Request, Response } from "express";
import User from '../models/users';

export const SignupUser = async (req: Request, res: Response) => {

    const { username, fullName, email, password, age, gender } = req?.body;

    if (Object.keys(req?.body).length > 0) {

    } else {
        return res.json({
            status: false,
            message: "Data is not available"
        })
    }
}

export const userLogin = async (req: Request, res: Response) => {
    const { username, email, password } = req?.body;

    if (Object.keys(req?.body).length > 0) {

    } else {
        return res.json({
            status: false,
            message: "Data is not available"
        })
    }
}
