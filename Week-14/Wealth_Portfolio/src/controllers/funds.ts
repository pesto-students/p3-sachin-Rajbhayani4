import { Request, Response } from "express";
import Funds from '../models/funds';

const ObjectId = require("mongoose").Types.ObjectId;

export const addFunds = (req: Request, res: Response) => {

    const { type, value, userId, description, date } = req?.body;

    if (Object.keys(req?.body).length > 0) {

        if (type && value && userId && date) {

            Funds.create({ type, value, userId, description, date }).then((data: any) => {
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

export const getFunds = (req: Request, res: Response) => {

    const { id, page, limit } = req?.body;

    let query = { $and: [{ _id: id }, { isDeleted: false }] };

    Funds.paginate(query, { page, limit }).then((data: any) => {
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

export const updateFunds = (req: Request, res: Response) => {

    const { id, updateItem } = req?.body;

    if (id) {
        Funds.findOneAndUpdate({ id, isDeleted: false }, updateItem, { new: true }).then((result: any) => {
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