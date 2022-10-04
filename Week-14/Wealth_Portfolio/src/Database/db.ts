import mongoose from "mongoose"
// const mongoose = require("mongoose");

export const connectDB = () => {
    return mongoose.connect(process.env.DATABASE_URL || '');
};