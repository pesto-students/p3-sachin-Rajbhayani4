import { Types } from "mongoose";

export interface incomeExpenses {
    income: number
    expense: number
    description: string
    userId: Types.ObjectId
    date: Date
    isDeleted: boolean
}