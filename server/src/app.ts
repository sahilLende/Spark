import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import authRouter from "./routes/auth";
import cors from "cors";
import mongoose from "mongoose";

const corsOptions = {
  origin: "http://localhost:5173",
  successStatus: 200,
};

// db instance practially
let dbconnection: unknown;
let dbError = false;

mongoose
  .connect(process.env.MONGOKEY!)
  .then((result: unknown) => {
    dbconnection = result;
    if (dbError) {
      dbError = false;
    }
    console.log("connected💚");
  })
  .catch((err: unknown) => {
    console.log(err);
    dbError = true;
  });

const app = express();
const port: string = process.env.PORT ?? "3000";

app.all("/", (req: Request, res: Response, next) => {
  if (dbError)
    res.status(500).json({
      message: "Server Down",
    });
  next();
});

/* middlewares */
app.use(cors(corsOptions));

app.use("/auth", authRouter); // auth router being mounted on  /auth path

/* method on app instaance returns http server */
app.listen(port, () => {
  console.log("listening");
});

export default app;
