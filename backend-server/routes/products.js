import pool from "../config/index.js";
import express from "express";

const product = express.Router();

product.get("/", (req, res) => {
  let tableData;
  pool.query("select * from products", (err, data) => {
    if(err) {
      tableData = err;
      res.status(500).send(tableData);
    } else {
      tableData = data;
      res.status(200).json(tableData);
    }
  })
});

export default product;