import { Types } from "mongoose";

export interface funds {
    type: string
    value: number
    description: string
    userId: Types.ObjectId
    date: Date
    isDeleted: boolean
}