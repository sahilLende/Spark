import express from "express";
const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  res.status(200).send("okdoas");
});

authRouter.get("/login", (req, res) => {
  res.status(200).send("ok");
});

authRouter.post("/register", (req, res) => {
  res.status(200).send("ok");
});

export default authRouter;
