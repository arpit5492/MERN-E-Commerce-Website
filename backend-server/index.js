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
  let tableData;
  pool.getConnection((err, connection) => {
    if(err) {
      res.status(500).send(err)
    } else {
      pool.query("select * from categories", (err, data) => {
        if(err) {
          tableData = err;
          res.status(500).send(tableData);
        } else {
          tableData = data;
          res.status(200).send(tableData);
        }
      })
    }
  })
});

app.listen(port, () => {
  console.log(`The server is running on: http://localhost:${port}`);
});