import mongoosePaginate from "mongoose-paginate";
import { Schema, model, Types, PaginateModel, Document } from "mongoose";
import { funds } from "../interfaces/funds";

const ObjectId = Schema.Types.ObjectId

const fundsSchema = new Schema<funds>({
    type: {
        type: String,
        enum: ["Assets", "Equity", "FixedIncome"],
        default: "User",
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
    isDeleted: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});

fundsSchema.plugin(mongoosePaginate);

interface Funds<T extends Document> extends PaginateModel<T> { }

const Funds: any = model<funds>('funds', fundsSchema);

export default Funds;