import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: String,
            required: true,
        },
        service: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);