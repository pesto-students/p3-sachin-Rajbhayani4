import { Types, Document } from "mongoose";

export interface funds extends Document {
    type: string
    value: number
    description: string
    userId: Types.ObjectId
    date: Date
    isDeleted: boolean
}