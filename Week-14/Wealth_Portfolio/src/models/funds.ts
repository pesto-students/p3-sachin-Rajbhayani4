import { Schema, model, Types } from "mongoose";
import { funds } from "../interfaces/funds";

const ObjectId = Schema.Types.ObjectId

const fundsSchema = new Schema<funds>({
    type: {
        type: String,
        enum: ["Assets", "Equity", "FixedIncome"],
        default: "User"
    },
    value: {
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

const Funds = model<funds>('funds', fundsSchema);
export default Funds