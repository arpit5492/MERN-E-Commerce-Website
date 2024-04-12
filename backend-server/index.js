import express from "express";
import morgan from "morgan";
import prodCat from "./routes/prodCat.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

//Middleware functions
app.use(morgan("dev"));
app.use("/prodCat", prodCat);

app.listen(port, () => {
  console.log(`The server is running on: http://localhost:${port}`);
});