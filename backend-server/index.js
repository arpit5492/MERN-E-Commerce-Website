import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import pool from "./config/index.js";
dotenv.config();
const app = express();
const port = process.env.PORT;

//Middleware functions
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send("Connection Established!!");
    }
  })
});

app.listen(port, () => {
  console.log(`The server is running on: http://localhost:${port}`);
});