import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "./utils/errorHandling/exceptions";
import authRoutes from "./routes/auth.routes";
import { APIRespone } from "./utils/apiResponse/apiResponse";
dotenv.config();

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Welcome to the Conspiracy API");
    res.send(new APIRespone(200, "Welcome to the Conspiracy API"));
});

app.use("/v1/auth", authRoutes);

app.use((err: any, req: any, res: any, next: NextFunction) => {
    console.log('error occured');
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json(err.serializeErrors());
    }
    res.status(500).json({ message: "Internal Server Error" });
});