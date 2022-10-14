import { Schema, model, Types } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { IUser } from "../interfaces/user";

const userSchema = new Schema<IUser>({
    username: {
        type: "string",
        required: true
    },
    fullName: {
        type: "string",
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        index: true,
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, "Invalid Email"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: [8, "Password must be at least 8 characters"],
        maxlength: [128, "Password max length exceed"],
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        default: "User"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

// userSchema.pre("save", async function () {
//     const user = this;
//     if (user.isModified("password")) {
//         const saltRounds = 10;
//         user.password = await bcrypt.hash(this.password, saltRounds);
//     }
// });

// userSchema.methods.validatePassword = async function (password: string) {
//     return await bcrypt.compare(password, this.password);
// };

userSchema.pre("save", async function () {
    const user = this;
    if (user.isModified("password")) {
        const saltRounds = 10;
        user.password = await bcrypt.hash(this.password, saltRounds);
    }
});

userSchema.methods.validatePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

const User = model<IUser>('user', userSchema);
export default User