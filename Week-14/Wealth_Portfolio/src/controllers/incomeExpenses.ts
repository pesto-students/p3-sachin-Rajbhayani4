import { Request, Response } from "express";
import IncomeExpenses from '../models/incomeExpenses';

export const addIncomeAndExpenses = (req: Request, res: Response) => {

    const { type, userId, description, date } = req?.body;

    if (Object.keys(req?.body).length > 0) {

        if (type && userId && date) {
            IncomeExpenses.create({ type, userId, description, date }).then((data: any) => {
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

export const updateIncomeAndExpenses = (req: Request, res: Response) => {

    const { id, updateItem } = req?.body;

    if (Object.keys(req?.body).length > 0) {

        if (id) {
            IncomeExpenses.findOneAndUpdate({ id, isDeleted: false }, updateItem, { new: true }).then((result: any) => {
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