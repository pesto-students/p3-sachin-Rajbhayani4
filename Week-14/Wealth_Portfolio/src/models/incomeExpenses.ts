import mongoosePaginate from "mongoose-paginate";
import { Schema, model, Types, PaginateModel, Document } from "mongoose";
import { incomeExpenses } from "../interfaces/incomeExpenses";

const ObjectId = Schema.Types.ObjectId

const incomeExpensesSchema: Schema = new Schema<incomeExpenses>({
    // income: {
    //     type: Number
    // },
    // expense: {
    //     type: Number
    // },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "users",
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

incomeExpensesSchema.plugin(mongoosePaginate);

interface IncomeExpenses<T extends Document> extends PaginateModel<T> { }

const IncomeExpenses: IncomeExpenses<incomeExpenses> = model<incomeExpenses>('incomeExpenses', incomeExpensesSchema);

export default IncomeExpenses;