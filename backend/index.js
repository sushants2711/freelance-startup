import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORTNUMBER = PORT;

app.use(
    helmet({
        crossOriginResourcePolicy: { policy: "cross-origin" },
    }),
);

app.use(morgan("dev"));

app.use(express.json());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

const origins = ALLOWED_ORIGINS
    ? ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
    : [];

app.use(
    cors({
        origin: origins,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
        exposedHeaders: ["Set-Cookie"],
        maxAge: 86400,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    }),
);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is working",
        timestamp: new Date().toISOString(),
    });
});

// health check route
app.get("/health", (req, res) => {
    const dbStatus =
        mongoose.connection.readyState === 1
            ? "Database Connected"
            : "Database Disconnected";
    res.status(200).json({
        success: true,
        message: "Server is healthy",
        database: dbStatus,
        timestamp: new Date().toISOString(),
    });
});

app.listen(PORTNUMBER, () => {
    console.log(`Server is running on http://localhost:${PORTNUMBER}`);
});