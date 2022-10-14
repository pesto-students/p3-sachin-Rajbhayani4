import { Request, Response } from "express";
import User from '../models/users';
import bcrypt from "bcryptjs";
import { geneTokens } from "../functions/JwtToken";

export const SignupUser = async (req: any, res: Response) => {

    const { username, fullName, email, password, age, gender } = req?.body;

    if (Object.keys(req?.body).length > 0) {

        User.findOne({ $or: [{ username }, { email }] }).then((result: any) => {
            if (result) {
                return res.json({
                    status: false,
                    message: "User already exists"
                })
            } else {
                User.create({ username, fullName, email, password, age, gender }).then((data: any) => {
                    return res.json({
                        status: true,
                        data
                    })
                }).catch((error: any) => {
                    return res.json({
                        status: false,
                        message: error.message
                    })
                })
            }
        }).catch((error: any) => {
            return res.json({
                status: false,
                message: error.message
            })
        })
    } else {
        return res.json({
            status: false,
            message: "Data is not available"
        })
    }
}

export const userLogin = async (req: any, res: Response) => {
    if (Object.keys(req?.body).length > 0) {
        const { username, email, password } = req?.body;

        User.findOne({ $or: [{ email }, { username }], isDeleted: false }).then(async (data: any) => {
            const isValid = await bcrypt?.compare(password, data?.password);
            const result = data?._doc;
            delete data?._doc?.password;
            delete data?._doc?.createdAt;
            delete data?._doc?.updatedAt;
            delete data?._doc?.__v;
            if (isValid) {
                let tokenData = data;

                const token = await geneTokens(tokenData);
                return res.json({
                    status: true,
                    data: result,
                    token
                })
            } else {
                return res.json({
                    status: false,
                    message: "Password is incorrect"
                })
            }
        }).catch((error: any) => {
            return res.json({
                status: false,
                message: error.message
            })
        })

    } else {
        return res.json({
            status: false,
            message: "Data is not available"
        })
    }
}