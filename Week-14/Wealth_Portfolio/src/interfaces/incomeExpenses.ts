import { Types, Document } from "mongoose";

export interface incomeExpenses extends Document {
    type: string
    value: number
    description: string
    userId: Types.ObjectId
    image: string
    date: Date
    isDeleted: boolean
}