import { Request, Response } from "express";
import IncomeExpenses from '../models/incomeExpenses';
import { sendEmail } from "../functions/emailService";
import { result } from "lodash";
// import ISODate from "mongoose";

export const addIncomeAndExpenses = (req: any, res: Response) => {

    const { type, value, description, date } = req?.body;
    const { userId, username, fullName, email, age, gender } = req;
    const file = req.file;

    if (Object.keys(req?.body).length > 0) {

        if (type && date) {
            IncomeExpenses.create({ type, userId, value, description, date, image: file?.originalname }).then((data: any) => {
                sendEmail(email, type, `You are add your ${type} on ${value}`);
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
        } else {
            return res.json({
                status: false,
                message: "Enter a required value"
            })
        }

    }
    else {
        return res.json({
            status: false,
            message: "Data is not available"
        })
    }

}

export const getIncomeAndExpenses = (req: any, res: Response) => {
    const { page, limit, month, year } = req?.body;

    const { userId, username, fullName, email, age, gender } = req;

    let query: any = { $and: [{ userId }, { isDeleted: false }] };

    if (month && year) query.$and.push({ date: { $gte: new Date(`${year}-${month}-01`), $lte: new Date(`${year}-${month}-31`) } });

    IncomeExpenses.paginate(query, { page, limit }).then((data: any) => {
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

export const updateIncomeAndExpenses = (req: any, res: Response) => {
    const { userId, username, fullName, email, age, gender } = req;
    const { id, updateItem } = req?.body;
    const file = req.file;

    if (Object.keys(req?.body).length > 0) {

        if (id) {
            file && (updateItem.image = file?.originalname);
            IncomeExpenses.findOneAndUpdate({ id, isDeleted: false, userId }, updateItem, { new: true }).then((result: any) => {
                if (result !== null) {
                    return res.json({
                        status: true,
                        message: result
                    })
                }
                else if (result?.isDeleted == true) {
                    return res.json({
                        status: true,
                        message: "Data was deleted"
                    })
                } else {
                    return res.json({
                        status: false,
                        message: "Data is not available"
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
                message: "Enter a required value"
            })
        }
    }
    else {
        return res.json({
            status: false,
            message: "Data is not available"
        })
    }

}