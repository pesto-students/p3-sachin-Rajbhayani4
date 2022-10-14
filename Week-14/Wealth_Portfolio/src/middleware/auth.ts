import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface RequestWith extends Request {
    userId: string,
    username: string,
    fullName: string,
    email: string,
    age: number,
    gender: string,
}

export const authUsers = async (req: any, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        const token = await req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_PRIVATE_KEY || 'qwasdf12', async (err: any, decoded: any) => {
            console.log("🚀 ~ file: auth.ts ~ line 9 ~ jwt.verify ~ decoded", decoded)
            if (decoded) {
                if (!decoded?.isDeleted) {
                    req.userId = decoded?._id;
                    req.username = decoded?.username;
                    req.fullName = decoded?.fullName;
                    req.email = decoded?.email;
                    req.age = decoded?.age;
                    req.gender = decoded?.gender;
                    next();
                } else if (decoded?.isDeleted) {
                    return res.json({
                        status: 401,
                        message: "invalid token!",
                    });
                }
            } else if (err) {
                return res.json({
                    status: 401,
                    message: "invalid token!",
                });
            }
        });
    } else {
        return res.json({
            status: 401,
            message: "Unauthorized",
        });
    }
}