import { Schema, model, Types } from "mongoose";
import { incomeExpenses } from "../interfaces/incomeExpenses";

const ObjectId = Schema.Types.ObjectId

const incomeExpensesSchema = new Schema<incomeExpenses>({
    income: {
        type: Number
    },
    expense: {
        type: Number
    },
    userId: {
        type: ObjectId,
        ref: "users"
    },
    description: {
        type: String,
    },
    date: Date,
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const IncomeExpenses = model<incomeExpenses>('incomeExpenses', incomeExpensesSchema);
export default IncomeExpenses
