import mongoose from "mongoose";
import { MONGO_URI } from "./constant.js";

export const connectDB = async () => {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI is not defined");
    };

    try {
        await mongoose.connect(MONGO_URI)
            .then(() => console.log(`DB Connected Successfully, ${mongoose.connection.host}`))
            .catch((error) => console.log(`Error Occured from Db, ${error.message}`));
    } catch (error) {
        console.error(`Error connecting to MongoDB, ${error.message}`);
        process.exit(1);
    }
};