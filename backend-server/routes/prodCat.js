import pool from "../config/index.js";
import express from "express";

const prodCat = express.Router();

prodCat.get("/", (req, res) => {
  let tableData;
    pool.query("select * from categories", (err, data) => {
      if(err) {
        tableData = err;
        res.status(500).send(tableData);
      } else {
        tableData = data;
        res.status(200).send(tableData);
      }
    });
  });

export default prodCat;