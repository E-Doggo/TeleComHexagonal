import { Express } from "express";
import dataPlanRouter from "./routes";

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000; // Your desired port

app.use("", dataPlanRouter);

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default server;
