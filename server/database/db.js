import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

export const db = async () => {
    try {     
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
    });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};