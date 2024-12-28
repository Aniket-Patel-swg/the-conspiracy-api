import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { CustomError } from "./utils/errorHandling/exceptions";
dotenv.config();

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use((err: any, req: any, res: any, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json(err.serializeErrors());
    }
    res.status(500).json({ message: "Internal Server Error" });
});